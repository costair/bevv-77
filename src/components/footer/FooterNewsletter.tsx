import { Mail } from "lucide-react";

const FooterNewsletter = () => {
  return (
    <div className="space-y-4 w-full lg:w-auto px-4 md:px-0">
      <h3 className="font-semibold">Stay up to date</h3>
      <div className="flex flex-col space-y-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black w-full lg:w-auto"
        />
        <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-black/90 transition-colors flex items-center justify-center gap-2 w-full lg:w-auto">
          <Mail className="h-4 w-4" />
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default FooterNewsletter;