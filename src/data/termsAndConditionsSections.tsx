
import { LegalSection } from "@/types/legal";

export const termsAndConditionsSections: LegalSection[] = [
  {
    id: "intro",
    title: "Introduction",
    content: (
      <p className="text-gray-600">
        Welcome to Bevv Studio. By accessing our website and using our services, you agree to these terms and conditions. Please read them carefully.
      </p>
    )
  },
  {
    id: "services",
    title: "1. Services Agreement",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Bevv Studio provides branding, packaging design, marketing, and consulting services for the food and beverage industry. Our services are subject to these terms and conditions and any additional agreements made in writing.
        </p>
        <p>
          By engaging our services, you acknowledge that project timelines, deliverables, and costs will be specified in a separate project proposal or statement of work.
        </p>
      </div>
    )
  },
  {
    id: "intellectual-property",
    title: "2. Intellectual Property Rights",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          All intellectual property rights for designs, concepts, and materials created by Bevv Studio remain our property until full payment is received and ownership transfer is explicitly stated in writing.
        </p>
        <p>
          Upon project completion and full payment, specified deliverables and their associated rights will be transferred to the client as detailed in the project agreement.
        </p>
      </div>
    )
  },
  {
    id: "payment",
    title: "3. Payment Terms",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Our payment terms typically require a 50% deposit to commence work, with the remaining balance due upon project completion. Specific payment schedules will be outlined in your project proposal.
        </p>
        <p>
          Late payments may result in project delays and additional fees. We reserve the right to suspend services until outstanding payments are resolved.
        </p>
      </div>
    )
  },
  {
    id: "confidentiality",
    title: "4. Confidentiality",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We maintain strict confidentiality regarding all client information and project details. Non-disclosure agreements can be provided upon request.
        </p>
        <p>
          Portfolio rights: Unless otherwise specified, we reserve the right to include completed work in our portfolio and promotional materials.
        </p>
      </div>
    )
  },
  {
    id: "changes",
    title: "5. Project Changes & Revisions",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Our project quotes include a specified number of revision rounds. Additional revisions or scope changes may incur extra charges at our standard rates.
        </p>
        <p>
          Significant changes to project scope or requirements may require a revised quote and timeline.
        </p>
      </div>
    )
  },
  {
    id: "liability",
    title: "6. Limitation of Liability",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          While we strive for excellence in all our work, we cannot guarantee specific business results or outcomes from our services.
        </p>
        <p>
          Our liability is limited to the amount paid for our services, and we are not responsible for indirect or consequential damages.
        </p>
      </div>
    )
  },
  {
    id: "updates",
    title: "7. Updates to Terms",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We reserve the right to update these terms and conditions at any time. Continued use of our services following any changes constitutes acceptance of the updated terms.
        </p>
      </div>
    )
  }
];
