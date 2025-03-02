
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Section, SectionHeading, Button } from "@/components/ui-components";
import { Calendar, Clock, Users, Check, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  
  // Reservation form state
  const [reservationData, setReservationData] = useState({
    date: "",
    time: "",
    guests: "2",
    name: "",
    email: "",
    phone: "",
    specialRequests: ""
  });
  
  // Form submission handler
  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the reservation data to your backend
    console.log("Reservation form submitted:", reservationData);
    
    // Show success toast
    toast({
      title: "Reservation Requested",
      description: "We've received your reservation request and will confirm shortly!",
      duration: 5000,
    });
    
    // Reset form
    setReservationData({
      date: "",
      time: "",
      guests: "2",
      name: "",
      email: "",
      phone: "",
      specialRequests: ""
    });
  };
  
  // Form input handler
  const handleReservationChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setReservationData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <Section className="bg-secondary/20 py-16">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Make a Reservation</h1>
              <p className="text-lg text-muted-foreground">
                Secure your table for a delightful experience at Brew Lapax
              </p>
            </div>
          </Container>
        </Section>
        
        {/* Map Section with opening hours */}
        <Section className="bg-secondary/10">
          <Container>
            <div className="max-w-4xl mx-auto">
              <iframe
                title="Brew Lapax Location"
                className="w-full h-96 rounded-lg shadow-lg mb-6"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.63748841113036!3d12.978345987308655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16963e26adeb%3A0x6f6e20a03d8e3e78!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1684429640496!5m2!1sen!2sus"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              
              <div className="bg-white p-5 rounded-md shadow-sm">
                <h3 className="font-medium text-lg mb-3">Opening Hours</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="font-medium">Monday - Friday</div>
                  <div>8AM - 10PM</div>
                  <div className="font-medium">Saturday</div>
                  <div>9AM - 11PM</div>
                  <div className="font-medium">Sunday</div>
                  <div>9AM - 9PM</div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* Reservation Section */}
        <Section>
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="Reservation Details"
                subtitle="Let us know when you'd like to visit us"
                centered
              />
              
              <form onSubmit={handleReservationSubmit} className="bg-white p-8 rounded-lg shadow-sm mt-8">
                {/* Date, Time and Party Size */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Calendar size={16} className="text-primary" />
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={reservationData.date}
                      onChange={handleReservationChange}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Clock size={16} className="text-primary" />
                      Time
                    </label>
                    <select
                      name="time"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={reservationData.time}
                      onChange={handleReservationChange}
                    >
                      <option value="">Select time</option>
                      <option value="08:00">8:00 AM</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="13:00">1:00 PM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                      <option value="19:00">7:00 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="21:00">9:00 PM</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="flex items-center gap-2 text-sm font-medium mb-2">
                      <Users size={16} className="text-primary" />
                      Party Size
                    </label>
                    <select
                      name="guests"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={reservationData.guests}
                      onChange={handleReservationChange}
                    >
                      <option value="1">1 person</option>
                      <option value="2">2 people</option>
                      <option value="3">3 people</option>
                      <option value="4">4 people</option>
                      <option value="5">5 people</option>
                      <option value="6">6 people</option>
                      <option value="7">7 people</option>
                      <option value="8">8 people</option>
                      <option value="9+">9+ people</option>
                    </select>
                  </div>
                </div>
                
                {/* Contact information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={reservationData.name}
                      onChange={handleReservationChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={reservationData.email}
                      onChange={handleReservationChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      value={reservationData.phone}
                      onChange={handleReservationChange}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Special Requests
                    </label>
                    <input
                      type="text"
                      name="specialRequests"
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                      placeholder="Allergies, special occasions, seating preferences..."
                      value={reservationData.specialRequests}
                      onChange={handleReservationChange}
                    />
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <Check size={16} className="text-primary mr-2" />
                  <span className="text-sm text-muted-foreground">
                    We'll send a confirmation email once your reservation is confirmed.
                  </span>
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Request Reservation
                </Button>
              </form>
            </div>
          </Container>
        </Section>
        
        {/* Contact Us Section */}
        <Section className="bg-secondary/10">
          <Container>
            <div className="max-w-3xl mx-auto">
              <SectionHeading
                title="Contact Us"
                subtitle="We're here to assist you with any questions or concerns"
                centered
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {/* Phone Contact */}
                <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
                  <div className="w-12 h-12 bg-café-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone size={24} className="text-café-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-3">We're available to take your call</p>
                  <a href="tel:+919876543210" className="text-café-500 font-medium hover:underline">
                    +91 98765 43210
                  </a>
                </div>
                
                {/* Email Contact */}
                <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
                  <div className="w-12 h-12 bg-café-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail size={24} className="text-café-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-3">Send us your questions anytime</p>
                  <a href="mailto:hello@brewlapax.com" className="text-café-500 font-medium hover:underline">
                    hello@brewlapax.com
                  </a>
                </div>
                
                {/* Visit Us */}
                <div className="bg-white p-6 rounded-lg shadow-sm text-center hover-lift">
                  <div className="w-12 h-12 bg-café-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin size={24} className="text-café-500" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-3">Drop by for a delightful experience</p>
                  <p className="text-café-500 font-medium">
                    123 Cafe Street, Indiranagar<br />
                    Bengaluru, 560038
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
