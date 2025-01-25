import { Beer, Coffee, Pizza, Sandwich, CakeSlice, Wine } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white relative overflow-hidden">
      {/* Decorative Icons */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Beer className="w-24 h-24 text-white opacity-10 mb-8 transform -rotate-12" />
        <Pizza className="w-24 h-24 text-white opacity-10 transform rotate-12" />
      </div>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:block animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <Coffee className="w-24 h-24 text-white opacity-10 mb-8 transform rotate-12" />
        <Wine className="w-24 h-24 text-white opacity-10 transform -rotate-12" />
      </div>
      <div className="absolute left-1/4 top-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <Sandwich className="w-20 h-20 text-white opacity-10 transform rotate-45" />
      </div>
      <div className="absolute right-1/4 bottom-1/4 hidden lg:block animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <CakeSlice className="w-20 h-20 text-white opacity-10 transform -rotate-45" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-white text-black rounded-full">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-gray-400">
              Ready to elevate your food & beverage brand? We'd love to hear from you.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
            ></textarea>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;