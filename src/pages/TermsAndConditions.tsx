
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section with Gradient Background */}
      <div className="relative bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] h-[200px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/6bfe6d03-5d5d-4cd6-ab7c-9b36e9c392a6.png')] opacity-10 bg-cover bg-center" />
        <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">Terms and Conditions</h1>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <section className="prose max-w-none">
            <p className="text-gray-600">
              Welcome to Bevv Studio. By accessing our website and using our services, you agree to these terms and conditions. Please read them carefully.
            </p>
          </section>

          <Separator className="my-8" />

          {/* Services Agreement */}
          <section>
            <h2 className="text-2xl font-semibold text-[#7E69AB] mb-4">1. Services Agreement</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Bevv Studio provides branding, packaging design, marketing, and consulting services for the food and beverage industry. Our services are subject to these terms and conditions and any additional agreements made in writing.
              </p>
              <p>
                By engaging our services, you acknowledge that project timelines, deliverables, and costs will be specified in a separate project proposal or statement of work.
              </p>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-semibold text-[#7E69AB] mb-4">2. Intellectual Property Rights</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                All intellectual property rights for designs, concepts, and materials created by Bevv Studio remain our property until full payment is received and ownership transfer is explicitly stated in writing.
              </p>
              <p>
                Upon project completion and full payment, specified deliverables and their associated rights will be transferred to the client as detailed in the project agreement.
              </p>
            </div>
          </section>

          {/* Payment Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-[#7E69AB] mb-4">3. Payment Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our payment terms typically require a 50% deposit to commence work, with the remaining balance due upon project completion. Specific payment schedules will be outlined in your project proposal.
              </p>
              <p>
                Late payments may result in project delays and additional fees. We reserve the right to suspend services until outstanding payments are resolved.
              </p>
            </div>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-semibold text-[#7E69AB] mb-4">4. Confidentiality</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We maintain strict confidentiality regarding all client information and project details. Non-disclosure agreements can be provided upon request.
              </p>
              <p>
                Portfolio rights: Unless otherwise specified, we reserve the right to include completed work in our portfolio and promotional materials.
              </p>
            </div>
          </section>

          {/* Project Changes */}
          <section>
            <h2 className="text-2xl font-semibold text-[#7E69AB] mb-4">5. Project Changes & Revisions</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Our project quotes include a specified number of revision rounds. Additional revisions or scope changes may incur extra charges at our standard rates.
              </p>
              <p>
                Significant changes to project scope or requirements may require a revised quote and timeline.
              </p>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-semibold text-[#7E69AB] mb-4">6. Limitation of Liability</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                While we strive for excellence in all our work, we cannot guarantee specific business results or outcomes from our services.
              </p>
              <p>
                Our liability is limited to the amount paid for our services, and we are not responsible for indirect or consequential damages.
              </p>
            </div>
          </section>

          {/* Updates to Terms */}
          <section>
            <h2 className="text-2xl font-semibold text-[#7E69AB] mb-4">7. Updates to Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We reserve the right to update these terms and conditions at any time. Continued use of our services following any changes constitutes acceptance of the updated terms.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-[#E5DEFF] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#7E69AB] mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about these terms and conditions, please contact us at:
              <br />
              Email: hello@bevvstudio.com
              <br />
              Address: 123 Design District, Creative City, CC 12345
            </p>
          </section>
        </div>
      </div>

      {/* Separator antes del footer */}
      <div className="container mx-auto px-4">
        <Separator className="h-[2px] bg-gray-200" />
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
