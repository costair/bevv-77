import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      subtitle: "For New Companies",
      monthlyPrice: 550,
      quarterlyPrice: 1320,
      features: [
        "Branding & Content Setup",
        "12 Monthly Posts",
        "30 Daily Stories (1 per day)",
        "3 Monthly Reels",
        "Logo Design",
        "Social Media Strategy Consulting"
      ]
    },
    {
      name: "Intermediate",
      subtitle: "For Growing Brands",
      monthlyPrice: 860,
      quarterlyPrice: 2070,
      features: [
        "30 Monthly Posts",
        "30 Monthly Stories",
        "6 Monthly Reels",
        "Logo Design & Visual Style Guide",
        "Food/Beverage Packaging Design (5 Products)"
      ]
    },
    {
      name: "Premium",
      subtitle: "Complete Digital Presence",
      monthlyPrice: 1499,
      quarterlyPrice: 3597,
      features: [
        "50 Monthly Posts (Client's Choice)",
        "60 Monthly Stories (2 per day)",
        "13 Monthly Reels",
        "Advanced Logo Design & Style Guide",
        "Advanced F&B Packaging Design (12 Products)",
        "Instagram, Facebook & TikTok Ad Campaigns"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Custom Solutions",
      customPricing: true,
      features: [
        "50+ Monthly Posts",
        "60+ Monthly Stories",
        "Advanced Logo Design & Style Guide",
        "Advanced F&B Packaging Design (12+ Products)",
        "Full Social Media Ad Campaign Management",
        "Monthly Content Strategy & Influencer Collaborations"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="text-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Pricing Plans</h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your food & beverage brand
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="relative border-2 hover:border-black transition-all duration-300 flex flex-col">
              <CardHeader className="flex flex-col h-[180px]">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>{plan.subtitle}</CardDescription>
                <div className="mt-4">
                  {!plan.customPricing ? (
                    <div>
                      <div className="text-3xl font-bold">
                        ${plan.monthlyPrice}
                        <span className="text-lg font-normal text-muted-foreground">/month</span>
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        ${plan.quarterlyPrice} / quarter
                      </div>
                    </div>
                  ) : (
                    <div className="text-2xl font-bold">Custom Pricing</div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <ul className="space-y-4 min-h-[320px]">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-black shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-8 bg-black text-white hover:bg-black/90">
                  {plan.customPricing ? "Contact Us" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;