
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import AccordionSection from "../components/legal/AccordionSection";
import DecorativeIcons from "../components/legal/DecorativeIcons";
import { termsAndConditionsSections } from "../data/termsAndConditionsSections";

const TermsAndConditions = () => {
  return (
    <div>
      <Navbar />
      <LegalPageLayout title="Términos y Condiciones">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground">
            Por favor, lee detenidamente estos términos y condiciones antes de utilizar nuestros servicios. Al utilizar nuestro sitio web o contratar nuestros servicios, aceptas cumplir con estos términos.
          </p>
          <DecorativeIcons />
          <div className="space-y-8">
            {termsAndConditionsSections.map((section, index) => (
              <AccordionSection
                key={index}
                title={section.title}
                content={section.content}
              />
            ))}
          </div>
        </div>
      </LegalPageLayout>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
