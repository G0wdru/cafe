
import { Container, Section, Button } from "./ui-components";
import { Calendar, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";

const ReservationCTA = () => {
  return (
    <Section className="relative overflow-hidden py-16 md:py-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?q=80&w=2071&auto=format&fit=crop"
          alt="Café interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/70 backdrop-blur-sm"></div>
      </div>
      
      <Container>
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="font-serif text-2xl md:text-4xl font-semibold mb-3 md:mb-4">
            Reserve Your Table
          </h2>
          
          <p className="text-white/80 mb-6 md:mb-8 max-w-xl mx-auto text-sm md:text-base px-4">
            Experience the cozy ambiance and exquisite fusion cuisine of Brew Lapax. 
            Book your table now to avoid disappointment.
          </p>
          
          {/* Feature Icons */}
          <div className="grid grid-cols-3 gap-2 md:gap-6 mb-6 md:mb-10 px-2">
            <div className="flex flex-col items-center space-y-1 md:space-y-2">
              <div className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Calendar size={18} className="text-white md:size-24" />
              </div>
              <span className="text-xs md:text-sm text-white/80">Choose Date</span>
            </div>
            
            <div className="flex flex-col items-center space-y-1 md:space-y-2">
              <div className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Clock size={18} className="text-white md:size-24" />
              </div>
              <span className="text-xs md:text-sm text-white/80">Select Time</span>
            </div>
            
            <div className="flex flex-col items-center space-y-1 md:space-y-2">
              <div className="p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Users size={18} className="text-white md:size-24" />
              </div>
              <span className="text-xs md:text-sm text-white/80">Party Size</span>
            </div>
          </div>
          
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 py-2 md:py-3 px-6 text-sm md:text-base" asChild>
            <Link to="/contact">Make a Reservation</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default ReservationCTA;
