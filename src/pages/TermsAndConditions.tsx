
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalAccordion from "@/components/legal/LegalAccordion";
import { termsAndConditionsSections } from "@/data/termsAndConditionsSections";

const TermsAndConditions = () => {
  return (
    <LegalPageLayout title="Terms and Conditions">
      <LegalAccordion sections={termsAndConditionsSections} />
    </LegalPageLayout>
  );
};

export default TermsAndConditions;
