
import { useState } from "react";
import AccordionSection from "./AccordionSection";
import { LegalSection } from "@/types/legal";

type LegalAccordionProps = {
  sections: LegalSection[];
};

const LegalAccordion = ({ sections }: LegalAccordionProps) => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="border-t border-b-0 border-gray-200">
      {sections.map((section) => (
        <AccordionSection
          key={section.id}
          section={section}
          isOpen={openSection === section.id}
          onToggle={() => toggleSection(section.id)}
        />
      ))}
    </div>
  );
};

export default LegalAccordion;
