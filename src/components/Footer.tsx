import FooterLogo from "./footer/FooterLogo";
import FooterNav from "./footer/FooterNav";
import FooterNewsletter from "./footer/FooterNewsletter";

const Footer = () => {
  return (
    <footer className="bg-white text-black w-full overflow-x-hidden">
      <div className="container mx-auto px-0 md:px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8">
          <FooterLogo />
          <FooterNav />
          <FooterNewsletter />
        </div>

        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © 2025 Bevv Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;