
import { Link } from "react-router-dom";
import { Coffee, Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, BookmarkCheck } from "lucide-react";
import useScrollReveal from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollReveal({ threshold: 0.1 });
  
  return (
    <footer 
      ref={footerRef}
      className={cn(
        "bg-gradient-to-b from-white to-secondary relative pt-16 pb-6 transition-all duration-700",
        footerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
    >
      {/* Top decorative element */}
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-café-300 via-gold to-café-500"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img src="/lovable-uploads/2ed98974-de97-4108-9666-3959ca031d5e.png" alt="Brew Lapax" className="h-24" />
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Where French elegance meets Indian flavor in every cup and bite. A unique café experience worth savoring.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-café-500 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-café-500 hover:text-gold transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-café-500 hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Menu", path: "/menu" },
                { name: "About Us", path: "/about" },
                { name: "Reservation", path: "/contact", icon: <BookmarkCheck size={16} className="mr-1 text-café-500" /> },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path + link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-café-500 transition-colors flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-gold group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-café-500 flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">123 Cafe Street, Gourmet District, Paris Nagar, 560001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-café-500" />
                <a href="tel:+1234567890" className="text-muted-foreground hover:text-café-500 transition-colors text-sm">+91 98765 43210</a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-café-500" />
                <a href="mailto:hello@brewlapax.com" className="text-muted-foreground hover:text-café-500 transition-colors text-sm">hello@brewlapax.com</a>
              </li>
            </ul>
          </div>
          
          {/* Hours Column */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-4 text-foreground">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-café-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium text-sm">Monday - Friday</p>
                  <p className="text-muted-foreground text-sm">8:00 AM - 9:00 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock size={18} className="text-café-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground font-medium text-sm">Saturday - Sunday</p>
                  <p className="text-muted-foreground text-sm">9:00 AM - 10:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-muted/40 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Brew Lapax. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-muted-foreground hover:text-café-500 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-café-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
