import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Heart, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

interface DestinationCardProps {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  featured?: boolean;
  onExplore?: (id: string) => void;
}

const DestinationCard = ({ 
  id, 
  name, 
  country, 
  image, 
  description, 
  rating, 
  price, 
  featured = false,
  onExplore 
}: DestinationCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="group overflow-hidden hover-lift border-0 shadow-soft">
      <div className="relative">
        {imageError ? (
          <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
            <ImageIcon className="h-16 w-16 text-white/50" />
          </div>
        ) : (
          <div 
            className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          >
            <img
              src={image}
              alt={name}
              className="hidden"
              onError={handleImageError}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            {/* Favorite Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-3 right-3 text-white hover:bg-white/20"
              onClick={() => setIsFavorited(!isFavorited)}
            >
              <Heart 
                className={`h-5 w-5 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} 
              />
            </Button>

            {/* Featured Badge */}
            {featured && (
              <Badge className="absolute top-3 left-3 bg-gradient-sunset text-white border-0">
                Featured
              </Badge>
            )}

            {/* Price */}
            <div className="absolute bottom-3 left-3">
              <Badge variant="secondary" className="bg-white/90 text-foreground">
                From {price}
              </Badge>
            </div>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center text-muted-foreground text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              {country}
            </div>
          </div>
          
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <Button 
          onClick={() => onExplore?.(id)}
          className="w-full bg-gradient-ocean hover:scale-105 transition-all duration-200"
        >
          Explore Destination
        </Button>
      </CardContent>
    </Card>
  );
};

export default DestinationCard;