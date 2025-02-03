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
      publishDate: "April 15, 2024"
    },
    {
      title: "Sustainable Practices in Modern Beverage Production",
      category: "SUSTAINABILITY",
      description: "How beverage companies are adopting eco-friendly practices while maintaining quality.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 12, 2024"
    },
    {
      title: "Food Photography: Capturing the Perfect Pour",
      category: "FOOD",
      description: "Expert tips for photographing beverages and creating stunning visual content.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 10, 2024"
    },
    {
      title: "Latest Innovations in Beverage Packaging",
      category: "INNOVATION",
      description: "Exploring cutting-edge packaging solutions revolutionizing the beverage industry.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 8, 2024"
    }
  ];

  const getTagColor = (category: string) => {
    const colors: { [key: string]: string } = {
      BEVERAGES: "bg-[#9b87f5]",
      SUSTAINABILITY: "bg-[#0EA5E9]",
      FOOD: "bg-[#D946EF]",
      INNOVATION: "bg-[#F97316]",
      "CASE STUDY": "bg-[#7E69AB]",
      TRENDS: "bg-[#6E59A5]",
      "INDUSTRY NEWS": "bg-[#8B5CF6]",
      RECIPES: "bg-[#0EA5E9]"
    };
    return colors[category] || "bg-gray-500";
  };

  const filteredPosts = blogPosts.filter(
    post => selectedCategory === "ALL TOPICS" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Categories Navigation */}
        <div className="overflow-x-auto mt-8">
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
                    {filteredPosts[0].publishDate}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-gray-600 transition-colors">
                    {filteredPosts[0].title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {filteredPosts[0].description}
                  </CardDescription>
                  <span
                    className={`${getTagColor(filteredPosts[0].category)} text-white px-3 py-1 rounded-full text-sm inline-block`}
                  >
                    {filteredPosts[0].category}
                  </span>
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
                      {post.publishDate}
                    </div>
                    <CardTitle className="text-lg group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </CardTitle>
                    <span
                      className={`${getTagColor(post.category)} text-white px-3 py-1 rounded-full text-sm inline-block`}
                    >
                      {post.category}
                    </span>
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
                  {post.publishDate}
                </div>
                <CardTitle className="text-lg group-hover:text-gray-600 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription>
                  {post.description}
                </CardDescription>
                <span
                  className={`${getTagColor(post.category)} text-white px-3 py-1 rounded-full text-sm inline-block`}
                >
                  {post.category}
                </span>
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