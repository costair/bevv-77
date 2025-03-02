
import { Beer, Coffee, Pizza, IceCream, Sandwich, Wine, Cherry, Cake, Carrot, Croissant } from "lucide-react";

const DecorativeIcons = () => {
  return (
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
  );
};

export default DecorativeIcons;
