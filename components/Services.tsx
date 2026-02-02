import React from "react";

const coreServices = [
  {
    title: "Valve Job Services",
    description:
      "Precision cylinder head disassembly, inspection, machining, and reassembly — including pressure testing, resurfacing, valve seating, and guide work as required.",
    image: "/images/MEPImagesCylinderhead.png",
    caption: "Cylinder head inspection, valve seating, and guide work",
  },
  {
    title: "Short Block Services",
    description:
      "Complete short block rebuilds including block machining, crankshaft work, bearings, pistons, rings, timing components, and internal tolerances — assembled and verified.",
    image: "/images/MEPWorkingShortblock.png",
    caption: "Block machining, crankshaft fitting, and bearing clearances",
  },
  {
    title: "Long Block Services",
    description:
      "Fully assembled long blocks combining short block and cylinder head work, including oil pump, timing set, gaskets, lifters, and verification checks.",
    image: "/images/longblock.png",
    caption: "Complete long block assembly and final verification",
  },
];


const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#F7FAFC]">
      <div className="container mx-auto px-6 md:px-12">

        {/* Approach */}
        <div className="reveal mb-28">
          <div className="text-center mb-16">
            <h2 className="text-[#D32F2F] font-bold text-sm tracking-widest uppercase mb-3">
              Our Approach
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight">
              How We Work
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
  {[
    {
      title: "Decision Guidance",
      text:
        "Clear, expert guidance before major engine decisions are made — based on diagnostics, measurements, and real-world outcomes.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Verified Process",
      text:
        "No skipped steps. No silent changes. Every stage is documented, reviewed, and approved before moving forward.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Accountable Fulfillment",
      text:
        "Responsibility doesn't end at delivery. We remain accountable through installation and post-install verification.",
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ].map((item, i) => (
    <div
      key={i}
      className="bg-white p-8 rounded-2xl border border-[#4A5568]/10 shadow-sm hover:shadow-md transition"
    >
      <div className="text-[#2B6CB0] mb-4">
        {item.icon}
      </div>
      <h4 className="text-xl font-bold text-[#1A202C] mb-4">
        {item.title}
      </h4>
      <p className="text-[#4A5568] leading-relaxed">
        {item.text}
      </p>
    </div>
  ))}
</div>
        </div>

        {/* Core Services with Visual Proof */}
        <div className="reveal">
          <div className="text-center mb-20">
            <h3 className="text-3xl md:text-4xl font-bold text-[#003366] tracking-tight">
              Core Engine Services
            </h3>
            <p className="mt-4 text-[#4A5568] max-w-2xl mx-auto">
              Supported as part of a verified, inspection-driven engine process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {coreServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-[#4A5568]/10 shadow-sm hover:shadow-lg transition-all"
              >
                {/* Image Proof */}
                <div className="relative h-56">
  <img
    src={service.image}
    alt={service.title}
    className="w-full h-full object-cover"
  />
  <span className="absolute bottom-3 left-3 text-xs text-white bg-black/60 px-2 py-1 rounded">
    {service.caption}
  </span>
</div>


                {/* Content */}
                <div className="p-8">
                  <h4 className="text-xl font-bold text-[#1A202C] mb-3">
                    {service.title}
                  </h4>
                  <p className="text-[#4A5568] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Intake CTA */}
          <div className="reveal mt-16 text-center">
            <p className="text-lg text-[#4A5568] mb-6 max-w-2xl mx-auto">
              Not sure which service is right for your engine? Submit your vehicle details for a verified analysis.
            </p>
            <a
              href="#vehicle-intake"
              className="inline-block bg-[#003366] text-white px-8 py-4 rounded font-bold text-lg transition-all hover:bg-[#002244] hover:shadow-lg hover:-translate-y-0.5"
            >
              Analyze My Engine
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
