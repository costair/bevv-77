
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalAccordion from "@/components/legal/LegalAccordion";
import { faqSections } from "@/data/faqSections";

const FAQ = () => {
  return (
    <LegalPageLayout title="Frequently Asked Questions" subTitle="FAQ">
      <LegalAccordion sections={faqSections} />
    </LegalPageLayout>
  );
};

export default FAQ;
