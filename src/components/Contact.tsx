import { Beer, Coffee, Pizza, Sandwich, CakeSlice, Wine } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await supabase.functions.invoke('send-contact', {
        body: formData
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
        name: "",
        email: "",
        subject: "",
        message: "",
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 block animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Beer className="w-16 md:w-24 h-16 md:h-24 text-white opacity-10 mb-8 transform -rotate-12" />
        <Pizza className="w-16 md:w-24 h-16 md:h-24 text-white opacity-10 transform rotate-12" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 block animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Coffee className="w-16 md:w-24 h-16 md:h-24 text-white opacity-10 mb-8 transform rotate-12" />
        <Wine className="w-16 md:w-24 h-16 md:h-24 text-white opacity-10 transform -rotate-12" />
      </div>
      <div className="absolute left-1/4 top-1/4 block animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Sandwich className="w-12 md:w-20 h-12 md:h-20 text-white opacity-10 transform rotate-45" />
      </div>
      <div className="absolute right-1/4 bottom-1/4 block animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <CakeSlice className="w-12 md:w-20 h-12 md:h-20 text-white opacity-10 transform -rotate-45" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="bg-white text-black rounded-full px-6 py-2 text-xs uppercase tracking-wider font-medium">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-3">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-gray-400">
              Ready to elevate your food & beverage brand? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;