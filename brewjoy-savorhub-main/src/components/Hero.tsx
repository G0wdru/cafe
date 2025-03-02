
import { Coffee, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui-components";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Hero = () => {
  const scrollRevealRefs = useRef<(HTMLElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });
    
    scrollRevealRefs.current.forEach(el => {
      if (el) observer.observe(el);
    });
    
    return () => {
      scrollRevealRefs.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="relative min-h-[calc(100vh-65px)] md:min-h-[calc(100vh-80px)] pt-0 flex flex-col justify-center overflow-hidden">
      {/* Background Elements - Updated to use a Starbucks-like image */}
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2193&q=80')] bg-cover bg-center"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-green-900/80 via-green-900/70 to-background"></div>
      
      {/* Animated Circle Element */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-green-600/10 filter blur-3xl mix-blend-multiply animate-float"></div>
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-green-800/10 filter blur-3xl mix-blend-multiply animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center py-10 md:py-0">
        {/* Small Badge/Label */}
        <div 
          ref={el => scrollRevealRefs.current[0] = el}
          className="glass rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 inline-flex items-center space-x-2 text-xs md:text-sm scroll-reveal"
        >
          <img src="/lovable-uploads/2ed98974-de97-4108-9666-3959ca031d5e.png" alt="Brew Lapax" className="h-5 md:h-6 mr-1.5 md:mr-2" />
          <span className="text-white font-medium">New Summer Menu • Limited Time</span>
        </div>
        
        {/* Main Heading */}
        <h1 
          ref={el => scrollRevealRefs.current[1] = el}
          className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-4 md:mb-6 max-w-5xl scroll-reveal text-white text-shadow-md"
          style={{ transitionDelay: '200ms' }}
        >
          Summer starts with <span className="text-green-300">Brew Lapax</span>
        </h1>
        
        {/* Subheading */}
        <p 
          ref={el => scrollRevealRefs.current[2] = el}
          className="text-base md:text-xl text-white max-w-2xl mb-8 md:mb-10 scroll-reveal text-shadow-sm" 
          style={{ transitionDelay: '400ms' }}
        >
          Introducing our Summer Collection - refreshing iced drinks and tropical flavors to keep you cool.
        </p>
        
        {/* Call to Action Buttons */}
        <div 
          ref={el => scrollRevealRefs.current[3] = el}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-10 md:mb-16 w-full max-w-md mx-auto sm:max-w-none scroll-reveal" 
          style={{ transitionDelay: '600ms' }}
        >
          <Button size="lg" asChild className="bg-white text-green-800 hover:bg-white/90 shadow-lg shadow-green-700/20 w-full sm:w-auto py-2.5 md:py-3">
            <Link to="/menu" className="group">
              Order Now 
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1 md:size-18" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-2 border-white text-white font-medium w-full sm:w-auto py-2.5 md:py-3 bg-white/20 hover:bg-white hover:text-green-800 backdrop-blur-sm">
            <Link to="/contact" className="flex items-center justify-center">
              <MapPin size={16} className="mr-2 md:size-18" /> 
              Find a Store
            </Link>
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          ref={el => scrollRevealRefs.current[4] = el}
          className="hidden md:flex items-center flex-col scroll-reveal" 
          style={{ transitionDelay: '800ms' }}
        >
          <span className="text-sm font-medium text-white mb-2">Explore More</span>
          <div className="h-20 w-0.5 bg-gradient-to-b from-white/50 to-transparent bounce-subtle"></div>
        </div>
      </div>
      
      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-background"></div>
    </div>
  );
};

export default Hero;
