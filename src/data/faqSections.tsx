
import { LegalSection } from "@/types/legal";

export const faqSections: LegalSection[] = [
  {
    id: "general-questions",
    title: "1. What is Bevv Studio?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Bevv Studio is a specialized design and branding agency focused exclusively on the food and beverage industry. We offer comprehensive services from brand strategy and visual identity to packaging design and marketing solutions tailored specifically for food and beverage brands looking to stand out in a competitive marketplace.
        </p>
      </div>
    )
  },
  {
    id: "services",
    title: "2. What services do you offer?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We offer a complete range of services for food and beverage brands including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Brand strategy and positioning</li>
          <li>Visual identity development</li>
          <li>Packaging design and production guidance</li>
          <li>Label design and compliance</li>
          <li>Marketing materials and campaigns</li>
          <li>Website design and development</li>
          <li>Social media strategy and content creation</li>
          <li>Product photography and styling</li>
        </ul>
      </div>
    )
  },
  {
    id: "process",
    title: "3. What is your design process?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Our design process typically follows these key phases:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Discovery:</strong> We begin with in-depth research to understand your brand, products, target audience, and market position.</li>
          <li><strong>Strategy:</strong> We develop a strategic framework to guide the creative process based on market insights and your business goals.</li>
          <li><strong>Concept Development:</strong> Our team creates multiple concept directions for your review.</li>
          <li><strong>Refinement:</strong> We refine the selected concept based on your feedback and industry best practices.</li>
          <li><strong>Implementation:</strong> We prepare all necessary files and guidelines for production and implementation.</li>
          <li><strong>Support:</strong> We provide ongoing support to ensure successful launch and consistency across all touchpoints.</li>
        </ol>
      </div>
    )
  },
  {
    id: "timeline",
    title: "4. How long does a typical project take?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Project timelines vary depending on the scope and complexity of work required. Here are some general guidelines:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Branding projects:</strong> 6-8 weeks</li>
          <li><strong>Packaging design:</strong> 4-6 weeks</li>
          <li><strong>Website design and development:</strong> 8-12 weeks</li>
          <li><strong>Marketing campaigns:</strong> 3-5 weeks</li>
        </ul>
        <p>
          We'll provide a detailed timeline during our initial consultation based on your specific needs and project requirements.
        </p>
      </div>
    )
  },
  {
    id: "pricing",
    title: "5. How much do your services cost?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Our pricing is customized based on the scope, complexity, and specific requirements of each project. We offer several service tiers to accommodate different budget levels and business sizes, from startups to established brands.
        </p>
        <p>
          We provide detailed proposals with transparent pricing after our initial consultation where we'll discuss your needs and objectives. For general pricing information, please visit our Pricing page or contact us for a personalized quote.
        </p>
      </div>
    )
  },
  {
    id: "expertise",
    title: "6. Why should I choose a specialized food and beverage agency?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Choosing an agency specialized in food and beverage design offers several advantages:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Industry Knowledge:</strong> We understand food and beverage regulations, trends, and consumer behavior specific to your industry.</li>
          <li><strong>Production Expertise:</strong> We're familiar with packaging materials, printing techniques, and production requirements for food products.</li>
          <li><strong>Targeted Strategy:</strong> Our strategies are specifically crafted for food and beverage market dynamics.</li>
          <li><strong>Relevant Network:</strong> We have established relationships with food photographers, printers, and other industry specialists.</li>
          <li><strong>Competitive Edge:</strong> Our deep industry focus helps your brand stand out in meaningful ways within your specific category.</li>
        </ul>
      </div>
    )
  },
  {
    id: "clients",
    title: "7. What types of clients do you work with?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          We work with a diverse range of clients within the food and beverage industry, including:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Food product startups and entrepreneurs</li>
          <li>Craft beverage producers (beer, wine, spirits, coffee, tea)</li>
          <li>Specialty food manufacturers</li>
          <li>Restaurant groups and chains</li>
          <li>Established F&B brands seeking repositioning</li>
          <li>Organic and health-focused food companies</li>
          <li>Confectionery and snack producers</li>
          <li>Plant-based and alternative food manufacturers</li>
        </ul>
        <p>
          Whether you're launching a new product or refreshing an established brand, our expertise is tailored to help food and beverage businesses of all sizes.
        </p>
      </div>
    )
  },
  {
    id: "location",
    title: "8. Do you work with clients remotely?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Yes, we work with clients across the country and internationally. Our process is designed to be effective regardless of location:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Virtual consultations and meetings</li>
          <li>Digital presentation and feedback tools</li>
          <li>Secure file sharing and collaboration platforms</li>
          <li>Sample shipping and digital proofing</li>
        </ul>
        <p>
          For local clients, we also offer in-person meetings when possible, but our remote process ensures that geographical location is never a barrier to working with us.
        </p>
      </div>
    )
  },
  {
    id: "ownership",
    title: "9. Who owns the rights to the design work?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Upon full payment for our services, you receive exclusive ownership rights to the final deliverables created specifically for your brand. This includes:
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>Logo and brand identity elements</li>
          <li>Packaging designs</li>
          <li>Custom illustrations and graphics</li>
          <li>Website designs and custom code</li>
          <li>Marketing materials and campaign assets</li>
        </ul>
        <p>
          We retain the right to showcase the work in our portfolio and marketing materials unless otherwise specified in our agreement. For full details on intellectual property rights, please refer to our Terms and Conditions.
        </p>
      </div>
    )
  },
  {
    id: "start",
    title: "10. How do I get started working with Bevv Studio?",
    content: (
      <div className="space-y-4 text-gray-600">
        <p>
          Getting started with us is easy:
        </p>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Initial Contact:</strong> Reach out through our contact form, email, or phone.</li>
          <li><strong>Consultation:</strong> We'll schedule a complimentary consultation to discuss your project needs and objectives.</li>
          <li><strong>Proposal:</strong> Based on our conversation, we'll prepare a customized proposal outlining our recommended approach, timeline, and pricing.</li>
          <li><strong>Agreement:</strong> Once you approve the proposal, we'll send a service agreement to formalize our partnership.</li>
          <li><strong>Kickoff:</strong> We'll schedule a project kickoff meeting to begin the exciting process of bringing your food and beverage brand to life!</li>
        </ol>
        <p>
          Contact us today to start the conversation about elevating your food or beverage brand.
        </p>
      </div>
    )
  }
];
