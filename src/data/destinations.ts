export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
  rating: number;
  price: string;
  featured?: boolean;
  latitude?: number;
  longitude?: number;
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
    latitude: 19.0760,
    longitude: 72.8777,
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
    latitude: 28.6139,
    longitude: 77.2090,
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
    latitude: 35.6762,
    longitude: 139.6503,
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
    latitude: 35.0116,
    longitude: 135.7681,
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
    latitude: 40.7128,
    longitude: -74.0060,
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
    latitude: 21.3099,
    longitude: -157.8581,
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
    latitude: 55.7558,
    longitude: 37.6173,
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
    latitude: 59.9343,
    longitude: 30.3351,
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
    latitude: 48.8566,
    longitude: 2.3522,
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
    latitude: 36.3932,
    longitude: 25.4615,
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
    latitude: -8.3405,
    longitude: 115.0920,
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
    latitude: 25.2048,
    longitude: 55.2708,
    attractions: [{ id: "burj-khalifa", name: "Burj Khalifa", image: "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?w=500&q=80", description: "World's tallest building", rating: 4.7, type: "Skyscraper", duration: "2-3 hours" }],
    hotels: [{ id: "burj-al-arab", name: "Burj Al Arab", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&q=80", description: "Iconic sail-shaped luxury hotel", rating: 4.9, price: "$1000/night", amenities: ["Private Beach", "Helicopter Transfer", "Butler Service", "Spa"] }],
    restaurants: [{ id: "nobu-dubai", name: "Nobu Dubai", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=500&q=80", description: "World-renowned Japanese-Peruvian cuisine", rating: 4.5, cuisine: "Japanese-Peruvian", priceRange: "$$$$" }]
  },
  { 
    id: "london",
    name: "London",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80",
    description: "Historic capital with royal palaces, world-class museums, and vibrant culture.",
    rating: 4.7,
    price: "$329",
    featured: true,
    latitude: 51.5074,
    longitude: -0.1278,
    attractions: [
      { id: "big-ben", name: "Big Ben", image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=500&q=80", description: "Iconic clock tower", rating: 4.6, type: "Landmark", duration: "1 hour" },
      { id: "tower-bridge", name: "Tower Bridge", image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=500&q=80", description: "Victorian suspension bridge", rating: 4.5, type: "Bridge", duration: "1-2 hours" }
    ],
    hotels: [{ id: "the-ritz", name: "The Ritz London", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&q=80", description: "Luxury hotel in Piccadilly", rating: 4.8, price: "$650/night", amenities: ["Afternoon Tea", "Spa", "Fine Dining", "Concierge"] }],
    restaurants: [{ id: "the-wolseley", name: "The Wolseley", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&q=80", description: "Grand European café-restaurant", rating: 4.6, cuisine: "European", priceRange: "$$$" }]
  },
  { 
    id: "rome",
    name: "Rome",
    country: "Italy",
    image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80",
    description: "Eternal city with ancient ruins, Renaissance art, and incredible cuisine.",
    rating: 4.8,
    price: "$279",
    featured: true,
    latitude: 41.9028,
    longitude: 12.4964,
    attractions: [
      { id: "colosseum", name: "Colosseum", image: "https://images.unsplash.com/photo-1552832230-c0197dd311d5?w=500&q=80", description: "Ancient Roman amphitheater", rating: 4.7, type: "Historic", duration: "2-3 hours" },
      { id: "vatican", name: "Vatican City", image: "https://images.unsplash.com/photo-1552832230-0b0b4153a059?w=500&q=80", description: "Smallest country in the world", rating: 4.8, type: "Religious", duration: "Half day" }
    ],
    hotels: [{ id: "hotel-de-russie", name: "Hotel de Russie", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel near Spanish Steps", rating: 4.7, price: "$550/night", amenities: ["Garden", "Spa", "Fine Dining", "Central Location"] }],
    restaurants: [{ id: "la-pergola", name: "La Pergola", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Three-Michelin-starred restaurant", rating: 4.9, cuisine: "Italian", priceRange: "$$$$" }]
  },
  { 
    id: "barcelona",
    name: "Barcelona",
    country: "Spain",
    image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=800&q=80",
    description: "Vibrant city with Gaudí architecture, beautiful beaches, and amazing food scene.",
    rating: 4.7,
    price: "$249",
    featured: true,
    latitude: 41.3851,
    longitude: 2.1734,
    attractions: [
      { id: "sagrada-familia", name: "Sagrada Família", image: "https://images.unsplash.com/photo-1594736797933-d0c0c0e0e0e0?w=500&q=80", description: "Gaudí's unfinished masterpiece", rating: 4.8, type: "Cathedral", duration: "2-3 hours" },
      { id: "park-guell", name: "Park Güell", image: "https://images.unsplash.com/photo-1555993530-7e0b0a0a0a0a?w=500&q=80", description: "Colorful park designed by Gaudí", rating: 4.6, type: "Park", duration: "2-3 hours" }
    ],
    hotels: [{ id: "hotel-arts", name: "Hotel Arts Barcelona", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&q=80", description: "Luxury beachfront hotel", rating: 4.7, price: "$450/night", amenities: ["Beach Access", "Pool", "Spa", "Fine Dining"] }],
    restaurants: [{ id: "tickets", name: "Tickets", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Creative tapas restaurant", rating: 4.6, cuisine: "Spanish Tapas", priceRange: "$$$" }]
  },
  { 
    id: "amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&q=80",
    description: "Canals, cycling, and culture in this charming European capital.",
    rating: 4.6,
    price: "$229",
    featured: false,
    latitude: 52.3676,
    longitude: 4.9041,
    attractions: [{ id: "anne-frank-house", name: "Anne Frank House", image: "https://images.unsplash.com/photo-1552832230-0b0b4153a059?w=500&q=80", description: "Historic hiding place", rating: 4.7, type: "Museum", duration: "1-2 hours" }],
    hotels: [{ id: "conservatorium", name: "Conservatorium Hotel", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel in museum district", rating: 4.6, price: "$380/night", amenities: ["Spa", "Fine Dining", "Central Location", "WiFi"] }],
    restaurants: [{ id: "rijks", name: "Rijks", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Modern Dutch cuisine", rating: 4.5, cuisine: "Dutch", priceRange: "$$$" }]
  },
  { 
    id: "prague",
    name: "Prague",
    country: "Czech Republic",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80",
    description: "Fairytale city with stunning architecture, historic bridges, and beer culture.",
    rating: 4.7,
    price: "$179",
    featured: false,
    latitude: 50.0755,
    longitude: 14.4378,
    attractions: [{ id: "charles-bridge", name: "Charles Bridge", image: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=500&q=80", description: "Historic stone bridge", rating: 4.6, type: "Bridge", duration: "1 hour" }],
    hotels: [{ id: "four-seasons-prague", name: "Four Seasons Prague", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel on Vltava River", rating: 4.7, price: "$320/night", amenities: ["River View", "Spa", "Fine Dining", "Historic Building"] }],
    restaurants: [{ id: "la-degustation", name: "La Degustation", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Michelin-starred Czech cuisine", rating: 4.6, cuisine: "Czech", priceRange: "$$$$" }]
  },
  { 
    id: "istanbul",
    name: "Istanbul",
    country: "Turkey",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80",
    description: "Where East meets West, with stunning mosques, bazaars, and Bosphorus views.",
    rating: 4.6,
    price: "$199",
    featured: false,
    latitude: 41.0082,
    longitude: 28.9784,
    attractions: [{ id: "hagia-sophia", name: "Hagia Sophia", image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=500&q=80", description: "Historic Byzantine cathedral", rating: 4.7, type: "Monument", duration: "2 hours" }],
    hotels: [{ id: "four-seasons-istanbul", name: "Four Seasons Istanbul", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel in Sultanahmet", rating: 4.6, price: "$350/night", amenities: ["Historic Location", "Spa", "Fine Dining", "Bosphorus View"] }],
    restaurants: [{ id: "mikla", name: "Mikla", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Modern Turkish cuisine with views", rating: 4.5, cuisine: "Modern Turkish", priceRange: "$$$" }]
  },
  { 
    id: "sydney",
    name: "Sydney",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "Harbor city with iconic Opera House, beautiful beaches, and vibrant culture.",
    rating: 4.7,
    price: "$349",
    featured: true,
    latitude: -33.8688,
    longitude: 151.2093,
    attractions: [
      { id: "opera-house", name: "Sydney Opera House", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80", description: "Iconic performing arts center", rating: 4.8, type: "Landmark", duration: "2-3 hours" },
      { id: "harbour-bridge", name: "Sydney Harbour Bridge", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&q=80", description: "Steel arch bridge", rating: 4.6, type: "Bridge", duration: "1-2 hours" }
    ],
    hotels: [{ id: "park-hyatt-sydney", name: "Park Hyatt Sydney", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&q=80", description: "Luxury hotel with Opera House views", rating: 4.8, price: "$650/night", amenities: ["Harbor View", "Spa", "Fine Dining", "Pool"] }],
    restaurants: [{ id: "quay", name: "Quay", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Award-winning restaurant with harbor views", rating: 4.7, cuisine: "Modern Australian", priceRange: "$$$$" }]
  },
  { 
    id: "melbourne",
    name: "Melbourne",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=800&q=80",
    description: "Cultural capital with laneways, coffee culture, and world-class dining.",
    rating: 4.6,
    price: "$299",
    featured: false,
    latitude: -37.8136,
    longitude: 144.9631,
    attractions: [{ id: "federation-square", name: "Federation Square", image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500&q=80", description: "Cultural precinct", rating: 4.4, type: "Plaza", duration: "1-2 hours" }],
    hotels: [{ id: "crown-towers", name: "Crown Towers Melbourne", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel on Yarra River", rating: 4.6, price: "$420/night", amenities: ["River View", "Spa", "Casino", "Fine Dining"] }],
    restaurants: [{ id: "attica", name: "Attica", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Award-winning modern Australian cuisine", rating: 4.7, cuisine: "Modern Australian", priceRange: "$$$$" }]
  },
  { 
    id: "singapore",
    name: "Singapore",
    country: "Singapore",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80",
    description: "Modern city-state with diverse culture, amazing food, and stunning architecture.",
    rating: 4.8,
    price: "$319",
    featured: true,
    latitude: 1.3521,
    longitude: 103.8198,
    attractions: [
      { id: "marina-bay", name: "Marina Bay Sands", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&q=80", description: "Iconic integrated resort", rating: 4.7, type: "Landmark", duration: "Half day" },
      { id: "gardens-by-bay", name: "Gardens by the Bay", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=500&q=80", description: "Futuristic nature park", rating: 4.8, type: "Park", duration: "3-4 hours" }
    ],
    hotels: [{ id: "marina-bay-sands-hotel", name: "Marina Bay Sands", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&q=80", description: "Iconic hotel with infinity pool", rating: 4.7, price: "$550/night", amenities: ["Infinity Pool", "Casino", "Shopping", "Fine Dining"] }],
    restaurants: [{ id: "odette", name: "Odette", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Three-Michelin-starred French cuisine", rating: 4.9, cuisine: "French", priceRange: "$$$$" }]
  },
  { 
    id: "bangkok",
    name: "Bangkok",
    country: "Thailand",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80",
    description: "Vibrant capital with temples, street food, and bustling markets.",
    rating: 4.6,
    price: "$149",
    featured: false,
    latitude: 13.7563,
    longitude: 100.5018,
    attractions: [{ id: "wat-pho", name: "Wat Pho", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=500&q=80", description: "Temple of the Reclining Buddha", rating: 4.6, type: "Temple", duration: "1-2 hours" }],
    hotels: [{ id: "mandarin-oriental-bangkok", name: "Mandarin Oriental Bangkok", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel on Chao Phraya River", rating: 4.7, price: "$450/night", amenities: ["River View", "Spa", "Fine Dining", "Historic"] }],
    restaurants: [{ id: "nahm", name: "Nahm", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Award-winning Thai cuisine", rating: 4.6, cuisine: "Thai", priceRange: "$$$" }]
  },
  { 
    id: "hong-kong",
    name: "Hong Kong",
    country: "China",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80",
    description: "Dynamic city with stunning skyline, amazing food, and rich culture.",
    rating: 4.7,
    price: "$329",
    featured: true,
    latitude: 22.3193,
    longitude: 114.1694,
    attractions: [{ id: "victoria-peak", name: "Victoria Peak", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=500&q=80", description: "Highest point with panoramic views", rating: 4.7, type: "Viewpoint", duration: "2-3 hours" }],
    hotels: [{ id: "ritz-carlton-hk", name: "The Ritz-Carlton Hong Kong", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&q=80", description: "Luxury hotel in tallest building", rating: 4.8, price: "$600/night", amenities: ["Harbor View", "Spa", "Fine Dining", "Sky-high Location"] }],
    restaurants: [{ id: "lung-king-heen", name: "Lung King Heen", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Three-Michelin-starred Cantonese", rating: 4.8, cuisine: "Cantonese", priceRange: "$$$$" }]
  },
  { 
    id: "seoul",
    name: "Seoul",
    country: "South Korea",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80",
    description: "Modern metropolis blending ancient palaces with cutting-edge technology.",
    rating: 4.7,
    price: "$279",
    featured: false,
    latitude: 37.5665,
    longitude: 126.9780,
    attractions: [{ id: "gyeongbokgung", name: "Gyeongbokgung Palace", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&q=80", description: "Main royal palace", rating: 4.6, type: "Palace", duration: "2-3 hours" }],
    hotels: [{ id: "four-seasons-seoul", name: "Four Seasons Seoul", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel in Gwanghwamun", rating: 4.7, price: "$450/night", amenities: ["Central Location", "Spa", "Fine Dining", "Modern"] }],
    restaurants: [{ id: "gaon", name: "Gaon", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Three-Michelin-starred Korean cuisine", rating: 4.7, cuisine: "Korean", priceRange: "$$$$" }]
  },
  { 
    id: "cairo",
    name: "Cairo",
    country: "Egypt",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=800&q=80",
    description: "Ancient city with pyramids, pharaonic history, and vibrant bazaars.",
    rating: 4.5,
    price: "$189",
    featured: false,
    latitude: 30.0444,
    longitude: 31.2357,
    attractions: [{ id: "pyramids", name: "Great Pyramids of Giza", image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=500&q=80", description: "Ancient wonder of the world", rating: 4.8, type: "Historic", duration: "Half day" }],
    hotels: [{ id: "four-seasons-cairo", name: "Four Seasons Cairo", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel on Nile River", rating: 4.6, price: "$350/night", amenities: ["Nile View", "Spa", "Fine Dining", "Pool"] }],
    restaurants: [{ id: "nile-maxim", name: "Nile Maxim", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Floating restaurant on Nile", rating: 4.4, cuisine: "Egyptian", priceRange: "$$$" }]
  },
  { 
    id: "cape-town",
    name: "Cape Town",
    country: "South Africa",
    image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80",
    description: "Stunning coastal city with Table Mountain, wine regions, and wildlife.",
    rating: 4.7,
    price: "$249",
    featured: true,
    latitude: -33.9249,
    longitude: 18.4241,
    attractions: [{ id: "table-mountain", name: "Table Mountain", image: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=500&q=80", description: "Iconic flat-topped mountain", rating: 4.8, type: "Mountain", duration: "Half day" }],
    hotels: [{ id: "ellerman-house", name: "Ellerman House", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury boutique hotel", rating: 4.7, price: "$500/night", amenities: ["Ocean View", "Art Collection", "Fine Dining", "Spa"] }],
    restaurants: [{ id: "the-test-kitchen", name: "The Test Kitchen", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Award-winning modern cuisine", rating: 4.6, cuisine: "Modern African", priceRange: "$$$$" }]
  },
  { 
    id: "rio-de-janeiro",
    name: "Rio de Janeiro",
    country: "Brazil",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    description: "Vibrant city with Copacabana, Christ the Redeemer, and samba culture.",
    rating: 4.6,
    price: "$229",
    featured: false,
    latitude: -22.9068,
    longitude: -43.1729,
    attractions: [{ id: "christ-redeemer", name: "Christ the Redeemer", image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=500&q=80", description: "Iconic statue on Corcovado", rating: 4.7, type: "Monument", duration: "Half day" }],
    hotels: [{ id: "copacabana-palace", name: "Copacabana Palace", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury beachfront hotel", rating: 4.7, price: "$450/night", amenities: ["Beach Access", "Pool", "Spa", "Historic"] }],
    restaurants: [{ id: "lasai", name: "Lasai", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Award-winning Brazilian cuisine", rating: 4.5, cuisine: "Modern Brazilian", priceRange: "$$$" }]
  },
  { 
    id: "machu-picchu",
    name: "Machu Picchu",
    country: "Peru",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80",
    description: "Ancient Incan citadel high in the Andes, one of the world's wonders.",
    rating: 4.9,
    price: "$399",
    featured: true,
    latitude: -13.1631,
    longitude: -72.5450,
    attractions: [{ id: "incan-citadel", name: "Incan Citadel", image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=500&q=80", description: "Ancient stone ruins", rating: 4.9, type: "Historic", duration: "Full day" }],
    hotels: [{ id: "belmond-sanctuary", name: "Belmond Sanctuary Lodge", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel at the ruins", rating: 4.8, price: "$800/night", amenities: ["Mountain View", "Historic Location", "Fine Dining", "Unique"] }],
    restaurants: [{ id: "tinkuy", name: "Tinkuy", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Peruvian cuisine with views", rating: 4.6, cuisine: "Peruvian", priceRange: "$$$" }]
  },
  { 
    id: "iceland",
    name: "Reykjavik",
    country: "Iceland",
    image: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=800&q=80",
    description: "Land of fire and ice with geysers, glaciers, and Northern Lights.",
    rating: 4.8,
    price: "$349",
    featured: true,
    latitude: 64.1466,
    longitude: -21.9426,
    attractions: [{ id: "blue-lagoon", name: "Blue Lagoon", image: "https://images.unsplash.com/photo-1531168556467-80aace0d0144?w=500&q=80", description: "Geothermal spa", rating: 4.7, type: "Spa", duration: "2-3 hours" }],
    hotels: [{ id: "ion-adventure", name: "ION Adventure Hotel", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Modern hotel in nature", rating: 4.6, price: "$380/night", amenities: ["Northern Lights Viewing", "Geothermal Pool", "Modern Design", "Remote Location"] }],
    restaurants: [{ id: "dill", name: "Dill", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "New Nordic cuisine", rating: 4.5, cuisine: "Icelandic", priceRange: "$$$" }]
  },
  { 
    id: "vienna",
    name: "Vienna",
    country: "Austria",
    image: "https://images.unsplash.com/photo-1516550893923-42d28ffd0f5a?w=800&q=80",
    description: "Imperial capital with palaces, classical music, and coffee house culture.",
    rating: 4.7,
    price: "$259",
    featured: false,
    latitude: 48.2082,
    longitude: 16.3738,
    attractions: [{ id: "schonbrunn", name: "Schönbrunn Palace", image: "https://images.unsplash.com/photo-1516550893923-42d28ffd0f5a?w=500&q=80", description: "Former imperial summer residence", rating: 4.7, type: "Palace", duration: "Half day" }],
    hotels: [{ id: "sacher", name: "Hotel Sacher", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Historic luxury hotel", rating: 4.6, price: "$420/night", amenities: ["Historic", "Famous Café", "Central Location", "WiFi"] }],
    restaurants: [{ id: "steirereck", name: "Steirereck", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Two-Michelin-starred Austrian cuisine", rating: 4.7, cuisine: "Austrian", priceRange: "$$$$" }]
  },
  { 
    id: "budapest",
    name: "Budapest",
    country: "Hungary",
    image: "https://images.unsplash.com/photo-1551867634-194f224d505b?w=800&q=80",
    description: "Beautiful city split by Danube with thermal baths and stunning architecture.",
    rating: 4.6,
    price: "$179",
    featured: false,
    latitude: 47.4979,
    longitude: 19.0402,
    attractions: [{ id: "parliament", name: "Hungarian Parliament", image: "https://images.unsplash.com/photo-1551867634-194f224d505b?w=500&q=80", description: "Gothic Revival building", rating: 4.6, type: "Government", duration: "1-2 hours" }],
    hotels: [{ id: "four-seasons-budapest", name: "Four Seasons Budapest", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel on Danube", rating: 4.6, price: "$350/night", amenities: ["River View", "Spa", "Fine Dining", "Historic Building"] }],
    restaurants: [{ id: "onnod", name: "Onnom", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Modern Hungarian cuisine", rating: 4.5, cuisine: "Hungarian", priceRange: "$$$" }]
  },
  { 
    id: "lisbon",
    name: "Lisbon",
    country: "Portugal",
    image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80",
    description: "Hilly capital with colorful tiles, fado music, and delicious pastries.",
    rating: 4.6,
    price: "$199",
    featured: false,
    latitude: 38.7223,
    longitude: -9.1393,
    attractions: [{ id: "belem-tower", name: "Belém Tower", image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=500&q=80", description: "16th-century fortification", rating: 4.5, type: "Monument", duration: "1 hour" }],
    hotels: [{ id: "four-seasons-lisbon", name: "Four Seasons Ritz Lisbon", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury hotel with city views", rating: 4.6, price: "$380/night", amenities: ["City View", "Spa", "Fine Dining", "Central"] }],
    restaurants: [{ id: "belcanto", name: "Belcanto", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Two-Michelin-starred Portuguese cuisine", rating: 4.7, cuisine: "Portuguese", priceRange: "$$$$" }]
  },
  { 
    id: "stockholm",
    name: "Stockholm",
    country: "Sweden",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=800&q=80",
    description: "Beautiful archipelago city with museums, design, and Nordic charm.",
    rating: 4.6,
    price: "$279",
    featured: false,
    latitude: 59.3293,
    longitude: 18.0686,
    attractions: [{ id: "vasa-museum", name: "Vasa Museum", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=500&q=80", description: "17th-century warship museum", rating: 4.7, type: "Museum", duration: "2-3 hours" }],
    hotels: [{ id: "grand-hotel-stockholm", name: "Grand Hôtel Stockholm", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury waterfront hotel", rating: 4.6, price: "$450/night", amenities: ["Waterfront", "Spa", "Fine Dining", "Historic"] }],
    restaurants: [{ id: "frantzen", name: "Frantzén", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Three-Michelin-starred Nordic cuisine", rating: 4.8, cuisine: "Nordic", priceRange: "$$$$" }]
  },
  { 
    id: "oslo",
    name: "Oslo",
    country: "Norway",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=800&q=80",
    description: "Scandinavian capital with fjords, museums, and modern architecture.",
    rating: 4.6,
    price: "$329",
    featured: false,
    latitude: 59.9139,
    longitude: 10.7522,
    attractions: [{ id: "operahouse", name: "Oslo Opera House", image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=500&q=80", description: "Modern performing arts center", rating: 4.6, type: "Architecture", duration: "1-2 hours" }],
    hotels: [{ id: "the-thief", name: "The Thief", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&q=80", description: "Luxury waterfront hotel", rating: 4.7, price: "$480/night", amenities: ["Waterfront", "Art Collection", "Spa", "Fine Dining"] }],
    restaurants: [{ id: "maemo", name: "Maaemo", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80", description: "Three-Michelin-starred Norwegian cuisine", rating: 4.7, cuisine: "Norwegian", priceRange: "$$$$" }]
  }
];
