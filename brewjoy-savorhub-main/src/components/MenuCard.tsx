
import { useState } from "react";
import { Plus, Minus, Heart } from "lucide-react";
import { Button, Badge } from "./ui-components";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  tags?: string[];
  isFeatured?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isSpicy?: boolean;
}

interface MenuCardProps {
  item: MenuItem;
  featured?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuCard = ({ item, featured = false, className, style }: MenuCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [imageError, setImageError] = useState(false);
  const navigate = useNavigate();
  
  const toggleFavorite = () => setIsFavorite(!isFavorite);
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };
  
  const handleAddToCart = () => {
    // Here you would typically dispatch to a cart context or state manager
    console.log(`Added to cart: ${item.name} x${quantity} - ₹${item.price * quantity}`);
    
    // Show visual feedback
    setIsAddedToCart(true);
    
    // Show toast notification
    toast({
      title: "Item added to cart",
      description: `${item.name} x${quantity} added to your cart`,
    });
    
    // Reset after 2 seconds and offer to go to checkout
    setTimeout(() => {
      setIsAddedToCart(false);
      
      // In a real application, you would integrate this with a cart context
      // For now, we'll just navigate to checkout after adding an item
      const shouldCheckout = window.confirm("View cart and checkout?");
      if (shouldCheckout) {
        navigate("/checkout");
      }
    }, 2000);
  };
  
  const handleImageError = () => {
    console.log(`Image error for ${item.name}: ${item.imageUrl}`);
    setImageError(true);
  };

  return (
    <div 
      className={cn(
        "group overflow-hidden rounded-lg border bg-card transition-all duration-300",
        featured 
          ? "flex flex-col md:flex-row shadow-md hover:shadow-lg" 
          : "flex flex-col shadow-sm hover:shadow hover-lift",
        className
      )}
      style={style}
    >
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden aspect-[3/2]",
        featured ? "md:w-1/2 md:aspect-auto" : ""
      )}>
        <img
          src={imageError ? "/placeholder.svg" : item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={handleImageError}
        />
        
        {/* Tags Overlay - smaller on mobile */}
        <div className="absolute top-1 left-1 sm:top-2 sm:left-2 flex flex-wrap gap-1">
          {item.isVegetarian && (
            <Badge variant="default" className="bg-green-600 text-[10px] px-1 py-0 sm:text-xs sm:px-1.5 sm:py-0.5">Veg</Badge>
          )}
          {item.isGlutenFree && (
            <Badge variant="default" className="bg-green-700 text-[10px] px-1 py-0 sm:text-xs sm:px-1.5 sm:py-0.5">GF</Badge>
          )}
          {item.isSpicy && (
            <Badge variant="accent" className="text-[10px] px-1 py-0 sm:text-xs sm:px-1.5 sm:py-0.5">Spicy</Badge>
          )}
        </div>
        
        {/* Favorite Button - smaller on mobile */}
        <button
          onClick={toggleFavorite}
          className="absolute top-1 right-1 sm:top-2 sm:right-2 p-1 sm:p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-muted-foreground hover:text-accent transition-colors"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={14} className={isFavorite ? "fill-accent text-accent" : ""} />
        </button>
      </div>
      
      {/* Content - smaller text and padding on mobile */}
      <div className={cn(
        "flex flex-col p-2 sm:p-3", 
        featured ? "md:w-1/2 justify-center" : ""
      )}>
        <div className="mb-auto">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-serif text-sm sm:text-base font-semibold line-clamp-1">{item.name}</h3>
            <span className="font-medium text-primary text-xs sm:text-sm whitespace-nowrap ml-1">₹{item.price.toFixed(2)}</span>
          </div>
          
          <p className="text-muted-foreground text-xs line-clamp-2 mb-1">{item.description}</p>
          
          {item.tags && item.tags.length > 0 && (
            <div className="hidden sm:flex flex-wrap gap-1 mb-1">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-[10px] px-1 py-0 border-green-600/30 text-green-700">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
        
        {/* Add to Cart Controls - Starbucks-like styling */}
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center border rounded-md border-green-600/20">
            <button 
              className="p-0.5 text-muted-foreground hover:text-green-700 transition-colors"
              onClick={decrementQuantity}
            >
              <Minus size={12} />
            </button>
            <span className="w-4 text-center text-xs">{quantity}</span>
            <button 
              className="p-0.5 text-muted-foreground hover:text-green-700 transition-colors"
              onClick={incrementQuantity}
            >
              <Plus size={12} />
            </button>
          </div>
          
          <Button 
            size="sm" 
            className={cn(
              "text-[10px] py-0.5 px-1.5 transition-all duration-300 bg-green-800 hover:bg-green-900",
              isAddedToCart && "bg-green-600 hover:bg-green-700"
            )}
            onClick={handleAddToCart}
          >
            {isAddedToCart ? "Added" : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
