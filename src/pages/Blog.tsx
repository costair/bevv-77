import { useState } from "react";
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

  const [selectedCategory, setSelectedCategory] = useState("ALL TOPICS");

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

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      Beverages: "bg-[#9b87f5]",
      Sustainability: "bg-[#0EA5E9]",
      Photography: "bg-[#D946EF]",
      Innovation: "bg-[#F97316]",
      Marketing: "bg-[#7E69AB]",
      Production: "bg-[#6E59A5]",
      Technology: "bg-[#8B5CF6]",
      Industry: "bg-[#0EA5E9]",
      Tips: "bg-[#F97316]",
      Brewing: "bg-[#D946EF]",
      "Craft Beer": "bg-[#7E69AB]",
      Packaging: "bg-[#6E59A5]",
    };
    return colors[tag] || "bg-gray-500";
  };

  const filteredPosts = blogPosts.filter(
    post => selectedCategory === "ALL TOPICS" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Categories Navigation */}
        <div className="overflow-x-auto">
          <nav className="flex justify-center space-x-8 border-b border-gray-200 pb-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm font-medium whitespace-nowrap hover:text-black transition-colors min-w-fit
                          text-gray-600 hover:border-b-2 hover:border-black pb-1
                          ${selectedCategory === category ? 'bg-[#f3f3f3] px-4 py-2 rounded' : ''}`}
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
            {filteredPosts.length > 0 && (
              <Card className="lg:col-span-8 overflow-hidden group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={filteredPosts[0].image}
                    alt={filteredPosts[0].title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <div className="text-sm font-medium text-gray-600">
                    {filteredPosts[0].category}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-gray-600 transition-colors">
                    {filteredPosts[0].title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {filteredPosts[0].description}
                  </CardDescription>
                  <div className="flex gap-2 flex-wrap">
                    {filteredPosts[0].tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`${getTagColor(tag)} text-white px-3 py-1 rounded-full text-sm`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            )}

            {/* Side Posts */}
            <div className="lg:col-span-4 space-y-8">
              {filteredPosts.slice(1, 3).map((post, index) => (
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
                    <div className="flex gap-2 flex-wrap">
                      {post.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={`${getTagColor(tag)} text-white px-3 py-1 rounded-full text-sm`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.slice(3).map((post, index) => (
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
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`${getTagColor(tag)} text-white px-3 py-1 rounded-full text-sm`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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