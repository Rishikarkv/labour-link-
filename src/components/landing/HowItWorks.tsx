"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { UserPlus, Search, UserCheck, CalendarDays, Rocket, ClipboardCheck, Wallet } from "lucide-react";

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState<"business" | "worker">("business");

  const businessSteps = [
    {
      icon: UserPlus,
      title: "Post your Request",
      description: "Tell us the number of workers, shift timing, and required skill set.",
    },
    {
      icon: Search,
      title: "AI-Powered Matching",
      description: "Our system identifies verified workers meeting your exact criteria in seconds.",
    },
    {
      icon: CalendarDays,
      title: "Confirm & Coordinate",
      description: "Review matched profiles, confirm the shift, and start working immediately.",
    },
    {
      icon: Rocket,
      title: "Scale Dynamically",
      description: "Add more workers or modify shifts as your operational needs evolve.",
    },
  ];

  const workerSteps = [
    {
      icon: UserPlus,
      title: "Quick Registration",
      description: "Complete your profile, upload ID, and list your verified skills.",
    },
    {
      icon: ClipboardCheck,
      title: "Verify & Onboard",
      description: "Pass our background screen and quick skill assessment for priority jobs.",
    },
    {
      icon: Search,
      title: "Pick Your Shifts",
      description: "Browse premium jobs from top hotels, hospitals, and events.",
    },
    {
      icon: Wallet,
      title: "Stable Earnings",
      description: "Get paid automatically for completed shifts with transparent tracking.",
    },
  ];

  const steps = activeTab === "business" ? businessSteps : workerSteps;

  return (
    <section id="how-it-works" className="section-padding bg-white dark:bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">How it Works</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-10">Simple, Fast, and Secure</h3>
          
          <div className="flex p-1 bg-slate-100 dark:bg-slate-900 rounded-2xl w-full max-w-sm">
             <button
                onClick={() => setActiveTab("business")}
                className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "business" 
                    ? "bg-white dark:bg-slate-800 text-primary shadow-sm" 
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
             >
                For Businesses
             </button>
             <button
                onClick={() => setActiveTab("worker")}
                className={`flex-1 py-3 px-6 rounded-xl font-bold text-sm transition-all ${
                  activeTab === "worker" 
                    ? "bg-white dark:bg-slate-800 text-primary shadow-sm" 
                    : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
                }`}
             >
                For Workers
             </button>
          </div>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-[100px] left-[10%] right-[10%] h-1 bg-slate-100 dark:bg-slate-900 z-0" />
          
          <AnimatePresence mode="wait">
            <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.3 }}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10"
            >
              {steps.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                   <div className="relative mb-8">
                      <div className="w-20 h-20 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center border-2 border-slate-100 dark:border-slate-800 shadow-xl group-hover:border-primary group-hover:shadow-primary/10 transition-all duration-300">
                         <item.icon className="w-10 h-10 text-primary" />
                         <div className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-white font-black rounded-full flex items-center justify-center text-xs">
                            {index + 1}
                         </div>
                      </div>
                   </div>
                   <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h4>
                   <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-[240px]">
                      {item.description}
                   </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-20 text-center">
           <button className="bg-primary/10 text-primary hover:bg-primary/20 font-bold px-8 py-4 rounded-2xl transition-all flex items-center gap-2 mx-auto border border-primary/20">
              Read Detailed documentation
           </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
