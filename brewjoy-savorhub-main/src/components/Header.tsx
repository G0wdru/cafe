
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee, ShoppingCart, BookmarkCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();
  
  // Check if we're on the home page
  const isHomePage = location.pathname === "/";
  
  // Get cart items from localStorage
  const [cartItemsCount, setCartItemsCount] = useState(0);
  
  useEffect(() => {
    const updateCartCount = () => {
      try {
        const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartItemsCount(totalItems);
      } catch (error) {
        console.error("Error getting cart items:", error);
        setCartItemsCount(0);
      }
    };
    
    // Update cart count when component mounts
    updateCartCount();
    
    // Listen for storage events to update cart count
    window.addEventListener("storage", updateCartCount);
    
    // Create a custom event listener for cart updates
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);
    
    return () => {
      window.removeEventListener("storage", updateCartCount);
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);
  
  // Handle scroll events to change header appearance
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Reservation", path: "/contact", icon: <BookmarkCheck size={14} className="mr-1" /> },
    { name: "Contact", path: "/contact" },
  ];
  
  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled || !isHomePage 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-2 md:py-3"
      )}
    >
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
        {/* Logo with Home Button Functionality */}
        <Link 
          to="/" 
          className="flex items-center transition-transform hover:scale-105"
          aria-label="Go to home page"
        >
          <img 
            src="/lovable-uploads/2ed98974-de97-4108-9666-3959ca031d5e.png" 
            alt="Brew Lapax - Home" 
            className="h-10 sm:h-12 md:h-16" 
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path + link.name}
              to={link.path}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-café-500",
                "after:absolute after:block after:h-0.5 after:bg-gold after:w-0 after:left-0 after:-bottom-1",
                "after:transition-all after:duration-300 hover:after:w-full",
                "flex items-center",
                location.pathname === link.path && link.name !== "Reservation"
                  ? "text-café-600 after:w-full"
                  : (scrolled || !isHomePage) ? "text-foreground" : "text-foreground"
              )}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
          
          {/* Cart Button */}
          <Link 
            to="/checkout" 
            className={cn(
              "relative p-2 text-foreground hover:text-café-500 transition-colors"
            )}
            aria-label="View Cart"
          >
            <ShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-café-500 text-white text-xs flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
          
          {/* CTA Button */}
          <Link 
            to="/menu" 
            className={cn(
              "btn btn-primary py-1.5 px-3 text-xs lg:py-2 lg:px-4 rounded-full flex items-center gap-1.5 hover-lift",
              scrolled || !isHomePage ? "bg-café-500" : "bg-café-500"
            )}
          >
            <Coffee size={14} className="lg:w-4 lg:h-4" />
            <span>Order Now</span>
          </Link>
        </nav>
        
        {/* Mobile - Cart and Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          {/* Cart Button */}
          <Link 
            to="/checkout" 
            className="relative p-2 text-foreground"
            aria-label="View Cart"
          >
            <ShoppingCart size={20} />
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-café-500 text-white text-xs flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Link>
          
          {/* Menu Button */}
          <button 
            onClick={toggleMenu}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 w-full bg-white shadow-md transition-all duration-300 overflow-hidden",
          isMenuOpen 
            ? "max-h-[70vh] opacity-100 animate-mobile-nav-in" 
            : "max-h-0 opacity-0 animate-mobile-nav-out"
        )}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path + link.name}
                to={link.path}
                className={cn(
                  "py-2 px-4 rounded-md transition-colors text-center flex items-center justify-center",
                  location.pathname === link.path && link.name !== "Reservation"
                    ? "bg-café-500/10 text-café-600"
                    : "hover:bg-café-500/5 hover:text-café-500"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/menu" 
              className="btn btn-primary py-2 px-4 rounded-full flex items-center justify-center gap-2 mt-1"
              onClick={() => setIsMenuOpen(false)}
            >
              <Coffee size={16} />
              <span>Order Now</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
