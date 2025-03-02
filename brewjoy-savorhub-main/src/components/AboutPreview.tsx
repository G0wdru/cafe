
import { Container, Section, SectionHeading, Button } from "./ui-components";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?q=80&w=2566&auto=format&fit=crop"
                alt="Café interior"
                className="rounded-lg shadow-lg animate-fade-in h-64 object-cover w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2574&auto=format&fit=crop"
                alt="Café food"
                className="rounded-lg shadow-lg animate-fade-in h-64 object-cover w-full"
                style={{ animationDelay: "150ms" }}
              />
              <img
                src="https://images.unsplash.com/photo-1527596845196-b800be77fd60?q=80&w=2670&auto=format&fit=crop"
                alt="Coffee preparation"
                className="rounded-lg shadow-lg animate-fade-in h-64 object-cover w-full"
                style={{ animationDelay: "300ms" }}
              />
              <img
                src="https://images.unsplash.com/photo-1526401667732-955be2aed560?q=80&w=2588&auto=format&fit=crop"
                alt="Café ambiance"
                className="rounded-lg shadow-lg animate-fade-in h-64 object-cover w-full"
                style={{ animationDelay: "450ms" }}
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 h-24 w-24 border-2 border-primary/30 rounded-lg -z-10"></div>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 border-2 border-primary/30 rounded-lg -z-10"></div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <SectionHeading
              title="Our Story"
              subtitle="A unique culinary journey blending French aesthetics with authentic Indian flavors."
            />
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Brew Lapax was born from a passion to create a unique café experience that bridges two rich culinary traditions. Our founder, inspired by years spent studying in Paris and growing up in Mumbai, envisioned a space where the elegance of French café culture would complement the bold flavors of Indian cuisine.
              </p>
              <p>
                Each dish and beverage at Brew Lapax is carefully crafted to honor both traditions while creating something entirely new. Our chefs blend traditional French techniques with authentic Indian spices and ingredients, resulting in a menu that surprises and delights.
              </p>
            </div>
            
            <Button variant="outline" asChild>
              <Link to="/about" className="inline-flex items-center space-x-2">
                <span>Read Our Full Story</span>
                <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutPreview;
