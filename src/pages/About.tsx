import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Heart, Globe } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b96f?w=300&q=80",
      bio: "Passionate traveler with 15+ years in the tourism industry"
    },
    {
      name: "Michael Chen",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
      bio: "Tech enthusiast focused on creating seamless travel experiences"
    },
    {
      name: "Emma Rodriguez",
      role: "Travel Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
      bio: "Certified travel consultant with expertise in 50+ countries"
    }
  ];

  const values = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Reach",
      description: "We connect travelers with destinations worldwide, from hidden gems to iconic landmarks."
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Passionate Service",
      description: "Our love for travel drives us to provide exceptional, personalized planning experiences."
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Precision Planning",
      description: "Every detail matters in creating your perfect trip, from flights to local experiences."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Community Driven",
      description: "We build a community of travelers sharing experiences and creating lasting memories."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-sunset text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            About TravelX
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-slide-up">
            We're passionate about making travel planning effortless and enjoyable. 
            Since 2020, we've helped over 50,000 travelers create unforgettable journeys around the world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Mission Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-scale-in">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            To democratize travel planning by providing intuitive tools that help everyone—from 
            first-time travelers to seasoned adventurers—create personalized itineraries that 
            match their unique interests, budget, and travel style.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={value.title} 
                className="text-center hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-ocean text-white rounded-2xl p-12 mb-20 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/80">Happy Travelers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-white/80">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100K+</div>
              <div className="text-white/80">Itineraries Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Head Section (personalized) */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Head</h2>
          <div className="max-w-xl mx-auto">
            <Card className="text-center hover-lift animate-slide-up">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  
                </div>
                <h3 className="text-xl font-semibold mb-2">Yogesh Kumar</h3>
                <Badge variant="secondary" className="mb-4">Head</Badge>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading TravelX with a passion for crafting seamless, personalized travel experiences for everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Story Section */}
        <div className="mt-20 max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg text-muted-foreground leading-relaxed">
            <p className="mb-6">
              TravelX was born from a simple frustration: planning a trip shouldn't be stressful. 
              Our founder Yogesh was spending hours researching destinations, comparing hotels, and trying 
              to organize everything into a coherent itinerary.
            </p>
            <p className="mb-6">
              He realized that while there were plenty of booking sites and review platforms, there 
              wasn't a tool that helped travelers actually <em>plan</em> their trips in an organized, 
              visual way. That's when the idea for TravelX was born.
            </p>
            <p>
              Today, we're proud to have helped thousands of travelers turn their dream trips into 
              reality, one perfectly planned itinerary at a time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;