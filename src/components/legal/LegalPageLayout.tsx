
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";
import DecorativeIcons from "@/components/legal/DecorativeIcons";

type LegalPageLayoutProps = {
  title: string;
  children: ReactNode;
};

const LegalPageLayout = ({ title, children }: LegalPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with title styling */}
      <div className="bg-white py-10 mt-[70px]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 uppercase tracking-wide mb-3 text-sm font-medium">BEVV STUDIO LEGAL</p>
          <h1 className="text-4xl md:text-5xl font-bold text-black">{title}</h1>
        </div>
      </div>

      {/* Content Section - reduced top padding */}
      <div className="container mx-auto px-4 pt-0 pb-12 relative">
        {/* Decorative Icons Background */}
        <DecorativeIcons />

        <div className="max-w-4xl mx-auto space-y-0 relative">
          {children}
        </div>
      </div>

      {/* Separator before the footer */}
      <div className="container mx-auto px-4">
        <Separator className="h-[2px] bg-gray-200" />
      </div>
      
      <Footer />
    </div>
  );
};

export default LegalPageLayout;
