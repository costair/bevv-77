
import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export interface LegalAccordionProps {
  question: string;
  answer: ReactNode;
  value: string;
}

const LegalAccordion = ({ question, answer, value }: LegalAccordionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={value}>
        <AccordionTrigger className="text-xl font-semibold hover:no-underline text-left">
          {question}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground prose-sm">
          {answer}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default LegalAccordion;
