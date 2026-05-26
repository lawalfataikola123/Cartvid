import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  { name: "Free", price: "0", features: ["10 gens/mo", "720p resolution", "Public gallery"] },
  { name: "Pro", price: "29", features: ["Unlimited gens", "4K resolution", "Private AI studio", "Priority render"] },
  { name: "Studio", price: "99", features: ["Everything in Pro", "Character consistency", "API access", "Team collaboration"] },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-6 max-w-7xl mx-auto">
      <h3 className="text-4xl font-bold tracking-tighter mb-12 text-center text-white">Simple, transparent pricing</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div key={i} className="p-8 bg-white/5 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <h4 className="text-xl font-semibold mb-2">{plan.name}</h4>
              <div className="text-4xl font-bold mb-6">${plan.price}<span className="text-lg text-gray-400 font-normal">/mo</span></div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-gray-300 text-sm">
                    <Check className="w-4 h-4 text-purple-400 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full py-3 bg-white/10 rounded-full hover:bg-white/20 transition text-sm font-semibold">Choose {plan.name}</button>
          </div>
        ))}
      </div>
    </section>
  );
}
