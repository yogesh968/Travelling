import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import { Search, Filter, MapPin } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Destinations = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const searchFromUrl = searchParams.get('search');
    if (searchFromUrl) {
      setSearchTerm(searchFromUrl);
    }
  }, [searchParams]);

  const countries = [...new Set(destinations.map(dest => dest.country))];
  
  const filteredDestinations = destinations.filter(dest => {
    const matchesSearch = dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         dest.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCountry = !selectedCountry || dest.country === selectedCountry;
    return matchesSearch && matchesCountry;
  });

  const handleExplore = (id: string) => {
    navigate(`/destination/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-ocean text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Explore Destinations
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto animate-slide-up">
            Discover amazing places around the world and start planning your next adventure
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="bg-card rounded-2xl shadow-soft p-6 mb-8 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            {/* Country Filter */}
            <div className="flex gap-2">
              <Button
                variant={selectedCountry === "" ? "default" : "outline"}
                onClick={() => setSelectedCountry("")}
                className="h-12"
              >
                All Countries
              </Button>
              {countries.slice(0, 3).map(country => (
                <Button
                  key={country}
                  variant={selectedCountry === country ? "default" : "outline"}
                  onClick={() => setSelectedCountry(country)}
                  className="h-12 hidden md:flex"
                >
                  {country}
                </Button>
              ))}
            </div>
          </div>

          {/* Country badges for mobile */}
          <div className="flex flex-wrap gap-2 mt-4 md:hidden">
            {countries.map(country => (
              <Badge
                key={country}
                variant={selectedCountry === country ? "default" : "outline"}
                className="cursor-pointer px-3 py-1"
                onClick={() => setSelectedCountry(selectedCountry === country ? "" : country)}
              >
                <MapPin className="h-3 w-3 mr-1" />
                {country}
              </Badge>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredDestinations.length} destinations
            {searchTerm && ` for "${searchTerm}"`}
            {selectedCountry && ` in ${selectedCountry}`}
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DestinationCard
                {...destination}
                onExplore={handleExplore}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDestinations.length === 0 && (
          <div className="text-center py-16 animate-fade-in">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold mb-2">No destinations found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button onClick={() => { setSearchTerm(""); setSelectedCountry(""); }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Featured Section */}
        {!searchTerm && !selectedCountry && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {destinations
                .filter(dest => dest.featured)
                .map((destination, index) => (
                  <div 
                    key={`featured-${destination.id}`}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <DestinationCard
                      {...destination}
                      onExplore={handleExplore}
                    />
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;