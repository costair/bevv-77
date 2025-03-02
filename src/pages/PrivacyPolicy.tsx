import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Beer, Coffee, Pizza, IceCream, Sandwich, Wine, Cherry, Cake, Carrot, Croissant, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const PrivacyPolicy = () => {
  type Section = {
    id: string;
    title: string;
    content: React.ReactNode;
  };

  const sections: Section[] = [
    {
      id: "intro",
      title: "Introduction",
      content: (
        <p className="text-gray-600">
          At Bevv Studio, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
        </p>
      )
    },
    {
      id: "information-we-collect",
      title: "1. Information We Collect",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            <strong>Personal Information:</strong> When you contact us, subscribe to our newsletter, or engage our services, we may collect personal information such as your name, email address, phone number, and company details.
          </p>
          <p>
            <strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on our site.
          </p>
        </div>
      )
    },
    {
      id: "how-we-use",
      title: "2. How We Use Your Information",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Providing and improving our services</li>
            <li>Communicating with you about your projects</li>
            <li>Sending you marketing communications (with your consent)</li>
            <li>Analyzing website usage and trends</li>
            <li>Complying with legal obligations</li>
          </ul>
        </div>
      )
    },
    {
      id: "information-sharing",
      title: "3. Information Sharing and Disclosure",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>With service providers who help us operate our business</li>
            <li>To comply with legal obligations</li>
            <li>With your consent or at your direction</li>
            <li>In connection with a business transfer or merger</li>
          </ul>
        </div>
      )
    },
    {
      id: "cookies",
      title: "4. Cookies and Tracking Technologies",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools.
          </p>
          <p>
            These technologies help us analyze website traffic, personalize content, and understand how our website is being used.
          </p>
        </div>
      )
    },
    {
      id: "data-security",
      title: "5. Data Security",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
          </p>
          <p>
            While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
          </p>
        </div>
      )
    },
    {
      id: "your-rights",
      title: "6. Your Privacy Rights",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Accessing and receiving a copy of your data</li>
            <li>Correcting inaccurate information</li>
            <li>Requesting deletion of your data</li>
            <li>Objecting to or restricting certain processing activities</li>
            <li>Data portability</li>
            <li>Withdrawing consent</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the information provided below.
          </p>
        </div>
      )
    },
    {
      id: "childrens-privacy",
      title: "7. Children's Privacy",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
          </p>
        </div>
      )
    },
    {
      id: "changes",
      title: "8. Changes to This Privacy Policy",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last revised" date and the updated version will be effective as soon as it is accessible.
          </p>
        </div>
      )
    },
    {
      id: "contact",
      title: "9. Contact Us",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> privacy@bevvstudio.com<br />
            <strong>Address:</strong> 123 Design Avenue, Creative District, CA 90210
          </p>
        </div>
      )
    }
  ];

  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with title styling */}
      <div className="bg-white py-20 mt-[70px]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 uppercase tracking-wide mb-3 text-sm font-medium">BEVV STUDIO LEGAL</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black">Privacy Policy</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 relative">
        {/* Decorative Icons Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.035]">
          <div className="absolute top-10 left-10">
            <Beer className="w-16 h-16 text-[#F97316]" />
          </div>
          <div className="absolute top-40 right-20">
            <Coffee className="w-20 h-20 text-[#8B5CF6]" />
          </div>
          <div className="absolute top-80 left-20">
            <Pizza className="w-24 h-24 text-[#D946EF]" />
          </div>
          <div className="absolute top-[400px] right-10">
            <IceCream className="w-16 h-16 text-[#0EA5E9]" />
          </div>
          <div className="absolute top-[600px] left-40">
            <Sandwich className="w-20 h-20 text-[#F97316]" />
          </div>
          <div className="absolute top-[800px] right-30">
            <Wine className="w-16 h-16 text-[#8B5CF6]" />
          </div>
          <div className="absolute top-[1000px] left-10">
            <Cherry className="w-14 h-14 text-[#D946EF]" />
          </div>
          <div className="absolute top-[1200px] right-40">
            <Cake className="w-20 h-20 text-[#0EA5E9]" />
          </div>
          <div className="absolute top-[1400px] left-30">
            <Carrot className="w-16 h-16 text-[#F97316]" />
          </div>
          <div className="absolute top-[1600px] right-20">
            <Croissant className="w-18 h-18 text-[#8B5CF6]" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 relative">
          {/* FAQ style sections with accordions */}
          <div className="border-t border-b-0 border-gray-200">
            {sections.map((section) => (
              <div key={section.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none"
                >
                  <h2 className="text-xl font-semibold text-black">{section.title}</h2>
                  {openSection === section.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openSection === section.id && (
                  <div className="px-4 pb-5">
                    {section.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Separator antes del footer */}
      <div className="container mx-auto px-4">
        <Separator className="h-[2px] bg-gray-200" />
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
