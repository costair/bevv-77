import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Search, Link2, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Blog = () => {
  const categories = [
    "ALL",
    "BEVERAGES",
    "FOOD",
    "CASE STUDY",
    "SUSTAINABILITY",
    "INNOVATION",
    "TRENDS",
    "INDUSTRY NEWS",
    "RECIPES"
  ];

  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArticle, setSelectedArticle] = useState<null | {
    title: string;
    category: string;
    description: string;
    image: string;
    publishDate: string;
    content?: string;
    readTime?: string;
  }>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const navigate = useNavigate();

  useEffect(() => {
    setCopied(false);
  }, [selectedArticle]);

  const latestPosts = [
    {
      title: "The Art of Craft Beer: From Grain to Glass",
      category: "BEVERAGES",
      description: "Discover the meticulous process of craft beer brewing, from selecting premium ingredients to the final pour. Learn about traditional techniques and modern innovations that create exceptional brews.",
      image: "/lovable-uploads/49a6017a-a56b-49b0-b214-852f106c03c6.png",
      publishDate: "April 15, 2024",
      readTime: "8 min read",
      content: "The craft beer brewing process begins with carefully selecting the highest quality grains, hops, yeast, and water. Each ingredient plays a crucial role in defining the beer's flavor profile, aroma, and character. Master brewers understand how to balance these elements to create distinctive beverages that delight the senses. From traditional ales to experimental IPAs, the art of brewing continues to evolve while respecting time-honored techniques.\n\nCraft brewers focus on small-batch production, allowing for greater attention to detail and quality control throughout the process. This artisanal approach creates beverages with depth and complexity that mass-produced options often lack. Many craft breweries also embrace sustainable practices, sourcing local ingredients and implementing eco-friendly production methods.\n\nThe final step in the journey from grain to glass is proper serving and appreciation. Temperature, glassware, and pouring technique all affect how a beer presents itself to the drinker. Understanding these nuances enhances the overall experience and allows consumers to fully appreciate the craftsmanship behind each unique brew."
    },
    {
      title: "Mastering Social Media Marketing for F&B Brands",
      category: "INDUSTRY NEWS",
      description: "Learn effective strategies to build your F&B brand presence on social media. From content planning to engagement tactics, discover how to connect with your audience authentically.",
      image: "/lovable-uploads/3d337ad1-465b-44a4-b74b-6052d0bdc727.png",
      publishDate: "April 14, 2024",
      readTime: "6 min read",
      content: "Successful food and beverage brands recognize that social media is not just about posting beautiful product photos—it's about creating a comprehensive strategy that builds community and drives engagement. Begin by identifying your target audience and the platforms they frequent most. Each social network has different strengths: Instagram and Pinterest excel for visual content, while Twitter offers real-time engagement and Facebook provides versatile options for different content types.\n\nContent planning is essential for maintaining a consistent presence. Create a content calendar that balances promotional posts with value-adding content that educates, entertains, or inspires your audience. Behind-the-scenes glimpses of your production process, employee spotlights, and origin stories all help humanize your brand and build authentic connections.\n\nEngagement shouldn't be an afterthought—it should be central to your social media approach. Respond promptly to comments and messages, ask questions to spark conversation, and create opportunities for user-generated content through contests or branded hashtags. When customers feel heard and appreciated, they're more likely to become brand advocates who share your content with their networks."
    },
    {
      title: "Essential F&B Photography Tips",
      category: "FOOD",
      description: "Master the art of food and beverage photography with our expert guide to lighting, composition, and styling techniques.",
      image: "/lovable-uploads/9a683ae9-10a4-46c9-bb18-463f038b29c0.png",
      publishDate: "April 12, 2024",
      readTime: "7 min read",
      content: "Exceptional food and beverage photography begins with understanding light. Natural light typically produces the most appetizing results, so position your subject near a window with diffused sunlight. Avoid direct sunlight, which creates harsh shadows, and consider using a white foam board to bounce light and fill shadows gently. For beverages, backlighting can create appealing highlights that showcase transparency and color.\n\nComposition dramatically impacts how viewers perceive your products. The rule of thirds remains a useful guideline, but don't be afraid to experiment with different angles. Overhead shots work well for table spreads, while 45-degree angles highlight texture and dimension in both food and drinks. For beverages, straight-on shots can emphasize height and layers.\n\nThoughtful styling elevates ordinary products to visually compelling subjects. Fresh garnishes, condensation on glassware, and carefully selected props create context and tell a story about the beverage experience. Consider color theory when selecting backgrounds and props—complementary colors create vibrant contrast, while analogous colors produce a harmonious, cohesive look."
    },
    {
      title: "Sustainable Practices in F&B",
      category: "SUSTAINABILITY",
      description: "Explore eco-friendly initiatives and sustainable practices that are reshaping the future of the food and beverage industry.",
      image: "/lovable-uploads/49a6017a-a56b-49b0-b214-852f106c03c6.png",
      publishDate: "April 10, 2024",
      readTime: "9 min read",
      content: "The food and beverage industry is increasingly embracing sustainability as both an ethical imperative and a business advantage. Forward-thinking companies are implementing comprehensive waste reduction strategies, from composting organic materials to redesigning packaging to minimize environmental impact. Many are adopting circular economy principles, finding innovative ways to repurpose byproducts that would traditionally be discarded.\n\nSourcing practices represent another critical area for sustainability improvements. Businesses are shortening supply chains by partnering with local producers, reducing transportation emissions while supporting regional economies. Ethical sourcing extends beyond environmental concerns to include fair labor practices and community development initiatives throughout the supply network.\n\nWater and energy conservation measures are becoming standard in modern F&B operations. Advanced filtration systems allow for water recycling, while energy-efficient equipment and renewable power sources significantly reduce carbon footprints. Some companies are going further by investing in carbon offset programs or implementing carbon-neutral production processes that represent the future of responsible manufacturing."
    }
  ];

  const regularPosts = [
    {
      title: "Rising Trends in Functional Beverages",
      category: "TRENDS",
      description: "Exploring the growing market of health-focused functional drinks.",
      image: "/lovable-uploads/3d337ad1-465b-44a4-b74b-6052d0bdc727.png",
      publishDate: "April 7, 2024",
      readTime: "5 min read"
    },
    {
      title: "Plant-Based Alternatives in the Beverage Industry",
      category: "INNOVATION",
      description: "How plant-based alternatives are reshaping beverage choices.",
      image: "/lovable-uploads/9a683ae9-10a4-46c9-bb18-463f038b29c0.png",
      publishDate: "April 5, 2024",
      readTime: "4 min read"
    },
    {
      title: "Global Coffee Market Analysis 2024",
      category: "INDUSTRY NEWS",
      description: "Latest insights into the global coffee industry and market trends.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 3, 2024",
      readTime: "3 min read"
    },
    {
      title: "Signature Cocktail Creation Guide",
      category: "RECIPES",
      description: "Step-by-step guide to creating unique signature cocktails.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "April 1, 2024",
      readTime: "2 min read"
    },
    {
      title: "Success Story: Local Brewery Expansion",
      category: "CASE STUDY",
      description: "How a local brewery scaled their operations successfully.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 30, 2024",
      readTime: "1 min read"
    },
    {
      title: "Zero-Waste Beverage Production",
      category: "SUSTAINABILITY",
      description: "Implementing zero-waste practices in beverage manufacturing.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 28, 2024",
      readTime: "1 min read"
    },
    {
      title: "Artisanal Tea Blending Techniques",
      category: "RECIPES",
      description: "Master the art of creating unique tea blends.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 26, 2024",
      readTime: "1 min read"
    },
    {
      title: "Digital Marketing in the Beverage Industry",
      category: "TRENDS",
      description: "Effective digital marketing strategies for beverage brands.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 24, 2024",
      readTime: "1 min read"
    },
    {
      title: "New Regulations in Beverage Labeling",
      category: "INDUSTRY NEWS",
      description: "Understanding the latest beverage labeling requirements.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 22, 2024",
      readTime: "1 min read"
    },
    {
      title: "Smart Packaging Solutions",
      category: "INNOVATION",
      description: "Innovative packaging solutions in the beverage industry.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 20, 2024",
      readTime: "1 min read"
    },
    {
      title: "Seasonal Beverage Menu Planning",
      category: "FOOD",
      description: "Creating successful seasonal beverage menus.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 18, 2024",
      readTime: "1 min read"
    },
    {
      title: "Beverage Brand Expansion Case Study",
      category: "CASE STUDY",
      description: "Analysis of a successful beverage brand expansion.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 16, 2024",
      readTime: "1 min read"
    },
    {
      title: "Cold Brew Coffee Innovations",
      category: "BEVERAGES",
      description: "Latest trends and techniques in cold brew coffee.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 14, 2024",
      readTime: "1 min read"
    },
    {
      title: "Eco-Friendly Packaging Solutions",
      category: "SUSTAINABILITY",
      description: "Sustainable packaging options for beverages.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 12, 2024",
      readTime: "1 min read"
    },
    {
      title: "Beverage Industry Market Report",
      category: "INDUSTRY NEWS",
      description: "Comprehensive analysis of the beverage market.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 10, 2024",
      readTime: "1 min read"
    },
    {
      title: "Homemade Soda Recipes",
      category: "RECIPES",
      description: "Create your own artisanal sodas at home.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 8, 2024",
      readTime: "1 min read"
    },
    {
      title: "AI in Beverage Production",
      category: "INNOVATION",
      description: "How AI is transforming beverage manufacturing.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 6, 2024",
      readTime: "1 min read"
    },
    {
      title: "Premium Mixer Trends",
      category: "TRENDS",
      description: "The rising demand for premium cocktail mixers.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 4, 2024",
      readTime: "1 min read"
    },
    {
      title: "Beverage Photography Guide",
      category: "FOOD",
      description: "Professional tips for beverage photography.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 2, 2024",
      readTime: "1 min read"
    },
    {
      title: "Future of Sustainable Beverages",
      category: "SUSTAINABILITY",
      description: "Exploring upcoming trends in sustainable beverage production.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      publishDate: "March 1, 2024",
      readTime: "1 min read"
    }
  ];

  const updatedRegularPosts = regularPosts.map((post, index) => {
    const imageIndex = index % 3;
    const images = [
      "/lovable-uploads/49a6017a-a56b-49b0-b214-852f106c03c6.png",
      "/lovable-uploads/3d337ad1-465b-44a4-b74b-6052d0bdc727.png",
      "/lovable-uploads/9a683ae9-10a4-46c9-bb18-463f038b29c0.png"
    ];
    return {
      ...post,
      image: images[imageIndex],
      readTime: `${Math.floor(Math.random() * 6) + 3} min read`
    };
  });

  const getTagColor = (category: string) => {
    return "bg-black text-white";
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    const lastSpace = text.substring(0, maxLength).lastIndexOf(' ');
    return text.substring(0, lastSpace) + '...';
  };

  const filteredPosts = updatedRegularPosts.filter(
    post => {
      return selectedCategory === "ALL" || post.category === selectedCategory;
    }
  );

  const allPosts = [...latestPosts, ...updatedRegularPosts];

  const searchFilteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === "ALL" || post.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const organizeIndustryNewsPosts = () => {
    if (selectedCategory === "INDUSTRY NEWS") {
      const industryNewsPosts = searchFilteredPosts.filter(post => post.category === "INDUSTRY NEWS");
      const chunks = [];
      for (let i = 0; i < industryNewsPosts.length; i += 3) {
        chunks.push(industryNewsPosts.slice(i, i + 3));
      }
      
      return chunks.flat();
    }
    
    return searchFilteredPosts;
  };

  const organizedPosts = organizeIndustryNewsPosts();

  const handleArticleClick = (article: any) => {
    setSelectedArticle(article);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedArticle(null);
    window.scrollTo(0, 0);
  };

  const getRelatedArticles = () => {
    if (!selectedArticle) return [];
    
    return allPosts
      .filter(post => post.title !== selectedArticle.title && post.category === selectedArticle.category)
      .slice(0, 3);
  };

  const copyToClipboard = () => {
    if (selectedArticle) {
      const url = window.location.href;
      navigator.clipboard.writeText(url)
        .then(() => {
          setCopied(true);
          toast({
            title: "Link copied!",
            description: "The article link has been copied to your clipboard."
          });
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
          toast({
            title: "Copy failed",
            description: "Could not copy the link. Please try again.",
            variant: "destructive"
          });
        });
    }
  };

  if (selectedArticle) {
    const relatedArticles = getRelatedArticles();
    
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 pt-24 pb-8">
          <div className="flex items-center text-sm text-gray-600 mb-8">
            <button onClick={() => navigate("/")} className="hover:text-gray-900">Home</button>
            <span className="mx-2">/</span>
            <button onClick={handleBackToList} className="hover:text-gray-900">Blog</button>
            <span className="mx-2">/</span>
            <span className="text-gray-900 truncate max-w-[200px]">{selectedArticle.title}</span>
          </div>
          
          {/* Hero Image */}
          <div className="w-full h-[40vh] md:h-[50vh] relative mb-12">
            <img 
              src={selectedArticle.image} 
              alt={selectedArticle.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Article Title & Meta */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">{selectedArticle.title}</h1>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <span>{selectedArticle.publishDate}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
              <span>•</span>
              <span className={`${getTagColor(selectedArticle.category)} px-3 py-1 rounded-full text-xs`}>
                {selectedArticle.category}
              </span>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg leading-relaxed mb-6">{selectedArticle.description}</p>
            
            {selectedArticle.content && (
              <div className="prose max-w-none">
                {selectedArticle.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 text-gray-800 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            )}
            
            {/* Conclusion */}
            <div className="mt-12 p-8 bg-gray-50 rounded-lg text-center">
              <p className="text-gray-800 italic">
                Remember, food and beverage innovation requires continuous learning and adaptation. 
                Stay curious, be willing to experiment, and focus on creating exceptional experiences for your customers!
              </p>
            </div>
            
            {/* Share & Navigation */}
            <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-200">
              <div className="flex gap-4 mb-4 sm:mb-0">
                <Button 
                  variant={copied ? "default" : "outline"} 
                  className={`flex items-center gap-2 transition-all duration-300 ${copied ? 'bg-green-500 hover:bg-green-600 border-green-500' : ''}`}
                  onClick={copyToClipboard}
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Link2 className="h-4 w-4" />
                      Copy Link
                    </>
                  )}
                </Button>
              </div>
              <Button onClick={handleBackToList} variant="outline" className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                Back to Blog
              </Button>
            </div>
          </div>
          
          {/* Related Articles */}
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-center mb-10">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((article, index) => (
                <Card key={index} className="overflow-hidden group cursor-pointer" onClick={() => handleArticleClick(article)}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className={`${getTagColor(article.category)} px-3 py-1 rounded-full text-xs`}>
                        {article.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg group-hover:text-gray-600 transition-colors line-clamp-2">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-sm line-clamp-2">
                      {truncateText(article.description, 100)}
                    </CardDescription>
                    <div className="text-xs text-gray-500 mt-2">
                      {article.publishDate} • {article.readTime}
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4">
          <Separator className="h-[2px] bg-gray-200" />
        </div>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Title and Search */}
      <div className="container mx-auto px-4 pt-24 pb-8 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <button onClick={() => navigate("/")} className="text-sm text-gray-600 hover:text-gray-900">Home</button>
          <span className="text-gray-600">/</span>
          <span className="text-sm text-gray-900">Blog</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-3">
          Our Latest <span className="text-black">Insights</span>
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mb-8">
          Expert food and beverage guides, industry trends, and articles to help you improve your
          business and stay updated with the latest innovations.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-8 relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full h-14 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {/* Categories */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`
                  text-sm font-medium rounded-full px-5 py-2 transition-colors
                  ${selectedCategory === category 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        {/* Featured Posts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {latestPosts
            .filter(post => selectedCategory === "ALL" || post.category === selectedCategory)
            .slice(0, 3)
            .map((post, index) => (
              <Card 
                key={index} 
                className="overflow-hidden group cursor-pointer" 
                onClick={() => handleArticleClick(post)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`${getTagColor(post.category)} px-3 py-1 rounded-full text-xs`}>
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-gray-600 transition-colors line-clamp-2">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {truncateText(post.description, 100)}
                  </CardDescription>
                  <div className="text-xs text-gray-500 mt-2">
                    {post.publishDate} • {post.readTime}
                  </div>
                </CardHeader>
              </Card>
            ))}
        </div>

        {/* Regular Posts Grid - Fixed layout for better organization */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {organizedPosts.map((post, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group cursor-pointer"
              onClick={() => handleArticleClick({...post, content: "This is placeholder content for this article. In a real implementation, each article would have its own detailed content."})}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className={`${getTagColor(post.category)} px-3 py-1 rounded-full text-xs`}>
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-gray-600 transition-colors line-clamp-2">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {truncateText(post.description, 120)}
                </CardDescription>
                <div className="text-xs text-gray-500 mt-2">
                  {post.publishDate} • {post.readTime}
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Separator before footer */}
      <div className="container mx-auto px-4">
        <Separator className="h-[2px] bg-gray-200" />
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
