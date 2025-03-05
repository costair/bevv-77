
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Beer, Coffee, Pizza, Wine, CupSoda, IceCreamCone, CookingPot, Apple, ChefHat, Utensils } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    service: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Transform the form data to match what the API expects
      const apiFormData = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        subject: formData.service || "General Inquiry",
        message: formData.message,
      };

      const response = await supabase.functions.invoke('send-contact', {
        body: apiFormData
      });

      if (response.error) {
        console.error("Supabase function error:", response.error);
        throw new Error(response.error.message || "Error sending message");
      }

      console.log("Contact form response:", response);

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        service: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        variant: "destructive",
        title: "Error sending message",
        description: error.message || "Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    { value: "", label: "Select a service" },
    { value: "Packaging Design", label: "Packaging Design" },
    { value: "Brand Identity", label: "Brand Identity" },
    { value: "Web Design", label: "Web Design" },
    { value: "Marketing Campaigns", label: "Marketing Campaigns" },
    { value: "Social Media", label: "Social Media" },
    { value: "Logo Design", label: "Logo Design" },
  ];

  return (
    <section id="contact" className="py-12 bg-gray-100 relative overflow-hidden">
      {/* Decorative Icons */}
      <div className="absolute w-full h-full pointer-events-none">
        <Beer className="absolute text-[#F97316] opacity-40 w-12 h-12 top-[15%] left-[10%] rotate-12" />
        <Coffee className="absolute text-[#8A898C] opacity-40 w-10 h-10 top-[25%] right-[12%] -rotate-12" />
        <Pizza className="absolute text-[#FEC6A1] opacity-30 w-14 h-14 bottom-[20%] left-[15%] rotate-45" />
        <Wine className="absolute text-[#FFDEE2] opacity-40 w-12 h-12 top-[35%] left-[20%] -rotate-12" />
        <CupSoda className="absolute text-[#9b87f5] opacity-40 w-8 h-8 bottom-[30%] right-[20%] rotate-12" />
        <IceCreamCone className="absolute text-[#F2FCE2] opacity-30 w-16 h-16 top-[10%] right-[25%] -rotate-6" />
        <CookingPot className="absolute text-[#FDE1D3] opacity-40 w-10 h-10 bottom-[15%] right-[15%] rotate-6" />
        <Apple className="absolute text-[#FEF7CD] opacity-30 w-8 h-8 top-[40%] right-[10%] rotate-12" />
        <ChefHat className="absolute text-[#C8C8C9] opacity-30 w-12 h-12 bottom-[25%] left-[5%] -rotate-12" />
        <Utensils className="absolute text-[#7E69AB] opacity-40 w-8 h-8 top-[45%] left-[15%] rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-6 py-2 bg-black text-white text-xs uppercase tracking-wider font-medium rounded-full mb-3">
              CONTACT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Contact our team
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Got any questions about the product? or looking for our partners? We're here to help.
              Chat to our friendly team 24/7 and get an answer in less than 5 minutes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                >
                  {services.map((service, index) => (
                    <option key={index} value={service.value}>{service.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Leave us a message..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-black/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
