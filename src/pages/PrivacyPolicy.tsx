
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import AccordionSection from "../components/legal/AccordionSection";
import DecorativeIcons from "../components/legal/DecorativeIcons";
import { privacyPolicySections } from "../data/privacyPolicySections";

const PrivacyPolicy = () => {
  return (
    <div>
      <Navbar />
      <LegalPageLayout title="Política de Privacidad">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground">
            En Bevv, valoramos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta política de privacidad te informará sobre cómo tratamos tus datos y tus derechos.
          </p>
          <DecorativeIcons />
          <div className="space-y-8">
            {privacyPolicySections.map((section, index) => (
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

export default PrivacyPolicy;
