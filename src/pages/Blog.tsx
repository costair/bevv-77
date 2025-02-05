import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

  const latestPosts = [
    {
      title: "The Art of Craft Beer: From Grain to Glass",
      category: "BEVERAGES",
      description: "Discover the meticulous process of craft beer brewing, from selecting premium ingredients to the final pour. Learn about traditional techniques and modern innovations that create exceptional brews.",
      image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
      publishDate: "April 15, 2024"
    },
    {
      title: "Mastering Social Media Marketing for F&B Brands",
      category: "MARKETING",
      description: "Learn effective strategies to build your F&B brand presence on social media. From content planning to engagement tactics, discover how to connect with your audience authentically.",
      image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
      publishDate: "April 14, 2024"
    },
    {
      title: "Essential F&B Photography Tips",
      category: "TIPS",
      description: "Master the art of food and beverage photography with our expert guide to lighting, composition, and styling techniques.",
      image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
      publishDate: "April 12, 2024"
    },
    {
      title: "Sustainable Practices in F&B",
      category: "SUSTAINABILITY",
      description: "Explore eco-friendly initiatives and sustainable practices that are reshaping the future of the food and beverage industry.",
      image: "/lovable-uploads/f4f1d62c-748a-40d7-9b47-3fecd545756f.png",
      publishDate: "April 10, 2024"
    }
  ];

  const regularPosts = [
    {
      title: "Rising Trends in Functional Beverages",
      category: "TRENDS",
      description: "Exploring the growing market of health-focused functional drinks.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 7, 2024"
    },
    {
      title: "Plant-Based Alternatives in the Beverage Industry",
      category: "INNOVATION",
      description: "How plant-based alternatives are reshaping beverage choices.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 5, 2024"
    },
    {
      title: "Global Coffee Market Analysis 2024",
      category: "INDUSTRY NEWS",
      description: "Latest insights into the global coffee industry and market trends.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 3, 2024"
    },
    {
      title: "Signature Cocktail Creation Guide",
      category: "RECIPES",
      description: "Step-by-step guide to creating unique signature cocktails.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 1, 2024"
    },
    {
      title: "Success Story: Local Brewery Expansion",
      category: "CASE STUDY",
      description: "How a local brewery scaled their operations successfully.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 30, 2024"
    },
    {
      title: "Zero-Waste Beverage Production",
      category: "SUSTAINABILITY",
      description: "Implementing zero-waste practices in beverage manufacturing.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 28, 2024"
    },
    {
      title: "Artisanal Tea Blending Techniques",
      category: "RECIPES",
      description: "Master the art of creating unique tea blends.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 26, 2024"
    },
    {
      title: "Digital Marketing in the Beverage Industry",
      category: "TRENDS",
      description: "Effective digital marketing strategies for beverage brands.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 24, 2024"
    },
    {
      title: "New Regulations in Beverage Labeling",
      category: "INDUSTRY NEWS",
      description: "Understanding the latest beverage labeling requirements.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 22, 2024"
    },
    {
      title: "Smart Packaging Solutions",
      category: "INNOVATION",
      description: "Innovative packaging solutions in the beverage industry.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 20, 2024"
    },
    {
      title: "Seasonal Beverage Menu Planning",
      category: "FOOD",
      description: "Creating successful seasonal beverage menus.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 18, 2024"
    },
    {
      title: "Beverage Brand Expansion Case Study",
      category: "CASE STUDY",
      description: "Analysis of a successful beverage brand expansion.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 16, 2024"
    },
    {
      title: "Cold Brew Coffee Innovations",
      category: "BEVERAGES",
      description: "Latest trends and techniques in cold brew coffee.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 14, 2024"
    },
    {
      title: "Eco-Friendly Packaging Solutions",
      category: "SUSTAINABILITY",
      description: "Sustainable packaging options for beverages.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 12, 2024"
    },
    {
      title: "Beverage Industry Market Report",
      category: "INDUSTRY NEWS",
      description: "Comprehensive analysis of the beverage market.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 10, 2024"
    },
    {
      title: "Homemade Soda Recipes",
      category: "RECIPES",
      description: "Create your own artisanal sodas at home.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 8, 2024"
    },
    {
      title: "AI in Beverage Production",
      category: "INNOVATION",
      description: "How AI is transforming beverage manufacturing.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 6, 2024"
    },
    {
      title: "Premium Mixer Trends",
      category: "TRENDS",
      description: "The rising demand for premium cocktail mixers.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 4, 2024"
    },
    {
      title: "Beverage Photography Guide",
      category: "FOOD",
      description: "Professional tips for beverage photography.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 2, 2024"
    },
    {
      title: "Future of Sustainable Beverages",
      category: "SUSTAINABILITY",
      description: "Exploring upcoming trends in sustainable beverage production.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 1, 2024"
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

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    const lastSpace = text.substring(0, maxLength).lastIndexOf(' ');
    return text.substring(0, lastSpace) + '...';
  };

  const filteredPosts = regularPosts.filter(
    post => selectedCategory === "ALL TOPICS" || post.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-12">
        {/* Latest Section with new separator */}
        <div className="mb-16">
          <div className="flex flex-col items-center justify-center mb-8">
            <h1 className="text-4xl font-bold text-center mb-4">Latest F&B Articles</h1>
            <div className="w-full max-w-[200px] flex items-center justify-center">
              <Separator className="h-1 bg-black rounded-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Two Featured Posts */}
            {latestPosts.slice(0, 2).map((post, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3 p-6">
                  <div className="text-sm font-medium text-gray-600">
                    {post.publishDate}
                  </div>
                  <CardTitle className="text-2xl group-hover:text-gray-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base line-clamp-2">
                    {truncateText(post.description, 120)}
                  </CardDescription>
                  <span
                    className={`${getTagColor(post.category)} text-white px-4 py-1 rounded-full text-sm inline-block w-fit`}
                  >
                    {post.category}
                  </span>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Two Smaller Posts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {latestPosts.slice(2).map((post, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer">
                <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="py-4 pr-4">
                    <div className="text-sm font-medium text-gray-600 mb-2">
                      {post.publishDate}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-gray-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                      {truncateText(post.description, 80)}
                    </p>
                    <span
                      className={`${getTagColor(post.category)} text-white px-3 py-1 rounded-full text-xs inline-block`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="overflow-x-auto my-12">
          <nav className="flex justify-center space-x-8 border-b border-gray-200 pb-4">
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

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="text-sm font-medium text-gray-600">
                  {post.publishDate}
                </div>
                <CardTitle className="text-lg min-h-[56px] group-hover:text-gray-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-base min-h-[48px] line-clamp-2">
                  {truncateText(post.description, 120)}
                </CardDescription>
                <span
                  className={`${getTagColor(post.category)} text-white px-4 py-1 rounded-full text-sm inline-block w-fit`}
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