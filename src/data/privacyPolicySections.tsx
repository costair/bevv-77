
import { LegalSection } from "@/types/legal";

export const privacyPolicySections: LegalSection[] = [
  {
    id: "intro",
    title: "Introduction",
    content: (
      <p className="text-gray-600">
        At Bevv Studio, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
      </p>
    )
  },
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          <strong>Personal Information:</strong> When you contact us, subscribe to our newsletter, or engage our services, we may collect personal information such as your name, email address, phone number, and company details.
        </p>
        <p>
          <strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including your IP address, browser type, pages visited, and time spent on our site.
        </p>
      </div>
    )
  },
  {
    id: "how-we-use",
    title: "2. How We Use Your Information",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Providing and improving our services</li>
          <li>Communicating with you about your projects</li>
          <li>Sending you marketing communications (with your consent)</li>
          <li>Analyzing website usage and trends</li>
          <li>Complying with legal obligations</li>
        </ul>
      </div>
    )
  },
  {
    id: "information-sharing",
    title: "3. Information Sharing and Disclosure",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>With service providers who help us operate our business</li>
          <li>To comply with legal obligations</li>
          <li>With your consent or at your direction</li>
          <li>In connection with a business transfer or merger</li>
        </ul>
      </div>
    )
  },
  {
    id: "cookies",
    title: "4. Cookies and Tracking Technologies",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We use cookies and similar tracking technologies to collect information about your browsing activities. You can control cookies through your browser settings and other tools.
        </p>
        <p>
          These technologies help us analyze website traffic, personalize content, and understand how our website is being used.
        </p>
      </div>
    )
  },
  {
    id: "data-security",
    title: "5. Data Security",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction.
        </p>
        <p>
          While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
        </p>
      </div>
    )
  },
  {
    id: "your-rights",
    title: "6. Your Privacy Rights",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Depending on your location, you may have certain rights regarding your personal information, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Accessing and receiving a copy of your data</li>
          <li>Correcting inaccurate information</li>
          <li>Requesting deletion of your data</li>
          <li>Objecting to or restricting certain processing activities</li>
          <li>Data portability</li>
          <li>Withdrawing consent</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the information provided below.
        </p>
      </div>
    )
  },
  {
    id: "childrens-privacy",
    title: "7. Children's Privacy",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
        </p>
      </div>
    )
  },
  {
    id: "changes",
    title: "8. Changes to This Privacy Policy",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last revised" date and the updated version will be effective as soon as it is accessible.
        </p>
      </div>
    )
  },
  {
    id: "contact",
    title: "9. Contact Us",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
        </p>
        <p>
          <strong>Email:</strong> privacy@bevvstudio.com<br />
          <strong>Address:</strong> 123 Design Avenue, Creative District, CA 90210
        </p>
      </div>
    )
  }
];
