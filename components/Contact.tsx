import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Optional subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className=" flex flex-col lg:flex-row gap-24 items-start">
          <div className="reveal lg:w-1/2">
            <h2 className="text-[#003366] font-bold text-sm tracking-widest uppercase mb-4">Contact Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight mb-4">Get advice from the pros.</h3>
            <p className="text-xl text-[#4A5568] mb-16 leading-relaxed">
              With over 40 years of expertise since 1979, our team delivers precision remanufacturing, performance upgrades, and machine shop services. Questions about compatibility, quotes, or your next build? Our experts are here to help.
            </p>
            
            <div className="space-y-14">
              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#003366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#003366]/20 transition-colors">
                  <span className="text-2xl">📞</span> 
                </div>
                <div>
                  <span className="text-[#4A5568] font-semibold text-xs uppercase tracking-[0.2em] mb-2 block">Phone</span>
                  <p className="text-sm md:text-xl font-semibold text-[#1A202C] group-hover:text-[#003366] transition-colors">(818) 409-9494</p>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#003366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#003366]/20 transition-colors">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <span className="text-[#4A5568] font-semibold text-xs uppercase tracking-[0.2em] mb-2 block">Email</span>
                  <a href="mailto:info@modernenginepros.com"  className="text-sm md:text-xl font-semibold text-[#1A202C] group-hover:text-[#003366] transition-colors">info@modernenginepros.com</a>
                </div>
              </div>

              <div className="group flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-[#003366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#003366]/20 transition-colors">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <span className="text-[#4A5568] font-semibold text-xs uppercase tracking-[0.2em] mb-2 block">Location</span>
                  <p className="text-sm md:text-xl font-semibold text-[#1A202C] group-hover:text-[#003366] transition-colors">701 Sonora Ave</p>
                  <p className="text-sm md:text-xl text-[#4A5568] mt-1">Glendale, CA 91201</p>
                </div>
              </div>

              <div className="pt-10 border-t border-[#4A5568]/10">
                <h5 className="text-[#1A202C] font-bold text-sm mb-4">Shop Hours & Notes</h5>
                <p className="text-[#4A5568] font-medium text-lg">Monday – Friday: 8:00am – 5:00pm</p>
                <p className="text-[#4A5568]/70 text-base mt-3">
                  Serving the greater Southern California region. Appointments recommended for in-shop machine services. Nationwide shipping available.
                </p>
              </div>
            </div>
          </div>

          {/* Right column: Visual + supporting content */}
          <div className="reveal lg:w-1/2 bg-[#F7FAFC] p-10 md:p-14 rounded-[40px] border border-[#4A5568]/10 shadow-xl relative overflow-hidden">
            {/* Background image for immersion */}
            <div className="absolute inset-0 opacity-10 blur-sm">
              <img 
                src="/images/exp1.jpg" 
                alt="Modern automotive machine shop" 
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10 space-y-10">
              <div>
                <h3 className="text-3xl font-bold text-[#1A202C] mb-6 tracking-tight">Why Reach Out?</h3>
                <p className="text-lg text-[#4A5568] leading-relaxed">
                  Get expert technical guidance, fast quotes, and tailored recommendations from professionals who live and breathe engines.
                </p>
              </div>

              {/* Accent image: engine close-up */}
              <div className="rounded-3xl overflow-hidden shadow-lg border border-[#4A5568]/10">
                <img 
                  src="/images/exp3.jpg" 
                  alt="Precision remanufactured engine detail" 
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div>
                <h4 className="text-xl font-bold text-[#1A202C] mb-5">Quick Highlights</h4>
                <ul className="space-y-4 text-[#4A5568] text-base">
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#003366] mr-3"></span>
                    40+ years of proven craftsmanship
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#003366] mr-3"></span>
                    Domestic, import, racing & marine specialists
                  </li>
                  <li className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-[#003366] mr-3"></span>
                    Wholesale support & nationwide shipping
                  </li>
                </ul>
              </div>

              <p className="text-[#4A5568] italic text-base pt-4 border-t border-[#4A5568]/10">
                "Stay one step ahead without compromising quality" — Modern Engine Pros
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;