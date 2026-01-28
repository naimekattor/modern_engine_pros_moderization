import React from 'react';

const AccountabilitySection: React.FC = () => {
  return (
    <section className="bg-[#003366] text-white py-16 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          
          {/* Left: Core Statement */}
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-4xl md:text-5xl text-white font-extrabold tracking-tight leading-tight">
              We Stand Behind <span className="text-[#D32F2F]">Every</span> Decision.
            </h2>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                <strong>This is not a transaction.</strong> When you work with Modern Engine Pros, you're entering an accountability agreement.
              </p>
              
              <p className="text-gray-200">
                We understand the real cost of wrong engine decisions: downtime, lost revenue, reputation damage, and broken trust. That weight does not disappear when you sign the paperwork.
              </p>

              <div className="pt-6 border-t border-white/20 space-y-4 text-gray-100">
                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">We Own Our Recommendations</h4>
                    <p>If we recommend an engine, we've verified it against your exact specifications. No guessing.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Accountability Doesn't End at Delivery</h4>
                    <p>We remain responsible through installation and post-install verification. If a problem emerges, we fix it.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <span className="text-2xl flex-shrink-0">✓</span>
                  <div>
                    <h4 className="font-bold text-white mb-1">Consequences Are Real</h4>
                    <p>We know what happens when engines fail. That's exactly why we don't cut corners or take risks with YOUR decision.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Ready to Stop Guessing?</h3>
            <p className="text-gray-200 mb-6">
              Submit your engine details. We'll provide a verified recommendation based on real diagnostics.
            </p>
            <a
              href="#vehicle-intake"
              className="inline-block bg-[#D32F2F] text-white px-6 py-3 rounded font-bold transition-all hover:bg-[#B71C1C] hover:shadow-lg hover:-translate-y-0.5 w-full text-center"
            >
              Get Verified Recommendation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AccountabilitySection;
