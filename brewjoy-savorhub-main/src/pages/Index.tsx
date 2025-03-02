
import Hero from "@/components/Hero";
import FeaturedItems from "@/components/FeaturedItems";
import AboutPreview from "@/components/AboutPreview";
import ReservationCTA from "@/components/ReservationCTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[65px] md:pt-[80px]">
        <Hero />
        <FeaturedItems />
        <AboutPreview />
        <ReservationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
