import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "@/assets/hero-travel.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSearch = () => {
    if (destination.trim()) {
      navigate(`/destinations?search=${encodeURIComponent(destination.trim())}`);
    } else {
      navigate('/destinations');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Plan Your Trips
            <span className="block bg-gradient-sunset bg-clip-text text-transparent">
              Dream Trip
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 text-white/90 max-w-2xl mx-auto px-4">
            Discover amazing destinations, create perfect itineraries, and make memories that last a lifetime
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-strong max-w-5xl mx-auto animate-slide-up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {/* Destination */}
            <div className="relative sm:col-span-2 lg:col-span-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5" />
              <Input
                placeholder="Where to?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-9 md:pl-10 h-10 md:h-12 text-foreground text-sm md:text-base"
              />
            </div>

            {/* Check-in */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5" />
              <Input
                type="date"
                placeholder="Check-in"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="pl-9 md:pl-10 h-10 md:h-12 text-foreground text-sm md:text-base"
              />
            </div>

            {/* Check-out */}
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 md:h-5 md:w-5" />
              <Input
                type="date"
                placeholder="Check-out"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="pl-9 md:pl-10 h-10 md:h-12 text-foreground text-sm md:text-base"
              />
            </div>

            {/* Search Button */}
            <Button 
              onClick={handleSearch}
              className="h-10 md:h-12 bg-gradient-ocean hover:scale-105 transition-all duration-200 shadow-medium text-sm md:text-base px-4 md:px-6"
            >
              <Search className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2" />
              <span className="hidden sm:inline">Search</span>
              <span className="sm:hidden">Go</span>
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-12 md:mt-16 animate-scale-in">
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">1000+</div>
            <div className="text-white/80 text-xs md:text-sm lg:text-base">Destinations</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">50K+</div>
            <div className="text-white/80 text-xs md:text-sm lg:text-base">Happy Travelers</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1 md:mb-2">24/7</div>
            <div className="text-white/80 text-xs md:text-sm lg:text-base">Support</div>
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