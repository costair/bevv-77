import { ShieldCheck, TrendingUp, MessageSquare, HeartHandshake } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="relative bg-white py-24 overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-3 mb-12">
          <span className="bg-black text-white rounded-full px-6 py-2 text-xs uppercase tracking-wider font-medium">
            Our Culture
          </span>
          <h2 className="text-4xl font-bold text-center">About Us</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-12">
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4 flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="bg-black w-14 h-14 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Quality & Innovation</h3>
                <p className="text-gray-600">
                  We blend traditional culinary expertise with modern innovation to create exceptional F&B experiences.
                </p>
              </div>

              <div className="space-y-4 flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="bg-black w-14 h-14 rounded-lg flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Growth & Development</h3>
                <p className="text-gray-600">
                  Our team constantly explores new flavors and trends to stay ahead in the F&B industry.
                </p>
              </div>

              <div className="space-y-4 flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="bg-black w-14 h-14 rounded-lg flex items-center justify-center">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Open Communication</h3>
                <p className="text-gray-600">
                  We foster transparent dialogue with our clients to ensure their vision comes to life.
                </p>
              </div>

              <div className="space-y-4 flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="bg-black w-14 h-14 rounded-lg flex items-center justify-center">
                  <HeartHandshake className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Client Partnership</h3>
                <p className="text-gray-600">
                  We build lasting relationships with our clients, supporting their F&B journey every step of the way.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png" 
              alt="Team Culture" 
              className="rounded-lg shadow-xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;