
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Accordion } from "../components/ui/accordion";
import LegalAccordion from "../components/legal/LegalAccordion";
import LegalPageLayout from "../components/legal/LegalPageLayout";
import DecorativeIcons from "../components/legal/DecorativeIcons";
import faqSections from "../data/faqSections";

const FAQ = () => {
  return (
    <div>
      <Navbar />
      <LegalPageLayout title="Preguntas Frecuentes">
        <div className="max-w-3xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios, procesos y cómo podemos ayudarte a hacer crecer tu marca de alimentos y bebidas.
          </p>
          <DecorativeIcons />
          <div className="space-y-8">
            {faqSections.map((section, index) => (
              <div key={index} className="rounded-lg border p-6">
                <h2 className="mb-4 text-xl font-bold">{section.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, itemIndex) => (
                    <LegalAccordion
                      key={`item-${index}-${itemIndex}`}
                      question={item.question}
                      answer={item.answer}
                      value={`item-${index}-${itemIndex}`}
                    />
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </LegalPageLayout>
      <Footer />
    </div>
  );
};

export default FAQ;
