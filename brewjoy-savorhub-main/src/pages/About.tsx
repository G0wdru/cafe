
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Container, Section, SectionHeading, Button } from "@/components/ui-components";
import { MapPin, Phone, Mail, Clock, Coffee, Utensils, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <Section className="bg-secondary/20 py-16">
          <Container>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-lg text-muted-foreground">
                A journey through flavors, cultures, and passion for exceptional food.
              </p>
            </div>
          </Container>
        </Section>
        
        {/* Origin Story Section */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <SectionHeading 
                  title="The Beginning" 
                  subtitle="How a love for both French and Indian cuisine created something new"
                />
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Brew Lapax was born from a dream and a passion for bringing together two distinct culinary worlds. Our founder, Priya Laurent, grew up in Mumbai with a deep appreciation for the rich, vibrant flavors of Indian cuisine.
                  </p>
                  <p>
                    After studying culinary arts in Paris, Priya fell in love with the elegance and precision of French cooking. She envisioned a space where these two culinary traditions could meet and create something entirely new – a café that honors both her heritage and her training.
                  </p>
                  <p>
                    In 2018, that vision became reality with the opening of Brew Lapax. The name itself is a playful fusion – "Brew" representing our commitment to exceptional coffee and tea, and "Lapax" derived from "La Paix," the French word for peace.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=2566&auto=format&fit=crop"
                    alt="Café interior"
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 h-24 w-24 border-2 border-primary/30 rounded-lg -z-10"></div>
                  <div className="absolute -top-6 -right-6 h-24 w-24 border-2 border-primary/30 rounded-lg -z-10"></div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* Our Philosophy Section */}
        <Section className="bg-secondary/10">
          <Container>
            <SectionHeading
              title="Our Philosophy"
              subtitle="The principles that guide everything we do"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Quality Ingredients</h3>
                <p className="text-muted-foreground">
                  We source the finest ingredients, from single-origin coffee beans to locally-grown Indian spices, ensuring every dish and beverage meets our standard of excellence.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Utensils className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Culinary Creativity</h3>
                <p className="text-muted-foreground">
                  We believe in pushing boundaries and creating unexpected combinations that delight and surprise our customers, while respecting traditional techniques.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-primary" size={28} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Community Focus</h3>
                <p className="text-muted-foreground">
                  More than just a café, we strive to create a welcoming space where people can connect, share ideas, and build relationships over exceptional food and drink.
                </p>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* Team Section */}
        <Section>
          <Container>
            <SectionHeading
              title="Meet Our Team"
              subtitle="The passionate people behind Brew Lapax"
              centered
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
                    alt="Priya Laurent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1">Priya Laurent</h3>
                <p className="text-primary mb-2">Founder & Head Chef</p>
                <p className="text-muted-foreground">
                  Trained in Paris with roots in Mumbai, Priya brings her unique perspective to every aspect of Brew Lapax.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
                    alt="Antoine Dubois"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1">Antoine Dubois</h3>
                <p className="text-primary mb-2">Master Pâtissier</p>
                <p className="text-muted-foreground">
                  With over 15 years of experience in French pastry, Antoine brings authenticity and innovation to our pastry selection.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
                    alt="Anjali Sharma"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-1">Anjali Sharma</h3>
                <p className="text-primary mb-2">Tea Specialist</p>
                <p className="text-muted-foreground">
                  A certified tea sommelier, Anjali curates our unique tea blends and ensures an authentic experience.
                </p>
              </div>
            </div>
          </Container>
        </Section>
        
        {/* Visit Us Section */}
        <Section className="bg-secondary/20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <iframe
                  title="Brew Lapax Location"
                  className="w-full h-96 rounded-lg shadow-lg"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.001696423075!2d77.63748841113036!3d12.978345987308655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16963e26adeb%3A0x6f6e20a03d8e3e78!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1684429640496!5m2!1sen!2sus"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div>
                <h2 className="font-serif text-3xl font-semibold mb-6">Visit Brew Lapax</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-muted-foreground">123 Café Street, Indiranagar<br />Bangalore, Karnataka 560038</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Opening Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8AM - 10PM<br />
                        Saturday: 9AM - 11PM<br />
                        Sunday: 9AM - 9PM
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 80 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary mr-4 mt-1" size={20} />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground">info@brewlapax.com</p>
                    </div>
                  </div>
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

export default About;
