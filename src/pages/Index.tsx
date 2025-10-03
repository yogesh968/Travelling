import Hero from "@/components/Hero";
import DestinationCard from "@/components/DestinationCard";
import { destinations } from "@/data/destinations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Shield, Clock, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const featuredDestinations = destinations.filter(dest => dest.featured);

  const features = [
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Curated Destinations",
      description: "Hand-picked locations from travel experts around the world"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Driven",
      description: "Real reviews and recommendations from fellow travelers"
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Trusted Partners",
      description: "Work with verified hotels, restaurants, and tour operators"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "24/7 Support",
      description: "Get help planning your trip whenever you need it"
    }
  ];

  // Testimonials section removed per personalization request

  const handleExplore = (id: string) => {
    navigate(`/destination/${id}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Featured Destinations */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Featured Destinations</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Places to Visit
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our most loved destinations, carefully selected for their unique experiences 
              and unforgettable moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredDestinations.map((destination, index) => (
              <div 
                key={destination.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DestinationCard
                  {...destination}
                  onExplore={handleExplore}
                />
              </div>
            ))}
          </div>

          <div className="text-center animate-scale-in">
            <Button 
              onClick={() => navigate('/destinations')}
              size="lg"
              className="bg-gradient-ocean hover:scale-105 transition-all duration-200"
            >
              View All Destinations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4">Why Choose Us</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Travel Planning Made Simple
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide everything you need to plan the perfect trip, from destination discovery 
              to detailed itinerary creation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={feature.title}
                className="text-center hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section removed */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who trust us to help create their perfect itineraries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => navigate('/destinations')}
              className="hover:scale-105 transition-all duration-200"
            >
              Start Planning
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => navigate('/about')}
              className="border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
