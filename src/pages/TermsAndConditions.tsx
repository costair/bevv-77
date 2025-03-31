
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import AccordionSection from "../components/legal/AccordionSection";
import DecorativeIcons from "../components/legal/DecorativeIcons";
import termsAndConditionsSections from "../data/termsAndConditionsSections";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <LegalPageLayout
        title="Términos y Condiciones"
        description="Por favor, lee detenidamente estos términos y condiciones antes de utilizar nuestros servicios. Al utilizar nuestro sitio web o contratar nuestros servicios, aceptas cumplir con estos términos."
        decorativeElement={<DecorativeIcons />}
      >
        <div className="space-y-8">
          {termsAndConditionsSections.map((section, index) => (
            <AccordionSection
              key={index}
              title={section.title}
              content={section.content}
            />
          ))}
        </div>
      </LegalPageLayout>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
