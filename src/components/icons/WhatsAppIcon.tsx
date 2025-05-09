
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
      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
      <path d="M16.5 9.4 7.55 4.24" />
      <polyline points="3.29 7 12 12 20.71 7" />
      <line x1="12" y1="22" x2="12" y2="12" />
      <circle cx="18.5" cy="15.5" r="2.5" />
      <path d="M20.27 17.27 22 19" />
    </svg>
  );
};

export default WhatsAppIcon;
