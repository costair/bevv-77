
import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export interface AccordionSectionProps {
  title: string;
  content: ReactNode;
}

const AccordionSection = ({ title, content }: AccordionSectionProps) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value={title.toLowerCase().replace(/\s+/g, "-")}>
        <AccordionTrigger className="text-xl font-semibold hover:no-underline">
          {title}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground prose-sm">
          {content}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionSection;
