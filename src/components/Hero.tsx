import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { destinations } from "@/data/destinations";

const Hero = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [dateError, setDateError] = useState("");

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];

  // Get popular destinations for quick links
  const popularDestinations = destinations
    .filter(dest => dest.featured)
    .slice(0, 4);

  useEffect(() => {
    // Validate dates when they change
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      
      if (checkOutDate <= checkInDate) {
        setDateError("Check-out date must be after check-in date");
      } else {
        setDateError("");
      }
    } else {
      setDateError("");
    }
  }, [checkIn, checkOut]);

  const handleSearch = () => {
    // Validate dates before searching
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      
      if (checkOutDate <= checkInDate) {
        toast({
          title: "Invalid dates",
          description: "Check-out date must be after check-in date",
          variant: "destructive"
        });
        return;
      }
    }

    if (destination.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(destination.trim())}`);
    } else {
      navigate('/destinations');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleQuickDestination = (destName: string) => {
    setDestination(destName);
    navigate(`/destinations?search=${encodeURIComponent(destName)}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Elegant Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600">
        {/* Animated gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/50 via-transparent to-purple-500/30" />
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-white drop-shadow-lg">
            Plan Your Trips
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-white/95 max-w-2xl mx-auto px-4 font-light">
            Discover amazing destinations, create perfect itineraries, and make memories that last a lifetime
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-2xl max-w-5xl mx-auto animate-slide-up border border-white/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Destination */}
            <div className="relative sm:col-span-2 lg:col-span-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5 z-10" />
              <Input
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pl-9 md:pl-10 h-10 md:h-12 text-foreground text-sm md:text-base"
              />
            </div>

            {/* Check-in */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5 z-10 pointer-events-none" />
              <Input
                type="date"
                placeholder="Check-in"
                value={checkIn}
                min={today}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  // Auto-set check-out to be at least 1 day after check-in
                  if (e.target.value && checkOut) {
                    const checkInDate = new Date(e.target.value);
                    const checkOutDate = new Date(checkOut);
                    if (checkOutDate <= checkInDate) {
                      const nextDay = new Date(checkInDate);
                      nextDay.setDate(nextDay.getDate() + 1);
                      setCheckOut(nextDay.toISOString().split('T')[0]);
                    }
                  }
                }}
                className="pl-9 md:pl-10 h-10 md:h-12 text-foreground text-sm md:text-base"
              />
            </div>

            {/* Check-out */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5 z-10 pointer-events-none" />
              <Input
                type="date"
                placeholder="Check-out"
                value={checkOut}
                min={checkIn || today}
                onChange={(e) => setCheckOut(e.target.value)}
                className="pl-9 md:pl-10 h-10 md:h-12 text-foreground text-sm md:text-base"
              />
            </div>

            {/* Search Button */}
            <Button 
              onClick={handleSearch}
              disabled={!!dateError}
              className="h-10 md:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-105 transition-all duration-200 shadow-lg text-sm md:text-base px-4 md:px-6 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Search className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Search</span>
              <span className="sm:hidden">Go</span>
            </Button>
          </div>
          
          {/* Date Error Message */}
          {dateError && (
            <div className="mt-3 flex items-center gap-2 text-red-600 text-sm animate-slide-up">
              <AlertCircle className="h-4 w-4" />
              <span>{dateError}</span>
            </div>
          )}
        </div>

        {/* Popular Destinations Quick Links */}
        <div className="mt-8 md:mt-12 animate-fade-in">
          <p className="text-white/80 text-sm md:text-base mb-4">Popular destinations:</p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {popularDestinations.map((dest) => (
              <Button
                key={dest.id}
                variant="outline"
                size="sm"
                onClick={() => handleQuickDestination(dest.name)}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200 text-xs md:text-sm"
              >
                <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                {dest.name}
              </Button>
            ))}
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;