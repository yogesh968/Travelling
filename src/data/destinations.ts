export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  featured?: boolean;
  attractions: Attraction[];
  hotels: Hotel[];
  restaurants: Restaurant[];
}

export interface Attraction {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  type: string;
  duration: string;
}

export interface Hotel {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  amenities: string[];
}

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  description: string;
  rating: number;
  cuisine: string;
  priceRange: string;
}

export const destinations: Destination[] = [
  { 
    id: "mumbai",
    name: "Mumbai",
    country: "India",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
    description: "The bustling financial capital of India, home to Bollywood and incredible street food.",
    rating: 4.6,
    price: "$149",
    featured: true,
    attractions: [{ id: "gateway-india", name: "Gateway of India", image: "https://images.unsplash.com/photo-1595650781779-d54b9b739e3d?w=500&q=80", description: "Iconic stone arch monument", rating: 4.5, type: "Monument", duration: "1-2 hours" }],
    hotels: [{ id: "taj-palace-mumbai", name: "The Taj Palace Mumbai", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&q=80", description: "Luxury heritage hotel", rating: 4.8, price: "$350/night", amenities: ["Sea View", "Spa", "Fine Dining", "Concierge"] }],
    restaurants: [{ id: "trishna", name: "Trishna", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&q=80", description: "Contemporary seafood restaurant", rating: 4.7, cuisine: "Indian Seafood", priceRange: "$$$" }]
  },
  { 
    id: "delhi",
    name: "New Delhi",
    country: "India",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80",
    description: "India's capital city blending ancient heritage with modern urban life.",
    rating: 4.5,
    price: "$129",
    featured: false,
    attractions: [{ id: "red-fort", name: "Red Fort", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=500&q=80", description: "Historic Mughal fortress", rating: 4.4, type: "Historical", duration: "2-3 hours" }],
    hotels: [{ id: "imperial-delhi", name: "The Imperial Delhi", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Colonial-era luxury hotel", rating: 4.7, price: "$280/night", amenities: ["Garden", "Spa", "Multiple Restaurants", "Pool"] }],
    restaurants: [{ id: "indian-accent", name: "Indian Accent", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&q=80", description: "Award-winning contemporary Indian cuisine", rating: 4.8, cuisine: "Modern Indian", priceRange: "$$$$" }]
  },
  { 
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80",
    description: "A fascinating blend of ultra-modern and traditional, offering unique cultural experiences.",
    rating: 4.9,
    price: "$399",
    featured: true,
    attractions: [{ id: "shibuya-crossing", name: "Shibuya Crossing", image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=500&q=80", description: "World's busiest pedestrian crossing", rating: 4.5, type: "Landmark", duration: "1 hour" }],
    hotels: [{ id: "aman-tokyo", name: "Aman Tokyo", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Urban sanctuary with traditional Japanese aesthetics", rating: 4.8, price: "$1200/night", amenities: ["Spa", "Traditional Onsen", "Fine Dining", "Garden"] }],
    restaurants: [{ id: "sukiyabashi-jiro", name: "Sukiyabashi Jiro", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80", description: "World-renowned sushi restaurant", rating: 4.9, cuisine: "Japanese", priceRange: "$$$$" }]
  },
  { 
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    description: "Ancient capital with thousands of temples, traditional gardens, and geisha culture.",
    rating: 4.8,
    price: "$289",
    featured: true,
    attractions: [{ id: "fushimi-inari", name: "Fushimi Inari Shrine", image: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=500&q=80", description: "Famous shrine with thousands of red torii gates", rating: 4.7, type: "Temple", duration: "2-3 hours" }],
    hotels: [{ id: "aman-kyoto", name: "Aman Kyoto", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury resort in a secret garden setting", rating: 4.9, price: "$900/night", amenities: ["Garden Views", "Spa", "Traditional Architecture", "Fine Dining"] }],
    restaurants: [{ id: "kikunoi-kyoto", name: "Kikunoi", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&q=80", description: "Three-Michelin-starred kaiseki restaurant", rating: 4.8, cuisine: "Kaiseki", priceRange: "$$$$" }]
  },
  { 
    id: "new-york",
    name: "New York",
    country: "United States",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80",
    description: "The city that never sleeps, offering endless entertainment, culture, and dining options.",
    rating: 4.6,
    price: "$349",
    featured: true,
    attractions: [{ id: "times-square", name: "Times Square", image: "https://images.unsplash.com/photo-1485871981521-5b1fd3805b6d?w=500&q=80", description: "Bright lights and Broadway shows", rating: 4.3, type: "Landmark", duration: "2 hours" }],
    hotels: [{ id: "plaza-hotel", name: "The Plaza", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&q=80", description: "Iconic luxury hotel overlooking Central Park", rating: 4.7, price: "$500/night", amenities: ["Central Park View", "Spa", "Fine Dining", "Concierge"] }],
    restaurants: [{ id: "eleven-madison", name: "Eleven Madison Park", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Plant-based fine dining experience", rating: 4.8, cuisine: "Modern American", priceRange: "$$$$" }]
  },
  { 
    id: "hawaii",
    name: "Honolulu, Hawaii",
    country: "United States",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description: "Tropical paradise with pristine beaches and volcanic landscapes.",
    rating: 4.8,
    price: "$389",
    featured: true,
    attractions: [{ id: "waikiki-beach", name: "Waikiki Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500&q=80", description: "World-famous beach", rating: 4.6, type: "Beach", duration: "Full day" }],
    hotels: [{ id: "royal-hawaiian", name: "The Royal Hawaiian", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Pink Palace of the Pacific", rating: 4.7, price: "$420/night", amenities: ["Beach Access", "Pool", "Spa", "Hawaiian Culture"] }],
    restaurants: [{ id: "la-mer-hawaii", name: "La Mer", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "AAA Five Diamond French restaurant", rating: 4.8, cuisine: "French", priceRange: "$$$$" }]
  },
  { 
    id: "moscow",
    name: "Moscow",
    country: "Russia",
    image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=800&q=80",
    description: "Russia's capital with iconic Red Square, Kremlin, and rich cultural heritage.",
    rating: 4.5,
    price: "$189",
    featured: true,
    attractions: [{ id: "red-square", name: "Red Square", image: "https://images.unsplash.com/photo-1513326738677-b964603b136d?w=500&q=80", description: "Historic square with St. Basil's Cathedral", rating: 4.7, type: "Historic Square", duration: "2-3 hours" }],
    hotels: [{ id: "four-seasons-moscow", name: "Four Seasons Hotel Moscow", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel near Red Square", rating: 4.6, price: "$320/night", amenities: ["Historic Location", "Spa", "Fine Dining", "Concierge"] }],
    restaurants: [{ id: "white-rabbit-moscow", name: "White Rabbit", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Modern Russian cuisine with panoramic city views", rating: 4.5, cuisine: "Modern Russian", priceRange: "$$$$" }]
  },
  { 
    id: "saint-petersburg",
    name: "Saint Petersburg",
    country: "Russia",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80",
    description: "Cultural capital with magnificent palaces, world-class museums, and White Nights.",
    rating: 4.7,
    price: "$169",
    featured: true,
    attractions: [{ id: "hermitage-museum", name: "State Hermitage Museum", image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=500&q=80", description: "One of the world's largest museums", rating: 4.8, type: "Museum", duration: "4-6 hours" }],
    hotels: [{ id: "belmond-grand-europe", name: "Belmond Grand Hotel Europe", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Historic luxury hotel", rating: 4.7, price: "$280/night", amenities: ["Historic Building", "Spa", "Fine Dining", "Central Location"] }],
    restaurants: [{ id: "cococo-spb", name: "Cococo", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Innovative Russian cuisine", rating: 4.4, cuisine: "Contemporary Russian", priceRange: "$$$" }]
  },
  { 
    id: "paris",
    name: "Paris",
    country: "France",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&q=80",
    description: "The City of Light awaits with its iconic landmarks, world-class museums, and romantic atmosphere.",
    rating: 4.8,
    price: "$299",
    featured: true,
    attractions: [
      { id: "eiffel-tower", name: "Eiffel Tower", image: "https://images.unsplash.com/photo-1543349689-9a4d426bee8e?w=500&q=80", description: "Iconic iron lattice tower", rating: 4.7, type: "Landmark", duration: "2-3 hours" },
      { id: "louvre", name: "Louvre Museum", image: "https://images.unsplash.com/photo-1566139571700-38cdb5b0d8b7?w=500&q=80", description: "World's largest art museum", rating: 4.6, type: "Museum", duration: "4-6 hours" }
    ],
    hotels: [{ id: "le-meurice", name: "Le Meurice", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&q=80", description: "Luxury palace hotel", rating: 4.9, price: "$800/night", amenities: ["Spa", "Fine Dining", "Concierge", "WiFi"] }],
    restaurants: [{ id: "le-comptoir", name: "Le Comptoir du Relais", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80", description: "Traditional French bistro", rating: 4.5, cuisine: "French", priceRange: "$$$" }]
  },
  { 
    id: "santorini",
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    description: "Breathtaking sunsets, white-washed buildings, and crystal-clear waters of the Aegean Sea.",
    rating: 4.8,
    price: "$279",
    featured: true,
    attractions: [{ id: "oia-sunset", name: "Oia Sunset Point", image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=500&q=80", description: "World-famous sunset viewing spot", rating: 4.9, type: "Viewpoint", duration: "2 hours" }],
    hotels: [{ id: "grace-santorini", name: "Grace Hotel Santorini", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel with infinity pool", rating: 4.8, price: "$450/night", amenities: ["Infinity Pool", "Spa", "Caldera View", "Fine Dining"] }],
    restaurants: [{ id: "selene", name: "Selene", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&q=80", description: "Upscale Greek cuisine", rating: 4.6, cuisine: "Mediterranean", priceRange: "$$$" }]
  },
  { 
    id: "bali",
    name: "Bali",
    country: "Indonesia", 
    image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&q=80",
    description: "Tropical paradise with stunning beaches, ancient temples, and vibrant culture.",
    rating: 4.7,
    price: "$199",
    featured: false,
    attractions: [{ id: "tanah-lot", name: "Tanah Lot Temple", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=500&q=80", description: "Ancient Hindu temple", rating: 4.6, type: "Temple", duration: "2 hours" }],
    hotels: [{ id: "amankila", name: "Amankila", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&q=80", description: "Luxury resort", rating: 4.9, price: "$600/night", amenities: ["Beach Access", "Spa", "Pool", "Ocean View"] }],
    restaurants: [{ id: "locavore", name: "Locavore", image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=500&q=80", description: "Award-winning restaurant", rating: 4.7, cuisine: "Modern Indonesian", priceRange: "$$$" }]
  },
  { 
    id: "dubai",
    name: "Dubai",
    country: "United Arab Emirates",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    description: "Futuristic city with luxury shopping, impressive architecture, and desert adventures.",
    rating: 4.5,
    price: "$459",
    featured: false,
    attractions: [{ id: "burj-khalifa", name: "Burj Khalifa", image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=500&q=80", description: "World's tallest building", rating: 4.7, type: "Skyscraper", duration: "2-3 hours" }],
    hotels: [{ id: "burj-al-arab", name: "Burj Al Arab", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80", description: "Iconic sail-shaped luxury hotel", rating: 4.9, price: "$1000/night", amenities: ["Private Beach", "Helicopter Transfer", "Butler Service", "Spa"] }],
    restaurants: [{ id: "nobu-dubai", name: "Nobu Dubai", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80", description: "World-renowned Japanese-Peruvian cuisine", rating: 4.5, cuisine: "Japanese-Peruvian", priceRange: "$$$$" }]
  }
];
