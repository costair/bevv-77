const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
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