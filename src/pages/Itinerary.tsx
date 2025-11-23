import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin, Trash2, Download, Plus, Clock, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ItineraryItem {
  id: string;
  name: string;
  type: 'attraction' | 'hotel' | 'restaurant';
  image: string;
  day?: number;
}

const Itinerary = () => {
  const [itineraryItems, setItineraryItems] = useState<ItineraryItem[]>([]);
  const [tripDuration, setTripDuration] = useState<number>(3);
  const [draggedItem, setDraggedItem] = useState<ItineraryItem | null>(null);
  const [density, setDensity] = useState<'comfortable' | 'compact'>('comfortable');
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const { toast } = useToast();

  const handleImageError = (itemId: string, itemType: string) => {
    setImageErrors(prev => ({ ...prev, [`${itemId}-${itemType}`]: true }));
  };

  useEffect(() => {
    const savedItinerary = JSON.parse(localStorage.getItem('travelItinerary') || '[]');
    setItineraryItems(savedItinerary);
  }, []);

  const saveItinerary = (newItems: ItineraryItem[]) => {
    setItineraryItems(newItems);
    localStorage.setItem('travelItinerary', JSON.stringify(newItems));
  };

  const removeFromItinerary = (itemId: string, type: string) => {
    const newItems = itineraryItems.filter(item => !(item.id === itemId && item.type === type));
    saveItinerary(newItems);
    toast({
      title: "Removed from itinerary",
      description: "Item has been removed from your itinerary"
    });
  };

  const assignToDay = (item: ItineraryItem, day: number) => {
    const newItems = itineraryItems.map(i => 
      i.id === item.id && i.type === item.type ? { ...i, day } : i
    );
    saveItinerary(newItems);
  };

  const removeFromDay = (item: ItineraryItem) => {
    const newItems = itineraryItems.map(i => 
      i.id === item.id && i.type === item.type ? { ...i, day: undefined } : i
    );
    saveItinerary(newItems);
  };

  const clearDay = (day: number) => {
    const newItems = itineraryItems.map(i => (i.day === day ? { ...i, day: undefined } : i));
    saveItinerary(newItems);
    toast({ title: `Cleared Day ${day}`, description: 'All items were unassigned from this day' });
  };

  const moveItemToDay = (item: ItineraryItem, targetDay: number) => {
    if (targetDay < 1 || targetDay > tripDuration) return;
    assignToDay(item, targetDay);
  };

  const handleDragStart = (item: ItineraryItem) => {
    setDraggedItem(item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, day: number) => {
    e.preventDefault();
    if (draggedItem) {
      assignToDay(draggedItem, day);
      setDraggedItem(null);
    }
  };

  const exportItinerary = () => {
    const itineraryText = generateItineraryText();
    const blob = new Blob([itineraryText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-travel-itinerary.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Itinerary exported",
      description: "Your itinerary has been downloaded as a text file"
    });
  };

  const generateItineraryText = () => {
    let text = "MY TRAVEL ITINERARY\n";
    text += "==================\n\n";

    for (let day = 1; day <= tripDuration; day++) {
      const dayItems = itineraryItems.filter(item => item.day === day);
      text += `DAY ${day}\n`;
      text += "------\n";
      
      if (dayItems.length === 0) {
        text += "No activities planned\n\n";
      } else {
        dayItems.forEach(item => {
          text += `• ${item.name} (${item.type})\n`;
        });
        text += "\n";
      }
    }

    const unassignedItems = itineraryItems.filter(item => !item.day);
    if (unassignedItems.length > 0) {
      text += "UNASSIGNED ITEMS\n";
      text += "================\n";
      unassignedItems.forEach(item => {
        text += `• ${item.name} (${item.type})\n`;
      });
    }

    return text;
  };

  const unassignedItems = itineraryItems.filter(item => !item.day);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-tropical text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            My Travel Itinerary
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            Plan your perfect trip day by day
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Controls */}
        <div className="bg-card rounded-2xl shadow-soft p-4 md:p-6 mb-8 animate-scale-in">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Calendar className="h-5 w-5 text-primary" />
              <label className="font-medium">Trip Duration:</label>
              <Select value={tripDuration.toString()} onValueChange={(value) => setTripDuration(Number(value))}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(days => (
                    <SelectItem key={days} value={days.toString()}>
                      {days} day{days > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2 items-center">
              <Badge variant="outline" className="hidden md:inline">Density</Badge>
              <Tabs value={density} onValueChange={(v: string) => setDensity(v as 'comfortable' | 'compact')} className="hidden sm:block">
                <TabsList className="grid grid-cols-2">
                  <TabsTrigger value="comfortable">Comfortable</TabsTrigger>
                  <TabsTrigger value="compact">Compact</TabsTrigger>
                </TabsList>
              </Tabs>
              <Button onClick={exportItinerary} variant="outline" disabled={itineraryItems.length === 0}>
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Badge variant="secondary" className="px-3 py-1">
                {itineraryItems.length} items
              </Badge>
            </div>
          </div>
        </div>

        {itineraryItems.length === 0 ? (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">✈️</div>
            <h3 className="text-2xl font-semibold mb-2">Your itinerary is empty</h3>
            <p className="text-muted-foreground mb-4">
              Start by exploring destinations and adding attractions, hotels, and restaurants
            </p>
            <Button onClick={() => window.location.href = '/destinations'}>
              Explore Destinations
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="planner" className="animate-fade-in">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="planner">Day Planner</TabsTrigger>
              <TabsTrigger value="overview">Overview</TabsTrigger>
            </TabsList>

            {/* Day Planner */}
            <TabsContent value="planner">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Unassigned Items */}
                <div className="lg:col-span-1">
                  <Card className="sticky top-20">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Plus className="h-5 w-5 mr-2" />
                        Items to Plan
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {unassignedItems.length === 0 ? (
                        <p className="text-muted-foreground text-sm">All items are planned!</p>
                      ) : (
                        unassignedItems.map(item => (
                          <div
                            key={`${item.id}-${item.type}`}
                            draggable
                            onDragStart={() => handleDragStart(item)}
                            className="bg-muted rounded-lg p-3 cursor-move hover:bg-muted/80 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium text-sm">{item.name}</p>
                                <Badge variant="outline" className="text-xs mt-1">
                                  {item.type}
                                </Badge>
                              </div>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => removeFromItinerary(item.id, item.type)}
                              >
                                <Trash2 className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        ))
                      )}
                    </CardContent>
                  </Card>
                </div>

                {/* Day Columns */}
                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {Array.from({ length: tripDuration }, (_, index) => {
                    const day = index + 1;
                    const dayItems = itineraryItems.filter(item => item.day === day);

                    return (
                      <Card
                        key={day}
                        className="min-h-96"
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, day)}
                      >
                        <CardHeader>
                          <CardTitle className="flex items-center justify-between gap-2">
                            <span>Day {day}</span>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">{dayItems.length} items</Badge>
                              {dayItems.length > 0 && (
                                <Button size="sm" variant="ghost" onClick={() => clearDay(day)}>
                                  Clear Day
                                </Button>
                              )}
                            </div>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className={density === 'compact' ? 'space-y-2' : 'space-y-3'}>
                          {dayItems.length === 0 ? (
                            <div className="text-center py-8 text-muted-foreground border-2 border-dashed border-muted rounded-lg">
                              <Clock className="h-8 w-8 mx-auto mb-2" />
                              <p className="text-sm">Drop items here</p>
                            </div>
                          ) : (
                            dayItems.map(item => (
                              <div
                                key={`${item.id}-${item.type}-day${day}`}
                                className={density === 'compact' ? 'bg-accent rounded-lg p-2' : 'bg-accent rounded-lg p-3'}
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    {imageErrors[`${item.id}-${item.type}`] ? (
                                      <div className={`${density === 'compact' ? 'h-20' : 'h-24'} w-full bg-gradient-to-br from-blue-400 to-indigo-600 rounded-md mb-2 flex items-center justify-center`}>
                                        <ImageIcon className="h-8 w-8 text-white/50" />
                                      </div>
                                    ) : (
                                      <div
                                        className={density === 'compact' ? 'w-full h-20 bg-cover bg-center rounded-md mb-2' : 'w-full h-24 bg-cover bg-center rounded-md mb-2'}
                                        style={{ backgroundImage: `url(${item.image})` }}
                                      >
                                        <img
                                          src={item.image}
                                          alt={item.name}
                                          className="hidden"
                                          onError={() => handleImageError(item.id, item.type)}
                                        />
                                      </div>
                                    )}
                                    <p className="font-medium text-sm">{item.name}</p>
                                    <Badge variant="outline" className="text-xs mt-1">
                                      {item.type}
                                    </Badge>
                                  </div>
                                  <div className="flex flex-col gap-1 ml-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6"
                                      onClick={() => removeFromDay(item)}
                                    >
                                      <Plus className="h-3 w-3 rotate-45" />
                                    </Button>
                                    <div className="flex gap-1">
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6"
                                        onClick={() => moveItemToDay(item, day - 1)}
                                        disabled={day === 1}
                                        title="Move to previous day"
                                      >
                                        ◀
                                      </Button>
                                      <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-6 w-6"
                                        onClick={() => moveItemToDay(item, day + 1)}
                                        disabled={day === tripDuration}
                                        title="Move to next day"
                                      >
                                        ▶
                                      </Button>
                                    </div>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-6 w-6"
                                      onClick={() => removeFromItinerary(item.id, item.type)}
                                    >
                                      <Trash2 className="h-3 w-3" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            ))
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            {/* Overview */}
            <TabsContent value="overview">
              <div className="space-y-6">
                {Array.from({ length: tripDuration }, (_, index) => {
                  const day = index + 1;
                  const dayItems = itineraryItems.filter(item => item.day === day);

                  return (
                    <Card key={day} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <CardTitle>Day {day}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        {dayItems.length === 0 ? (
                          <p className="text-muted-foreground">No activities planned for this day</p>
                        ) : (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {dayItems.map(item => (
                              <div key={`${item.id}-${item.type}-overview`} className="flex items-center space-x-3 p-3 rounded-lg bg-accent">
                                {imageErrors[`${item.id}-${item.type}`] ? (
                                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-md flex-shrink-0 flex items-center justify-center">
                                    <ImageIcon className="h-6 w-6 text-white/50" />
                                  </div>
                                ) : (
                                  <div
                                    className="w-16 h-16 bg-cover bg-center rounded-md flex-shrink-0"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                  >
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="hidden"
                                      onError={() => handleImageError(item.id, item.type)}
                                    />
                                  </div>
                                )}
                                <div className="flex-1 min-w-0">
                                  <p className="font-medium text-sm truncate">{item.name}</p>
                                  <Badge variant="outline" className="text-xs">
                                    {item.type}
                                  </Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}

                {unassignedItems.length > 0 && (
                  <Card className="animate-slide-up">
                    <CardHeader>
                      <CardTitle className="text-muted-foreground">Unassigned Items</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {unassignedItems.map(item => (
                          <div key={`${item.id}-${item.type}-unassigned`} className="flex items-center space-x-3 p-3 rounded-lg bg-muted">
                            {imageErrors[`${item.id}-${item.type}`] ? (
                              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-md flex-shrink-0 flex items-center justify-center">
                                <ImageIcon className="h-6 w-6 text-white/50" />
                              </div>
                            ) : (
                              <div
                                className="w-16 h-16 bg-cover bg-center rounded-md flex-shrink-0"
                                style={{ backgroundImage: `url(${item.image})` }}
                              >
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="hidden"
                                  onError={() => handleImageError(item.id, item.type)}
                                />
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{item.name}</p>
                              <Badge variant="outline" className="text-xs">
                                {item.type}
                              </Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  );
};

export default Itinerary;