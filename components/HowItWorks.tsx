import React from "react";

const steps = [
  {
    number: "01",
    title: "Verified Assessment",
    description:
      "Root-cause diagnostics including compression testing, leak-down results, teardown findings, and measurement review before any recommendation is made.",
    image:
      "/images/hiw1.jpg",
    caption: "Compression testing and measurement verification",
  },
  {
    number: "02",
    title: "Decision Lock",
    description:
      "Repair, rebuild, or replacement options are reviewed using real measurements, cost ranges, and long-term risk — then locked before work begins.",
    image:
      "/images/hiw2.avif",
    caption: "Reviewing findings and locking scope of work",
  },
  {
    number: "03",
    title: "Machining & Assembly",
    description:
      "Machining and assembly executed to factory specifications — including clearances, torque values, surface finish, and component verification.",
    image:
      "/images/hiw3.jpg",
    caption: "Block machining and component assembly",
  },
  {
    number: "04",
    title: "Final Confirmation",
    description:
      "Final inspection, pre-install verification, and documentation review to confirm the engine meets agreed specifications before release.",
    image:
      "/images/hiw4.jpg",
    caption: "Final inspection prior to delivery or installation",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="reveal text-center mb-24">
          <h2 className="text-[#003366] font-semibold text-sm tracking-widest uppercase mb-3">
            Verified Process
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight">
            How the Work Actually Happens
          </h3>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          {steps.map((step, index) => (
            <div key={index} className="text-center">

              {/* Step Number */}
              <div className="mb-6">
                <span className="text-5xl font-black text-[#D32F2F]/20">
                  {step.number}
                </span>
              </div>

              {/* Image Proof */}
              <div className="relative h-44 rounded-xl overflow-hidden shadow-md mb-6">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-2 left-2 text-[11px] text-white bg-black/60 px-2 py-1 rounded">
                  {step.caption}
                </span>
              </div>

              {/* Content */}
              <h4 className="text-xl font-bold text-[#1A202C] mb-3">
                {step.title}
              </h4>
              <p className="text-[#4A5568] text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Reality Callout + CTA */}
        <div className="reveal mt-24 text-center space-y-6">
          <div className="inline-block p-5 bg-[#F7FAFC] rounded-lg border border-[#4A5568]/10 text-[#4A5568] font-medium text-sm max-w-2xl">
            <span className="text-[#003366] font-bold">Reality Check:</span>{" "}
            Engines fail most often when diagnostics are skipped or decisions
            change mid-process. Our workflow exists to prevent exactly that.
          </div>
          
          <div>
            <a
              href="#vehicle-intake"
              className="inline-block bg-[#003366] text-white px-8 py-4 rounded font-bold text-lg transition-all hover:bg-[#002244] hover:shadow-lg hover:-translate-y-0.5"
            >
              Ready? Submit Your Engine Details
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
