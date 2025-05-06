import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: ["Basic SEO Tools", "Limited Keywords", "Community Support"],
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹299/mo",
    features: [
      "All SEO Tools",
      "Unlimited Keywords",
      "Smart AI Generator",
      "Priority Support",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: [
      "Everything in Pro",
      "Dedicated Manager",
      "Custom AI Solutions",
      "24x7 Support",
    ],
    highlight: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 px-5 md:px-10 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-5">
          Choose the plan that fits your growth
        </h2>
        <p className="text-white/60 max-w-xl mx-auto mb-16">
          Whether you're just starting out or scaling up, we have a plan for
          you.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className={`rounded-xl border border-white/10 p-6 relative backdrop-blur-lg ${
                plan.highlight
                  ? "bg-gradient-to-br from-purple-600/30 to-indigo-800/30 border-[#A369ff]"
                  : "bg-white/5"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-[#8c44ff] text-sm px-3 py-1 rounded-full text-black font-semibold">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-xl mb-4">{plan.price}</p>
              <ul className="text-left text-sm space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex gap-2 items-center">
                    <span className="text-[#A369ff]">✔</span> {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-block mt-auto bg-[#A369ff] text-black px-5 py-2 rounded-full text-sm font-semibold"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
