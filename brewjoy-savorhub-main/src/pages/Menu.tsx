
import { useState } from "react";
import { Container, Section, SectionHeading, Badge } from "@/components/ui-components";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuCard, { MenuItem } from "@/components/MenuCard";
import { Search, Filter } from "lucide-react";

// Sample Menu Items Data inspired by Starbucks
const menuItems: MenuItem[] = [
  // Hot Coffee Section
  {
    id: "hot-1",
    name: "Caramel Macchiato",
    description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and finished with caramel sauce.",
    price: 185,
    imageUrl: "https://images.unsplash.com/photo-1621555470436-d36e9683bbc0?q=80&w=2070&auto=format&fit=crop",
    category: "Hot Coffee",
    tags: ["Signature", "Hot Drinks"],
    isFeatured: true
  },
  {
    id: "hot-2",
    name: "Caffè Latte",
    description: "Rich, full-bodied espresso in steamed milk, lightly topped with foam.",
    price: 165,
    imageUrl: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2037&auto=format&fit=crop",
    category: "Hot Coffee",
    tags: ["Classic", "Hot Drinks"],
    isVegetarian: true
  },
  {
    id: "hot-3",
    name: "Cinnamon Dolce Latte",
    description: "Espresso with steamed milk and cinnamon dolce flavors, topped with whipped cream and cinnamon dolce topping.",
    price: 195,
    imageUrl: "https://images.unsplash.com/photo-1572286258217-215cf8e667f8?q=80&w=2070&auto=format&fit=crop",
    category: "Hot Coffee",
    tags: ["Flavored", "Hot Drinks"],
    isVegetarian: true
  },
  {
    id: "hot-4",
    name: "Pumpkin Spice Latte",
    description: "Signature espresso and milk with seasonal flavors of pumpkin, cinnamon, nutmeg and clove.",
    price: 210,
    imageUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2056&auto=format&fit=crop",
    category: "Hot Coffee",
    tags: ["Seasonal", "Signature"],
    isFeatured: true,
    isVegetarian: true
  },
  
  // Cold Coffee Section
  {
    id: "cold-1",
    name: "Iced Caffè Americano",
    description: "Espresso shots topped with cold water to produce a light layer of crema, then served over ice.",
    price: 175,
    imageUrl: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=2079&auto=format&fit=crop",
    category: "Cold Coffee",
    tags: ["Classic", "Iced"],
    isVegetarian: true,
    isGlutenFree: true
  },
  {
    id: "cold-2",
    name: "Cold Brew Coffee",
    description: "Slow-steeped, small-batch cold brew coffee, served over ice.",
    price: 180,
    imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop",
    category: "Cold Coffee",
    tags: ["Signature", "Iced"],
    isVegetarian: true,
    isGlutenFree: true
  },
  {
    id: "cold-3",
    name: "Vanilla Sweet Cream Cold Brew",
    description: "Cold brew coffee topped with a delicate float of house-made vanilla sweet cream.",
    price: 195,
    imageUrl: "https://images.unsplash.com/photo-1578314675229-mangrove1d74e6?q=80&w=2071&auto=format&fit=crop",
    category: "Cold Coffee",
    tags: ["Signature", "Iced"],
    isVegetarian: true
  },
  
  // Frappuccino Section
  {
    id: "frap-1",
    name: "Mocha Frappuccino",
    description: "Coffee blended with mocha sauce, milk and ice, topped with whipped cream.",
    price: 220,
    imageUrl: "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=2898&auto=format&fit=crop",
    category: "Frappuccino",
    tags: ["Blended", "Chocolate"],
    isVegetarian: true
  },
  {
    id: "frap-2",
    name: "Caramel Frappuccino",
    description: "Coffee blended with caramel syrup, milk and ice, topped with whipped cream and caramel sauce.",
    price: 215,
    imageUrl: "https://images.unsplash.com/photo-1619811831608-a4672a9117b7?q=80&w=2033&auto=format&fit=crop",
    category: "Frappuccino",
    tags: ["Blended", "Caramel"],
    isVegetarian: true
  },
  
  // Tea Section
  {
    id: "tea-1",
    name: "Chai Tea Latte",
    description: "Black tea infused with cinnamon, clove, and other warming spices, combined with steamed milk.",
    price: 170,
    imageUrl: "https://images.unsplash.com/photo-1593443330135-304fc61aec5f?q=80&w=1974&auto=format&fit=crop",
    category: "Tea",
    tags: ["Hot Drinks", "Spiced"],
    isVegetarian: true
  },
  {
    id: "tea-2",
    name: "Iced Matcha Latte",
    description: "Premium matcha tea blended with milk and ice for a refreshing, energizing beverage.",
    price: 195,
    imageUrl: "https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?q=80&w=2034&auto=format&fit=crop",
    category: "Tea",
    tags: ["Signature", "Iced"],
    isFeatured: true,
    isVegetarian: true
  },
  
  // Food Items
  {
    id: "food-1",
    name: "Chocolate Chip Cookie",
    description: "A classic chocolate chip cookie with rich chocolate chunks and a gooey center.",
    price: 120,
    imageUrl: "https://images.unsplash.com/photo-1590080876176-c219f93bbb8d?q=80&w=2070&auto=format&fit=crop",
    category: "Bakery",
    tags: ["Snacks", "Dessert"],
    isFeatured: true,
    isVegetarian: true
  },
  {
    id: "food-2",
    name: "Blueberry Muffin",
    description: "A moist muffin with sweet blueberries and a streusel topping.",
    price: 145,
    imageUrl: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=2065&auto=format&fit=crop",
    category: "Bakery",
    tags: ["Breakfast", "Fruit"],
    isVegetarian: true
  },
  {
    id: "food-3",
    name: "Grilled Cheese Sandwich",
    description: "A blend of white cheddar, mozzarella and gruyere cheeses grilled on rustic sourdough bread.",
    price: 245,
    imageUrl: "https://images.unsplash.com/photo-1528736235302-52922df5c122?q=80&w=2094&auto=format&fit=crop",
    category: "Food",
    tags: ["Lunch", "Hot"],
    isVegetarian: true
  },
  {
    id: "food-4",
    name: "Protein Box",
    description: "A filling meal box with hard-boiled eggs, cheese, multigrain bread, fruit, and peanut butter.",
    price: 295,
    imageUrl: "https://images.unsplash.com/photo-1553775282-20af80779df7?q=80&w=2070&auto=format&fit=crop",
    category: "Food",
    tags: ["Lunch", "Protein"],
    isVegetarian: true
  }
];

