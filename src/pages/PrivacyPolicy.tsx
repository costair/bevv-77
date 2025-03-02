
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalAccordion from "@/components/legal/LegalAccordion";
import { privacyPolicySections } from "@/data/privacyPolicySections";

const PrivacyPolicy = () => {
  return (
    <LegalPageLayout title="Privacy Policy">
      <LegalAccordion sections={privacyPolicySections} />
    </LegalPageLayout>
  );
};

export default PrivacyPolicy;
