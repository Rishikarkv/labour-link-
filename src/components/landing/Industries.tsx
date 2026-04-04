"use client";

import React from "react";
import { motion } from "framer-motion";
import { Hotel, Hospital, PartyPopper, ShoppingBag, Utensils, Construction } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Hotel,
      name: "Hospitality",
      description: "Housekeeping, front desk support, and maintenance for premium hotels.",
      count: "250+ Hotels",
    },
    {
      icon: Hospital,
      name: "Healthcare",
      description: "Vetted support staff, cleaners, and facility management for hospitals.",
      count: "120+ Hospitals",
    },
    {
      icon: PartyPopper,
      name: "Events",
      description: "Ushers, security, and setup crews for large-scale corporate events.",
      count: "300+ Events",
    },
    {
      icon: Utensils,
      name: "F&B",
      description: "Waitstaff, kitchen help, and delivery partners for restaurants.",
      count: "180+ Restaurants",
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      description: "Stocking, inventory management, and customer service for big-box retailers.",
      count: "90+ Retailers",
    },
    {
      icon: Construction,
      name: "Construction",
      description: "Safety officers, general labourers, and skilled site maintenance staff.",
      count: "50+ Sites",
    },
  ];

  return (
    <section id="industries" className="section-padding bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Industries We Serve</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">
            Tailored solutions for <br /> every sector.
          </h3>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            LabourLink adapts to the unique requirements of your industry, providing specialized talent that understands your operational standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-950 p-8 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-primary transition-all duration-300 shadow-md hover:shadow-2xl"
            >
              <div className="flex items-start justify-between mb-8">
                 <div className="bg-primary/5 p-4 rounded-2xl group-hover:bg-primary transition-colors">
                    <industry.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                 </div>
                 <div className="text-primary font-bold text-xs bg-primary/10 px-3 py-1 rounded-full group-hover:bg-primary group-hover:text-white transition-all">
                    {industry.count}
                 </div>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors">{industry.name}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {industry.description}
              </p>
              <button className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white decoration-primary hover:underline hover:underline-offset-4">
                 Learn More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
