
import React from "react";

interface HeroBackgroundProps {
  imageUrl: string;
  opacity?: number;
}

const HeroBackground: React.FC<HeroBackgroundProps> = ({ imageUrl, opacity = 0.85 }) => {
  return (
    <div 
      className="absolute inset-0 z-0" 
      style={{ 
        backgroundImage: `url('${imageUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        opacity: opacity,
      }}
    >
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
  );
};

export default HeroBackground;
