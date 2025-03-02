
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Section, SectionHeading, Button } from "@/components/ui-components";
import { X, ShoppingBag, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

// Mock cart data - in a real app this would come from a cart context or state
// This is just for demonstration purposes
const initialCartItems = [
  {
    id: "1",
    name: "Butter Chicken",
    price: 240,
    quantity: 2,
    imageUrl: "/placeholder.svg",
  },
  {
    id: "2",
    name: "Paneer Tikka",
    price: 180,
    quantity: 1,
    imageUrl: "/placeholder.svg",
  }
];

const Checkout = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Calculate subtotal, tax, and total
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.05; // 5% tax
  const deliveryFee = 30; // Fixed delivery fee
  const total = subtotal + tax + deliveryFee;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }

    // Validate form
    if (!customerInfo.name || !customerInfo.phone || !customerInfo.address) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would send this data to your backend
      console.log("Submitting order:", {
        customerInfo,
        items: cartItems,
        subtotal,
        tax,
        deliveryFee,
        total
      });

      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Clear cart
      setCartItems([]);

      // Show success message
      toast({
        title: "Order placed successfully!",
        description: "Thanks for your order. You will receive a confirmation shortly.",
      });

      // Redirect to home
      navigate("/");
    } catch (error) {
      console.error("Error submitting order:", error);
      toast({
        title: "Error placing order",
        description: "There was a problem processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <Container>
          <Section className="py-6 md:py-8">
            <div className="flex items-center gap-2 mb-4 md:mb-8">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/menu")}
                className="flex items-center gap-1 text-sm"
              >
                <ArrowLeft size={16} />
                Back to Menu
              </Button>
            </div>

            <SectionHeading
              title="Checkout"
              subtitle="Review your order and complete checkout"
              className="text-left mb-6 md:mb-10"
            />

            {cartItems.length === 0 ? (
              <div className="text-center py-8 md:py-12">
                <div className="mb-4 flex justify-center">
                  <ShoppingBag size={48} className="text-muted-foreground/50" />
                </div>
                <h3 className="text-lg md:text-xl font-medium mb-2 font-serif">Your cart is empty</h3>
                <p className="text-muted-foreground text-sm md:text-base mb-6">Looks like you haven't added any items to your cart yet.</p>
                <Button onClick={() => navigate("/menu")}>Return to Menu</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                {/* Order Summary */}
                <div className="lg:col-span-2">
                  <div className="bg-card rounded-lg border shadow-sm p-3 md:p-4 mb-4 md:mb-6">
                    <h3 className="font-serif font-medium text-base md:text-lg mb-3 md:mb-4 text-left">Order Summary</h3>
                    
                    <div className="divide-y">
                      {cartItems.map((item) => (
                        <div key={item.id} className="py-3 md:py-4 flex gap-3 md:gap-4">
                          <div className="w-14 h-14 md:w-16 md:h-16 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={item.imageUrl} 
                              alt={item.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          
                          <div className="flex-1 text-left">
                            <div className="flex justify-between">
                              <h4 className="font-medium font-serif text-sm md:text-base">{item.name}</h4>
                              <button 
                                onClick={() => handleRemoveItem(item.id)}
                                className="text-muted-foreground hover:text-destructive"
                              >
                                <X size={16} />
                              </button>
                            </div>
                            <div className="text-muted-foreground text-xs md:text-sm">₹{item.price.toFixed(2)}</div>
                            
                            <div className="flex items-center mt-2">
                              <button 
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border rounded-l-md text-sm"
                              >
                                -
                              </button>
                              <span className="w-8 md:w-10 h-7 md:h-8 flex items-center justify-center border-t border-b text-sm">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center border rounded-r-md text-sm"
                              >
                                +
                              </button>
                              
                              <div className="ml-auto font-medium text-sm md:text-base">
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Customer Information and Payment */}
                <div className="lg:col-span-1">
                  <form onSubmit={handleSubmitOrder}>
                    <div className="bg-card rounded-lg border shadow-sm p-3 md:p-4 mb-4 md:mb-6">
                      <h3 className="font-serif font-medium text-base md:text-lg mb-3 md:mb-4 text-left">Customer Information</h3>
                      
                      <div className="space-y-3 md:space-y-4">
                        <div className="text-left">
                          <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-1">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={customerInfo.name}
                            onChange={handleInputChange}
                            className="w-full rounded-md border p-2 text-sm md:text-base"
                            required
                          />
                        </div>
                        
                        <div className="text-left">
                          <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-1">Phone *</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={customerInfo.phone}
                            onChange={handleInputChange}
                            className="w-full rounded-md border p-2 text-sm md:text-base"
                            required
                          />
                        </div>
                        
                        <div className="text-left">
                          <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-1">Email</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={customerInfo.email}
                            onChange={handleInputChange}
                            className="w-full rounded-md border p-2 text-sm md:text-base"
                          />
                        </div>
                        
                        <div className="text-left">
                          <label htmlFor="address" className="block text-xs md:text-sm font-medium mb-1">Delivery Address *</label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={customerInfo.address}
                            onChange={handleInputChange}
                            className="w-full rounded-md border p-2 text-sm md:text-base"
                            required
                          />
                        </div>
                        
                        <div className="text-left">
                          <label htmlFor="notes" className="block text-xs md:text-sm font-medium mb-1">Special Instructions</label>
                          <textarea
                            id="notes"
                            name="notes"
                            value={customerInfo.notes}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full rounded-md border p-2 text-sm md:text-base"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-card rounded-lg border shadow-sm p-3 md:p-4">
                      <h3 className="font-serif font-medium text-base md:text-lg mb-3 md:mb-4 text-left">Order Total</h3>
                      
                      <div className="space-y-2 mb-4 text-left text-sm md:text-base">
                        <div className="flex justify-between">
                          <span>Subtotal</span>
                          <span>₹{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Tax (5%)</span>
                          <span>₹{tax.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Delivery Fee</span>
                          <span>₹{deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="border-t pt-2 mt-2">
                          <div className="flex justify-between font-medium text-base md:text-lg">
                            <span>Total</span>
                            <span>₹{total.toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full text-sm md:text-base"
                        disabled={isSubmitting || cartItems.length === 0}
                      >
                        {isSubmitting ? "Processing..." : "Place Order"}
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </Section>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Checkout;
