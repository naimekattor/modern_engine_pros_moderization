import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="reveal text-center mb-20">
          <h2 className="text-[#003366] font-semibold text-sm tracking-widest uppercase mb-3">
            Company Heritage
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight leading-tight">
            Built on Experience. <br className="hidden md:block" />
            <span className="text-[#D32F2F]">Driven by Accountability.</span>
          </h3>
        </div>

        {/* Main Content */}
        <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-4 items-start">

          {/* Left Column — Narrative + Authority Cards */}
<div className="md:col-span-6 space-y-6 text-[#4A5568] text-lg leading-relaxed">
  <p>
    <span className="font-semibold text-[#1A202C]">
      Modern Engine Pros
    </span>{" "}
    was built by professionals with decades of hands-on experience in
    engine diagnostics, machining coordination, sourcing, and
    installation workflows.
  </p>

  <p>
    Too often, customers are pushed into engine decisions without
    complete diagnostics, verified measurements, or accountability
    once problems surface.
  </p>

  <p className="font-medium text-[#003366]">
    We exist to eliminate guesswork from engine replacement.
  </p>

  <p>
    Every engine recommendation follows a documented process — inspection, verification, sourcing, and post-installation accountability.
  </p>

  {/* Authority Cards with Icons */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-8">
    {/* 40+ Years */}
    <div className="bg-[#F7FAFC] p-4 md:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center mb-3 md:mb-4">
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-[#003366]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h4 className="text-3xl md:text-4xl font-extrabold text-[#003366]">40+</h4>
      <p className="text-xs md:text-sm text-[#4A5568] mt-2">Years of Combined Experience</p>
    </div>

    {/* Thousands Engines */}
    <div className="bg-[#F7FAFC] p-4 md:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center mb-3 md:mb-4">
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-[#003366]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <h4 className="text-3xl md:text-4xl font-extrabold text-[#003366]">Thousands</h4>
      <p className="text-xs md:text-sm text-[#4A5568] mt-2">Engines Evaluated & Sourced</p>
    </div>

    {/* Zero Guesswork */}
    <div className="bg-[#F7FAFC] p-4 md:p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-center mb-3 md:mb-4">
        <svg
          className="w-10 h-10 md:w-12 md:h-12 text-[#003366]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h4 className="text-3xl md:text-4xl font-extrabold text-[#003366]">Zero</h4>
      <p className="text-xs md:text-sm text-[#4A5568] mt-2">Guesswork Decisions</p>
    </div>
  </div>
</div>


          {/* Right Column — Visual Proof */}
          <div className="md:col-span-6 space-y-6">

            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/exp1.jpg"
                  alt="Engine machining shop floor"
                  className="w-full h-full object-cover"
                />
                <p className="absolute bottom-2 left-3 text-xs text-white bg-black/60 px-2 py-1 rounded">
                  Active machining environment
                </p>
              </div>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src="/images/exp2.jpg"
                  alt="Measuring engine tolerances"
                  className="w-full h-full object-cover"
                />
                <p className="absolute bottom-2 left-3 text-xs text-white bg-black/60 px-2 py-1 rounded">
                  Precision measurement & verification
                </p>
              </div>

              <div className="relative col-span-2 rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/exp3.jpg"
                  alt="Engine block inspection"
                  className="w-full h-full object-cover"
                />
                <p className="absolute bottom-2 left-3 text-xs text-white bg-black/60 px-2 py-1 rounded">
                  Engine block inspection before approval
                </p>
              </div>
            </div>

            {/* Trust Card */}
            {/* <div className="bg-white border border-[#4A5568]/10 rounded-2xl p-8 shadow-xl">
              <ul className="space-y-4">
                {[
                  "Documented diagnostics before sourcing",
                  "Verified measurements before approval",
                  "Clear accountability after installation",
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3">
                    <span className="mt-1 w-3 h-3 rounded-full bg-[#D32F2F] flex-shrink-0" />
                    <span className="text-lg font-semibold text-[#1A202C]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div> */}

          </div>
        </div>

        {/* Authority Strip */}
        

      </div>
    </section>
  );
};

export default About;
