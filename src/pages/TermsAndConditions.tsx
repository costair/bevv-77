
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Beer, Coffee, Pizza, IceCream, Sandwich, Wine, Cherry, Cake, Carrot, Croissant, ChevronUp, ChevronDown } from "lucide-react";
import { useState } from "react";

const TermsAndConditions = () => {
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
          Welcome to Bevv Studio. By accessing our website and using our services, you agree to these terms and conditions. Please read them carefully.
        </p>
      )
    },
    {
      id: "services",
      title: "1. Services Agreement",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            Bevv Studio provides branding, packaging design, marketing, and consulting services for the food and beverage industry. Our services are subject to these terms and conditions and any additional agreements made in writing.
          </p>
          <p>
            By engaging our services, you acknowledge that project timelines, deliverables, and costs will be specified in a separate project proposal or statement of work.
          </p>
        </div>
      )
    },
    {
      id: "intellectual-property",
      title: "2. Intellectual Property Rights",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            All intellectual property rights for designs, concepts, and materials created by Bevv Studio remain our property until full payment is received and ownership transfer is explicitly stated in writing.
          </p>
          <p>
            Upon project completion and full payment, specified deliverables and their associated rights will be transferred to the client as detailed in the project agreement.
          </p>
        </div>
      )
    },
    {
      id: "payment",
      title: "3. Payment Terms",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            Our payment terms typically require a 50% deposit to commence work, with the remaining balance due upon project completion. Specific payment schedules will be outlined in your project proposal.
          </p>
          <p>
            Late payments may result in project delays and additional fees. We reserve the right to suspend services until outstanding payments are resolved.
          </p>
        </div>
      )
    },
    {
      id: "confidentiality",
      title: "4. Confidentiality",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            We maintain strict confidentiality regarding all client information and project details. Non-disclosure agreements can be provided upon request.
          </p>
          <p>
            Portfolio rights: Unless otherwise specified, we reserve the right to include completed work in our portfolio and promotional materials.
          </p>
        </div>
      )
    },
    {
      id: "changes",
      title: "5. Project Changes & Revisions",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            Our project quotes include a specified number of revision rounds. Additional revisions or scope changes may incur extra charges at our standard rates.
          </p>
          <p>
            Significant changes to project scope or requirements may require a revised quote and timeline.
          </p>
        </div>
      )
    },
    {
      id: "liability",
      title: "6. Limitation of Liability",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            While we strive for excellence in all our work, we cannot guarantee specific business results or outcomes from our services.
          </p>
          <p>
            Our liability is limited to the amount paid for our services, and we are not responsible for indirect or consequential damages.
          </p>
        </div>
      )
    },
    {
      id: "updates",
      title: "7. Updates to Terms",
      content: (
        <div className="space-y-4 text-gray-600">
          <p>
            We reserve the right to update these terms and conditions at any time. Continued use of our services following any changes constitutes acceptance of the updated terms.
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
      <div className="bg-white py-10 mt-[70px]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 uppercase tracking-wide mb-3 text-sm font-medium">BEVV STUDIO LEGAL</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black">Terms and Conditions</h1>
        </div>
      </div>

      {/* Content Section - reduced top padding */}
      <div className="container mx-auto px-4 pt-0 pb-12 relative">
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

        <div className="max-w-4xl mx-auto space-y-0 relative">
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

export default TermsAndConditions;
