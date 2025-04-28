
import React from "react";

interface WhatsAppIconProps {
  size?: number;
  className?: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ size = 32, className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z" />
      <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z" />
      <path d="M9.5 15a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
    </svg>
  );
};

export default WhatsAppIcon;