// All possible categories from our data
const allCategories = ["All", ...Array.from(new Set(menuItems.map(item => item.category)))];

// All possible dietary preferences from our data
const dietaryPreferences = [
  { id: "vegetarian", label: "Vegetarian", key: "isVegetarian" },
  { id: "nonVegetarian", label: "Non-Vegetarian", key: "isNonVegetarian" },
  { id: "glutenFree", label: "Gluten Free", key: "isGlutenFree" },
  { id: "spicy", label: "Spicy", key: "isSpicy" }
];

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeDietary, setActiveDietary] = useState<string[]>([]);
  
  // Process menu items to add isNonVegetarian property for filtering
  const processedMenuItems = menuItems.map(item => ({
    ...item,
    isNonVegetarian: item.isVegetarian !== true
  }));
  
  // Filter menu items based on search query, category, and dietary preferences
  const filteredItems = processedMenuItems.filter(item => {
    // Search filter
    const matchesSearch = 
      searchQuery === "" || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())));
    
    // Category filter
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    
    // Dietary preferences filter
    const matchesDietary = 
      activeDietary.length === 0 || 
      activeDietary.every(pref => {
        const key = dietaryPreferences.find(p => p.id === pref)?.key as keyof typeof item;
        return item[key] === true;
      });
    
    return matchesSearch && matchesCategory && matchesDietary;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-16 sm:pt-20">
        {/* Hero Section - reduced padding */}
        <Section className="bg-green-900/10 py-6 sm:py-8">
          <Container>
            <SectionHeading
              title="Menu"
              subtitle="Handcrafted beverages and delicious food made with the finest ingredients."
              centered
            />
          </Container>
        </Section>
        
        {/* Filter Section */}
        <Section className="py-4 sm:py-6 border-b">
          <Container>
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Search Bar */}
              <div className="relative flex-grow max-w-full sm:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search our menu..."
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500/30"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              {/* Categories Scrollable Row */}
              <div className="flex overflow-x-auto pb-2 scrollbar-none gap-2 -mx-2 px-2">
                {allCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      selectedCategory === category
                        ? "bg-green-700 text-white"
                        : "bg-secondary/30 text-foreground hover:bg-secondary/50"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Dietary Preferences */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none -mx-2 px-2">
                <Filter size={18} className="text-muted-foreground shrink-0" />
                <div className="flex flex-nowrap gap-2">
                  {dietaryPreferences.map(pref => (
                    <button
                      key={pref.id}
                      onClick={() => {
                        setActiveDietary(prev => 
                          prev.includes(pref.id) 
                            ? prev.filter(p => p !== pref.id) 
                            : [...prev, pref.id]
                        );
                      }}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors whitespace-nowrap ${
                        activeDietary.includes(pref.id)
                          ? "bg-green-600 text-white"
                          : "bg-secondary/30 text-foreground hover:bg-secondary/50"
                      }`}
                    >
                      {pref.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* Menu Items Section - Updated grid for mobile */}
        <Section>
          <Container>
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
                {filteredItems.map((item, index) => (
                  <MenuCard 
                    key={item.id} 
                    item={item}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 sm:py-12">
                <h3 className="text-xl font-medium mb-2">No items found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search or filters to find what you're looking for.
                </p>
              </div>
            )}
          </Container>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Menu;
