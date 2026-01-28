"use client";

import React from 'react';
import { BorderBeam } from "@stianlarsen/border-beam";
import "@stianlarsen/border-beam/css";
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#F7FAFC]">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-center bg-cover"
        style={{ backgroundImage: `url("/images/hero.jpg")` }}
      ></div>

      {/* Full Section Blur + Gradient Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none backdrop-blur-sm"
        style={{
          background: "linear-gradient(to bottom, rgba(247,250,252,0.95) 0%, rgba(247,250,252,0.85) 35%, rgba(247,250,252,0.55) 65%, rgba(247,250,252,0.25) 100%)",
        }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 relative z-20 flex flex-col items-center text-center pt-20">
        <div className="reveal space-y-4 mb-8 w-full max-w-4xl p-6 md:p-8">
          <h1 className="text-[42px] sm:text-6xl md:text-[80px] font-extrabold text-[#003366] tracking-tight leading-[1.05] md:leading-[1] drop-shadow-sm">
            Engine <span className='text-[#D32F2F]'>Decisions</span> Done Right.<br />
            <span className="text-[#003366]">Before Costly <span className='text-[#D32F2F]'>Mistakes</span> Happen.</span>
          </h1>
        </div>

        <p className="reveal text-lg md:text-xl text-[#003366] mb-12 max-w-3xl leading-relaxed font-medium px-4">
          We help customers, shops, and fleets make uninformed engine replacement decisions — with verified diagnostics, accountable processes, and real-world expertise.
        </p>

        {/* CTAs */}
        <div className="reveal flex flex-col sm:flex-row gap-5 items-center justify-center relative z-30 w-full mb-16">
           <div className="relative group">
          <a 
            href="#vehicle-intake" 
            className=" relative w-full sm:w-auto text-center bg-[#003366] text-white px-8 py-4 rounded font-bold text-lg transition-all hover:bg-[#002244] hover:shadow-lg hover:-translate-y-0.5"
          >
            Submit Your Vehicle Details
            <BorderBeam colorFrom="#ff2a00ff" colorTo="#006affff" borderWidth={4} />
          </a>
          </div>
          {/* <a 
            href="#how-it-works" 
            className="w-full sm:w-auto text-center bg-white text-[#003366] border-2 border-[#003366]/10 px-8 py-4 rounded font-bold text-lg transition-all hover:border-[#003366] hover:bg-[#F7FAFC]"
          >
            How It Works
          </a> */}
          
        </div>

        {/* Trust Strip */}
        <div className="reveal w-full max-w-5xl bg-white shadow-sm border border-[#4A5568]/10 rounded-xl p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left">
            {[
              "Built by engine professionals",
              "Decision-first, not sales-driven",
              "Accountability at every step",
              "No shortcuts. No guesswork."
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-3">
                <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#003366]/10 flex items-center justify-center">
                  <svg className="w-3 h-3 text-[#003366]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-sm font-semibold text-[#1A202C] leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
