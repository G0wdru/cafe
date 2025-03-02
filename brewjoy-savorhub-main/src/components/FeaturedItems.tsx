
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Container, Section, SectionHeading, Button } from "./ui-components";
import MenuCard, { MenuItem } from "./MenuCard";

const featuredItems: MenuItem[] = [
  {
    id: "1",
    name: "Caramel Frappuccino®",
    description: "Buttery caramel syrup blended with coffee, milk and ice, topped with whipped cream and caramel drizzle.",
    price: 185,
    imageUrl: "https://images.unsplash.com/photo-1619811831608-a4672a9117b7?q=80&w=2033&auto=format&fit=crop",
    category: "Frappuccino",
    tags: ["Signature", "Cold Drinks"],
    isFeatured: true
  },
  {
    id: "2",
    name: "Iced Matcha Latte",
    description: "Premium matcha tea blended with milk and ice for a refreshing, energizing beverage.",
    price: 195,
    imageUrl: "https://images.unsplash.com/photo-1536411396596-afed9fa3c1b2?q=80&w=2034&auto=format&fit=crop",
    category: "Cold Drinks",
    tags: ["Signature", "Iced"],
    isFeatured: true,
    isVegetarian: true
  },
  {
    id: "3",
    name: "Vanilla Sweet Cream Cold Brew",
    description: "Slow-steeped cold brew topped with house-made vanilla sweet cream, creating layers of sweetness.",
    price: 175,
    imageUrl: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop",
    category: "Cold Coffee",
    tags: ["Featured", "Cold Brew"],
    isFeatured: true,
    isVegetarian: true
  },
  {
    id: "4",
    name: "Strawberry Açaí Refresher",
    description: "Sweet strawberry flavors and açaí notes with real strawberry pieces and green coffee extract.",
    price: 165,
    imageUrl: "https://images.unsplash.com/photo-1543363136-3fdb62e11be9?q=80&w=2069&auto=format&fit=crop",
    category: "Refreshers",
    tags: ["Seasonal", "Iced"],
    isFeatured: true,
    isVegetarian: true
  }
];

const FeaturedItems = () => {
  return (
    <Section className="bg-gradient-to-b from-background to-green-50">
      <Container>
        <SectionHeading
          title="Today's Featured Menu"
          subtitle="Discover our seasonal favorites, handcrafted with care just for you."
          centered
          className="text-green-900"
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <MenuCard 
              key={item.id} 
              item={item}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg" asChild className="border-green-800 text-green-800 hover:bg-green-50">
            <Link to="/menu" className="inline-flex items-center space-x-2">
              <span>View Full Menu</span>
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default FeaturedItems;
