
import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { LegalSection } from "@/types/legal";

type AccordionSectionProps = {
  section: LegalSection;
  isOpen: boolean;
  onToggle: () => void;
};

const AccordionSection = ({ section, isOpen, onToggle }: AccordionSectionProps) => {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full py-5 px-4 flex justify-between items-center text-left focus:outline-none"
      >
        <h2 className="text-xl font-semibold text-black">{section.title}</h2>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-5">
          {section.content}
        </div>
      )}
    </div>
  );
};

export default AccordionSection;
