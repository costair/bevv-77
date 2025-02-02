import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const categories = [
    "ALL TOPICS",
    "BEVERAGES",
    "FOOD",
    "CASE STUDY",
    "SUSTAINABILITY",
    "INNOVATION",
    "TRENDS",
    "INDUSTRY NEWS",
    "RECIPES"
  ];

  const blogPosts = [
    {
      title: "The Art of Craft Beer: From Grain to Glass",
      category: "BEVERAGES",
      description: "Discover the intricate process behind craft beer brewing and what makes each brew unique.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      tags: ["Beverages", "Craft Beer", "Brewing"]
    },
    {
      title: "Sustainable Practices in Modern Beverage Production",
      category: "SUSTAINABILITY",
      description: "How beverage companies are adopting eco-friendly practices while maintaining quality.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      tags: ["Sustainability", "Production", "Industry"]
    },
    {
      title: "Food Photography: Capturing the Perfect Pour",
      category: "FOOD",
      description: "Expert tips for photographing beverages and creating stunning visual content.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      tags: ["Photography", "Marketing", "Tips"]
    },
    {
      title: "Latest Innovations in Beverage Packaging",
      category: "INNOVATION",
      description: "Exploring cutting-edge packaging solutions revolutionizing the beverage industry.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      tags: ["Innovation", "Packaging", "Technology"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Categories Navigation */}
        <div className="overflow-x-auto">
          <nav className="flex space-x-8 border-b border-gray-200 pb-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className="text-sm font-medium whitespace-nowrap hover:text-black transition-colors min-w-fit
                          text-gray-600 hover:border-b-2 hover:border-black pb-1"
              >
                {category}
              </button>
            ))}
          </nav>
        </div>

        {/* Latest Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Latest</h1>
            <button className="text-sm font-medium hover:text-gray-600 transition-colors">
              View latest
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Post */}
            <Card className="lg:col-span-8 overflow-hidden group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-2">
                <div className="text-sm font-medium text-gray-600">
                  {blogPosts[0].category}
                </div>
                <CardTitle className="text-2xl group-hover:text-gray-600 transition-colors">
                  {blogPosts[0].title}
                </CardTitle>
                <CardDescription className="text-base">
                  {blogPosts[0].description}
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Side Posts */}
            <div className="lg:col-span-4 space-y-8">
              {blogPosts.slice(1, 3).map((post, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm font-medium text-gray-600 mb-2">
                      {post.category}
                    </div>
                    <CardTitle className="text-lg group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(3).map((post, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="text-sm font-medium text-gray-600 mb-2">
                  {post.category}
                </div>
                <CardTitle className="text-lg group-hover:text-gray-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;