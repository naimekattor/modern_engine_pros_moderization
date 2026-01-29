import React from 'react';

const Educational: React.FC = () => {
  return (
    <section id="educational" className="py-24 bg-[#1A202C] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="reveal grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image */}
          <div className="md:col-span-6">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/images/MEPImagesCylinderhead.png" 
                alt="Engine inspection or machining"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="md:col-span-6 text-left">
            <h2 className="text-[#D32F2F] font-bold text-sm tracking-widest uppercase mb-4">
              Authority & Education
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Why Engine Decisions <br /> Go Wrong
            </h3>

            <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-4 mb-8">
              <p>
                Most engine replacement problems don't start with bad parts — they start with <span className="text-white font-bold">bad decisions</span>.
              </p>
              <p>
                Incomplete diagnostics. Rushed approvals. Unclear responsibility. When the process is broken, the result is failure — regardless of the parts used.
              </p>
            </div>

            <a 
              href="#education-hub" 
              className="inline-flex items-center justify-center bg-[#003366] text-white px-8 py-4 rounded font-bold md:text-lg text-sm transition-all hover:bg-[#002244] hover:shadow-lg hover:-translate-y-0.5"
            >
              Learn How to Avoid Costly Engine Mistakes
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Educational;
