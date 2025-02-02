import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Art of Craft Beer: From Grain to Glass",
      date: "March 15, 2024",
      description: "Discover the intricate process behind craft beer brewing and what makes each brew unique.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      tags: ["Beverages", "Craft Beer", "Brewing"]
    },
    {
      title: "Sustainable Practices in Modern Beverage Production",
      date: "March 10, 2024",
      description: "How beverage companies are adopting eco-friendly practices while maintaining quality.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      tags: ["Sustainability", "Production", "Industry"]
    },
    {
      title: "Food Photography: Capturing the Perfect Pour",
      date: "March 5, 2024",
      description: "Expert tips for photographing beverages and creating stunning visual content.",
      image: "/lovable-uploads/2b12d53a-7131-4dad-9ac9-45690a517e22.png",
      tags: ["Photography", "Marketing", "Tips"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Inside Design: Stories and Interviews</h1>
            <p className="text-lg text-muted-foreground">
              Subscribe to learn about new product features, the latest in technology, and updates.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-full sm:w-auto"
              />
              <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-black/90 transition-colors w-full sm:w-auto">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-8">Recent blog posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <time>{post.date}</time>
                  </div>
                  <CardTitle className="text-xl">{post.title}</CardTitle>
                  <CardDescription>{post.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;