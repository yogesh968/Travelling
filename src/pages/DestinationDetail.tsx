import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { destinations } from "@/data/destinations";
import { MapPin, Star, Clock, Plus, Heart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface ItineraryItem {
  id: string;
  name: string;
  type: 'attraction' | 'hotel' | 'restaurant';
  image: string;
  day?: number;
}

const DestinationDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const [favorites, setFavorites] = useState<string[]>([]);

  const destination = destinations.find(dest => dest.id === id);

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  const addToItinerary = (item: any, type: 'attraction' | 'hotel' | 'restaurant') => {
    const itineraryItem: ItineraryItem = {
      id: item.id,
      name: item.name,
      type,
      image: item.image
    };

    // Get existing itinerary from localStorage
    const existingItinerary = JSON.parse(localStorage.getItem('travelItinerary') || '[]');
    
    // Check if item already exists
    const exists = existingItinerary.some((existing: ItineraryItem) => 
      existing.id === item.id && existing.type === type
    );

    if (exists) {
      toast({
        title: "Already in itinerary",
        description: `${item.name} is already in your itinerary`,
        variant: "destructive"
      });
      return;
    }

    // Add to itinerary
    existingItinerary.push(itineraryItem);
    localStorage.setItem('travelItinerary', JSON.stringify(existingItinerary));

    toast({
      title: "Added to itinerary",
      description: `${item.name} has been added to your itinerary`,
    });
  };

  const toggleFavorite = (itemId: string) => {
    if (favorites.includes(itemId)) {
      setFavorites(favorites.filter(id => id !== itemId));
    } else {
      setFavorites([...favorites, itemId]);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 h-full flex items-end pb-8">
          <div className="text-white animate-fade-in">
            <div className="flex items-center mb-2">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{destination.country}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name}</h1>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400 mr-1" />
                <span className="font-semibold">{destination.rating}</span>
              </div>
              <Badge variant="secondary" className="bg-white/20 text-white border-0">
                From {destination.price}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-12 animate-slide-up">
          <p className="text-lg text-muted-foreground leading-relaxed">
            {destination.description}
          </p>
        </div>

        {/* Map Section */}
        <div className="mb-12 animate-scale-in">
          <h2 className="text-2xl font-bold mb-6 text-center">Location</h2>
          <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&q=${encodeURIComponent(destination.name + ', ' + destination.country)}`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>

        {/* Tabs for Attractions, Hotels, Restaurants */}
        <Tabs defaultValue="attractions" className="animate-fade-in">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="attractions">Attractions</TabsTrigger>
            <TabsTrigger value="hotels">Hotels</TabsTrigger>
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
          </TabsList>

          {/* Attractions */}
          <TabsContent value="attractions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.attractions.map((attraction, index) => (
                <Card key={attraction.id} className="overflow-hidden hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="relative">
                    <div 
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${attraction.image})` }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-3 right-3 text-white hover:bg-white/20"
                        onClick={() => toggleFavorite(attraction.id)}
                      >
                        <Heart className={`h-5 w-5 ${favorites.includes(attraction.id) ? 'fill-red-500 text-red-500' : ''}`} />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{attraction.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm">{attraction.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <Badge variant="outline">{attraction.type}</Badge>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {attraction.duration}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                      {attraction.description}
                    </p>

                    <Button 
                      onClick={() => addToItinerary(attraction, 'attraction')}
                      className="w-full bg-gradient-ocean"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Itinerary
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Hotels */}
          <TabsContent value="hotels">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {destination.hotels.map((hotel, index) => (
                <Card key={hotel.id} className="overflow-hidden hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="md:flex">
                    <div 
                      className="h-48 md:h-auto md:w-1/2 bg-cover bg-center"
                      style={{ backgroundImage: `url(${hotel.image})` }}
                    />
                    <CardContent className="p-6 md:w-1/2">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg">{hotel.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                          <span className="text-sm">{hotel.rating}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-3">
                        {hotel.description}
                      </p>

                      <div className="mb-4">
                        <p className="font-semibold text-primary text-lg">{hotel.price}</p>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {hotel.amenities.map(amenity => (
                          <Badge key={amenity} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        onClick={() => addToItinerary(hotel, 'hotel')}
                        className="w-full bg-gradient-ocean"
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add to Itinerary
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Restaurants */}
          <TabsContent value="restaurants">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {destination.restaurants.map((restaurant, index) => (
                <Card key={restaurant.id} className="overflow-hidden hover-lift animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${restaurant.image})` }}
                  />
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-semibold text-lg">{restaurant.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span className="text-sm">{restaurant.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                      <Badge variant="outline">{restaurant.cuisine}</Badge>
                      <span>{restaurant.priceRange}</span>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4">
                      {restaurant.description}
                    </p>

                    <Button 
                      onClick={() => addToItinerary(restaurant, 'restaurant')}
                      className="w-full bg-gradient-ocean"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Add to Itinerary
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DestinationDetail;