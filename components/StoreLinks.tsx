import React from 'react';

const StoreLinks: React.FC = () => {
  return (
    <section id="ecosystem" className="py-24 bg-[#F7FAFC] border-t border-[#4A5568]/10">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <div className="reveal max-w-4xl mx-auto mb-16">
          <h2 className="text-[#003366] font-semibold text-sm tracking-widest uppercase mb-3">Our Ecosystem</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight mb-6">
            Integrated Engine Solutions
          </h3>
          <p className="text-lg text-[#4A5568] leading-relaxed">
             Modern Engine Pros operates within a broader engine and parts ecosystem, providing access to verified components and specialized solutions when needed.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Cylinder Head Store */}
          <a 
             href="https://CylinderHeadStore.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="group relative bg-white rounded-2xl p-10 shadow-sm border border-[#4A5568]/10 hover:shadow-xl hover:border-[#003366]/30 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#003366]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 text-center">
              <div className='flex justify-center items-center mb-2'>
                <img 
                 src="/images/cylinderLogo.webp" 
                 alt="Cylinder Head Store" 
                 className="h-8 w-auto object-contain"
               />
              </div>
              
                <h4 className="text-2xl font-bold text-[#003366] mb-2">CylinderHeadStore.com</h4>
                <p className="text-[#4A5568] mb-6 text-sm">Dedicated cylinder head sourcing and machining services.</p>
                <span className="inline-block px-6 py-3 bg-[#003366] text-white rounded font-bold text-sm transition-transform group-hover:scale-105">
                   Visit Store
                </span>
             </div>
          </a>

          {/* ME Parts */}
          <a 
             href="https://MEParts.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="group relative bg-white rounded-2xl p-10 shadow-sm border border-[#4A5568]/10 hover:shadow-xl hover:border-[#D32F2F]/30 transition-all duration-300 flex flex-col items-center justify-center overflow-hidden"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-[#D32F2F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="relative z-10 text-center">
              <div className='flex justify-center items-center mb-2'>
                <img 
                 src="/images/ME_Logo.png" 
                 alt="MEParts" 
                 className="h-8 w-auto object-contain"
               />
              </div>
              
                <h4 className="text-2xl font-bold text-[#003366] mb-2">MEParts.com</h4>
                <p className="text-[#4A5568] mb-6 text-sm">Verified engine components and specialized parts.</p>
                <span className="inline-block px-6 py-3 bg-white text-[#1A202C] border-2 border-[#1A202C]/10 rounded font-bold text-sm transition-all group-hover:border-[#1A202C] group-hover:scale-105">
                   Visit Store
                </span>
             </div>
          </a>
        </div>
        
        <p className="reveal mt-12 text-sm text-[#4A5568]/60">
           Note: Purchases are handled securely on the respective platforms.
        </p>
      </div>
    </section>
  );
};

export default StoreLinks;
