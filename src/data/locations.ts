import { Flame, Beef, Drumstick, Pizza, UtensilsCrossed, CupSoda, ChefHat, Leaf } from "lucide-react";
import menuBurger from "@/assets/menu-burger.jpg";
import menuShawarma from "@/assets/menu-shawarma.jpg";
import menuPizza from "@/assets/menu-pizza.jpg";
import menuBbq from "@/assets/menu-bbq.jpg";
import menuFries from "@/assets/menu-fries.jpg";
import menuDrinks from "@/assets/menu-drinks.jpg";
import heroGrill from "@/assets/hero-grill.jpg";
import grillInterior from "@/assets/grill-interior.jpg";

export interface Review {
  author: string;
  rating: number;
  date: string;
  comment: string;
}

export interface Location {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  images: string[];
  features: string[];
  featured: boolean;
  amenities: {
    icon: any;
    label: string;
    description: string;
  }[];
  details: string[];
  reviews: Review[];
}

export const locations: Location[] = [
  {
    id: "burgers",
    name: "Smashed Burgers",
    location: "From $12",
    description: "Hand-smashed on a screaming-hot grill for that perfect crispy crust. Stacked with molten cheddar, house pickles, and our secret spot sauce on toasted brioche.",
    rating: 4.9,
    price: 12,
    image: menuBurger,
    images: [heroGrill, menuBbq, menuFries],
    features: ["Charcoal grilled", "House sauce", "Brioche bun"],
    featured: true,
    amenities: [
      { icon: Flame, label: "Flame Grilled", description: "Smashed over real charcoal heat" },
      { icon: Beef, label: "Prime Beef", description: "Fresh, never frozen patties" },
      { icon: ChefHat, label: "Secret Sauce", description: "Our signature house recipe" },
      { icon: UtensilsCrossed, label: "Made to Order", description: "Nothing sits under a heat lamp" },
    ],
    details: [
      "Classic Smash — double patty, cheddar, spot sauce",
      "BBQ Bacon Stack — smoked bacon, onion rings, BBQ glaze",
      "Mushroom Melt — Swiss, caramelized mushrooms, garlic mayo",
      "Fire House — jalapeños, pepper jack, chipotle kick",
      "Veggie Smash — grilled portobello, halloumi, herb sauce",
      "Make it a meal with fries and a drink",
    ],
    reviews: [
      { author: "Sarah M.", rating: 5, date: "December 2025", comment: "Best burger in town, hands down. The char on the patty is unreal and that sauce is addictive." },
      { author: "James T.", rating: 5, date: "November 2025", comment: "The BBQ Bacon Stack is a masterpiece. Messy in the best possible way." },
      { author: "Emily R.", rating: 4, date: "October 2025", comment: "Juicy, smoky, perfectly seasoned. The brioche bun holds everything together beautifully." },
      { author: "Michael B.", rating: 5, date: "September 2025", comment: "I've tried every burger here and I still can't pick a favorite. All incredible." },
    ],
  },
  {
    id: "shawarma",
    name: "Shawarma",
    location: "From $10",
    description: "Marinated for 24 hours and roasted on the spit, then shaved thin and griddled for crispy edges. Wrapped with pickles, garlic sauce, and fresh herbs in warm saj bread.",
    rating: 5.0,
    price: 10,
    image: menuShawarma,
    images: [heroGrill, menuBurger, menuDrinks],
    features: ["Spit roasted", "Garlic sauce", "Fresh saj bread"],
    featured: true,
    amenities: [
      { icon: Drumstick, label: "24h Marinade", description: "Slow-marinated in spices" },
      { icon: Flame, label: "Spit Roasted", description: "Carved fresh off the spit" },
      { icon: ChefHat, label: "Garlic Toum", description: "Housemade garlic sauce" },
      { icon: Leaf, label: "Fresh Herbs", description: "Chopped daily, never wilted" },
    ],
    details: [
      "Chicken Shawarma — classic with pickles and toum",
      "Beef Shawarma — sumac onions and tahini",
      "Mixed Grill Shawarma — chicken and beef combo",
      "Shawarma Plate — with rice, salad, and bread",
      "Spicy Shawarma — house chili oil and jalapeños",
      "Extra toum always free — just ask",
    ],
    reviews: [
      { author: "David L.", rating: 5, date: "January 2026", comment: "The chicken shawarma tastes like the ones I grew up with. Crispy edges, juicy inside. Perfect." },
      { author: "Anna K.", rating: 5, date: "December 2025", comment: "That garlic sauce should be bottled and sold. I put it on everything." },
      { author: "Chris P.", rating: 5, date: "November 2025", comment: "Generous portions and the bread is always fresh. My weekly ritual now." },
      { author: "Lisa H.", rating: 5, date: "October 2025", comment: "The mixed grill shawarma plate is the best value on the menu. Absolutely stuffed." },
    ],
  },
  {
    id: "pizza",
    name: "Wood-Fired Pizza",
    location: "From $14",
    description: "Blistered in our wood-fired oven at 450°C. Leopard-spotted crust, San Marzano tomatoes, and fior di latte mozzarella — ready in 90 seconds flat.",
    rating: 4.8,
    price: 14,
    image: menuPizza,
    images: [grillInterior, heroGrill, menuDrinks],
    features: ["Wood-fired oven", "48h dough", "Fresh mozzarella"],
    featured: true,
    amenities: [
      { icon: Pizza, label: "48-Hour Dough", description: "Slow-fermented for flavor" },
      { icon: Flame, label: "Wood-Fired", description: "Real oak fire, real char" },
      { icon: Leaf, label: "Fresh Basil", description: "Torn by hand, never cut" },
      { icon: ChefHat, label: "San Marzano", description: "Authentic Italian tomatoes" },
    ],
    details: [
      "Margherita — tomato, mozzarella, basil, olive oil",
      "Pepperoni Blaze — double pepperoni, chili honey",
      "BBQ Chicken — grilled chicken, red onion, BBQ drizzle",
      "Quattro Formaggi — four cheese blend, rosemary",
      "Veggie Fire — roasted peppers, mushrooms, red onion",
      "Gluten-free bases available on request",
    ],
    reviews: [
      { author: "Rachel W.", rating: 5, date: "December 2025", comment: "That crust! Perfectly charred and chewy. Tastes like Naples." },
      { author: "Tom D.", rating: 4, date: "November 2025", comment: "Pepperoni Blaze with the chili honey is dangerously good. Will be back." },
      { author: "Sophie N.", rating: 5, date: "October 2025", comment: "You can watch them fire it in the open oven. Dinner and a show." },
      { author: "Mark J.", rating: 5, date: "September 2025", comment: "Best pizza outside of Italy. The dough is on another level." },
    ],
  },
  {
    id: "bbq",
    name: "Charcoal BBQ",
    location: "From $18",
    description: "Low, slow, and kissed by smoke. Our ribs, skewers, and wings are grilled over glowing charcoal and basted with our house glaze until caramelized and sticky.",
    rating: 4.9,
    price: 18,
    image: menuBbq,
    images: [heroGrill, grillInterior, menuFries],
    features: ["Charcoal smoked", "House glaze", "Fall-off-the-bone"],
    featured: false,
    amenities: [
      { icon: Flame, label: "Real Charcoal", description: "No gas, no shortcuts" },
      { icon: Drumstick, label: "Slow Cooked", description: "Hours over low heat" },
      { icon: ChefHat, label: "House Glaze", description: "Sweet, smoky, sticky" },
      { icon: UtensilsCrossed, label: "Sharing Platters", description: "Built for the whole table" },
    ],
    details: [
      "BBQ Ribs — half or full rack, house glaze",
      "Mixed Grill Platter — skewers, wings, ribs for two",
      "Charcoal Wings — smoked then finished on the grill",
      "Lamb Seekh Kebabs — hand-minced, charcoal grilled",
      "Grilled Chicken Tikka — overnight yogurt marinade",
      "All served with grilled flatbread and slaw",
    ],
    reviews: [
      { author: "John S.", rating: 5, date: "January 2026", comment: "The ribs genuinely fall off the bone. That glaze is smoky-sweet perfection." },
      { author: "Maria G.", rating: 4, date: "December 2025", comment: "Mixed grill platter fed three of us easily. Incredible value and flavor." },
      { author: "Kevin R.", rating: 5, date: "November 2025", comment: "You can taste the charcoal in every bite. This is real BBQ." },
      { author: "Jennifer L.", rating: 5, date: "October 2025", comment: "The seekh kebabs are the best I've had outside of Lahore. Outstanding." },
    ],
  },
  {
    id: "fries",
    name: "Loaded Fries",
    location: "From $6",
    description: "Hand-cut, twice-cooked, and impossibly crispy. Go classic with sea salt or load them up with melted cheese, smashed patty crumbles, and house sauces.",
    rating: 4.8,
    price: 6,
    image: menuFries,
    images: [menuDrinks, heroGrill, menuBurger],
    features: ["Hand-cut daily", "Twice cooked", "Loaded options"],
    featured: false,
    amenities: [
      { icon: UtensilsCrossed, label: "Hand-Cut", description: "Cut fresh every morning" },
      { icon: Flame, label: "Twice Cooked", description: "Crispy outside, fluffy inside" },
      { icon: ChefHat, label: "House Sauces", description: "Six signature dips" },
      { icon: Leaf, label: "Fresh Toppings", description: "Herbs and cheese to order" },
    ],
    details: [
      "Classic Fries — sea salt and house ketchup",
      "Cheese Fries — molten cheddar sauce, chives",
      "Loaded Spot Fries — patty crumble, pickles, spot sauce",
      "Peri Peri Fries — spicy peri dust, garlic mayo",
      "Truffle Fries — truffle oil, parmesan, herbs",
      "Sweet Potato Fries — with chipotle mayo",
    ],
    reviews: [
      { author: "Brian H.", rating: 5, date: "January 2026", comment: "The Loaded Spot Fries are a meal on their own. Absolutely elite." },
      { author: "Amanda C.", rating: 5, date: "December 2025", comment: "Crispy every single time. The twice-cooked method really shows." },
      { author: "Steve M.", rating: 4, date: "November 2025", comment: "Truffle fries with parmesan — simple but executed perfectly." },
      { author: "Karen B.", rating: 5, date: "October 2025", comment: "My kids fight over these fries. We have to order three portions now." },
    ],
  },
  {
    id: "drinks",
    name: "Drinks & Sauces",
    location: "From $4",
    description: "Thick milkshakes, fresh lemonades, and an arsenal of housemade sauces — from smoky chipotle to fiery scotch bonnet. The perfect partners for anything off the grill.",
    rating: 4.9,
    price: 4,
    image: menuDrinks,
    images: [menuFries, heroGrill, grillInterior],
    features: ["Housemade sauces", "Thick shakes", "Fresh lemonade"],
    featured: false,
    amenities: [
      { icon: CupSoda, label: "Thick Shakes", description: "Real ice cream, spun thick" },
      { icon: Leaf, label: "Fresh Squeezed", description: "Lemonades made daily" },
      { icon: ChefHat, label: "Housemade", description: "Every sauce made in-house" },
      { icon: Flame, label: "Heat Levels", description: "Mild to scotch bonnet" },
    ],
    details: [
      "Classic Shakes — vanilla, chocolate, strawberry",
      "Fresh Mint Lemonade — our signature cooler",
      "Spot Sauce — the one everyone asks about",
      "Smoky Chipotle — deep, warm heat",
      "Garlic Toum — creamy and punchy",
      "Scotch Bonnet Fire — approach with caution",
    ],
    reviews: [
      { author: "Daniel F.", rating: 5, date: "January 2026", comment: "The mint lemonade is ridiculously refreshing. Perfect with the spicy shawarma." },
      { author: "Nicole T.", rating: 4, date: "December 2025", comment: "Chocolate shake is properly thick — you need a spoon. Loved it." },
      { author: "Robert K.", rating: 5, date: "November 2025", comment: "Scotch bonnet sauce nearly finished me but I kept going back. Incredible flavor." },
      { author: "Laura S.", rating: 5, date: "October 2025", comment: "We ordered one of every sauce to try. Not a single miss." },
    ],
  },
];

export const getFeaturedLocations = () => locations.filter(loc => loc.featured);

export const getLocationById = (id: string) => locations.find(loc => loc.id === id);
