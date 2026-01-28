import React, { useState } from 'react';

const EducationHub: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const articles = [
    {
      id: 'incomplete-diagnostics',
      title: 'Incomplete Diagnostics — The #1 Engine Failure Cause',
      summary: 'Skipped diagnostic steps lead to hidden damage, wrong decisions, and catastrophic failures post-installation.',
      content: (
        <>
          <p className="mb-4">
            <strong>The Problem:</strong> Most engine failures don't come from defective parts — they come from incomplete diagnostics that miss critical damage indicators.
          </p>
          <p className="mb-4">
            When a shop rushes through diagnostics or relies solely on compression tests, they miss:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Bearing wear patterns (crankshaft and rod bearings can be destroyed without showing compression loss)</li>
            <li>Internal sludge buildup (turbocharger and oil passage blockage)</li>
            <li>Piston ring scoring and deck height variation</li>
            <li>Cylinder wall glaze or micro-fractures</li>
            <li>Valve seat recession or head warping</li>
          </ul>
          <p className="mb-4">
            <strong>The Consequence:</strong> A customer installs a rebuild that's missing critical measurements, and the engine fails within months. They're out thousands of dollars, facing downtime, and now the responsibility chain is broken — nobody knows who missed what.
          </p>
          <p className="font-semibold text-[#D32F2F]">
            Modern Engine Pros Approach: Every engine assessment includes compression testing, leak-down testing, visual teardown inspection, and precision measurement of critical tolerances before any recommendation is made.
          </p>
        </>
      ),
    },
    {
      id: 'rushed-approvals',
      title: 'Rushed Approvals — Why Pressure-Driven Decisions Fail',
      summary: 'Fast approvals without review create liability gaps and turn fixable situations into disasters.',
      content: (
        <>
          <p className="mb-4">
            <strong>The Reality:</strong> When customers, mechanics, or fleet managers are pressured to "make a decision fast," corners get cut. Scope changes mid-process. Requirements get unclear. And nobody is accountable when it fails.
          </p>
          <p className="mb-4">
            Common rushed approval scenarios:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>"I need it done tomorrow" → Work begins before diagnostics finish</li>
            <li>"Just use what you have" → Sourcing decisions override verified specs</li>
            <li>"We'll handle that later" → Critical steps deferred, process becomes chaotic</li>
            <li>"No paperwork needed" → No documented decision trail when problems emerge</li>
          </ul>
          <p className="mb-4">
            <strong>The Cost:</strong> A rebuild that doesn't match the original spec. A part that wasn't supposed to be reused that fails early. A customer who paid premium prices for substandard work. And when they call back? Nobody remembers what was approved or why.
          </p>
          <p className="font-semibold text-[#D32F2F]">
            Modern Engine Pros Approach: We lock the scope *before* work starts. Every decision is documented. Every stage is reviewed and approved in writing. No surprises. No scope creep.
          </p>
        </>
      ),
    },
    {
      id: 'unclear-responsibility',
      title: 'Unclear Responsibility — Who Owns the Failure?',
      summary: 'Ambiguous accountability creates finger-pointing and leaves customers stranded when engines fail.',
      content: (
        <>
          <p className="mb-4">
            <strong>The Pattern:</strong> A remanufactured engine fails. The customer is angry. Now everyone points fingers:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>The machine shop says "the customer's mechanic installed it wrong"</li>
            <li>The mechanic says "the engine came damaged"</li>
            <li>The sourcer says "I didn't know about that part specification"</li>
            <li>The customer? Stuck with a failed engine and no clear recourse.</li>
          </ul>
          <p className="mb-4">
            <strong>Why It Happens:</strong> When the process isn't documented, when responsibility isn't explicitly assigned at each stage, and when post-install accountability isn't defined upfront, there's no way to trace what went wrong or who's responsible for fixing it.
          </p>
          <p className="mb-4">
            <strong>The Real Cost:</strong> A customer who paid $5K–$15K for a rebuild now owns a paperweight. Their operation is down. Their trust is destroyed. And the industry gets another reputation hit for "unreliable remanufactured engines."
          </p>
          <p className="font-semibold text-[#D32F2F]">
            Modern Engine Pros Approach: Every decision, every stage, every component is documented with clear ownership. If a problem emerges post-install, we know exactly who did what, when, and why — and we're accountable for our work.
          </p>
        </>
      ),
    },
    {
      id: 'price-first-thinking',
      title: 'Price-First Thinking — The Hidden Cost of Cheap Decisions',
      summary: 'Choosing the cheapest option upfront leads to catastrophic failures, downtime, and lost revenue.',
      content: (
        <>
          <p className="mb-4">
            <strong>The Trap:</strong> A customer sees two quotes for a remanufactured engine:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Option A: $4,500 — minimal diagnostics, unclear sourcing, "will figure out during rebuild"</li>
            <li>Option B: $6,200 — full diagnostics, verified tolerances, documented process, accountability guarantee</li>
          </ul>
          <p className="mb-4">
            The customer picks Option A to save $1,700. Seems logical, right?
          </p>
          <p className="mb-4">
            <strong>What Actually Happens:</strong>
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Option A engine fails at 6 months, mid-season</li>
            <li>Fleet is down for weeks → $3,000+ in lost revenue per day</li>
            <li>Customer has to buy another engine from a different shop → $5,500</li>
            <li>Total cost: $4,500 + $5,500 + lost downtime = $50K+ in total damage</li>
            <li>Customer relationship destroyed. Reputation damage.</li>
          </ul>
          <p className="mb-4">
            <strong>The Math:</strong> Choosing the cheapest upfront option often costs 5–10x more when failures, downtime, and replacement are factored in.
          </p>
          <p className="font-semibold text-[#D32F2F]">
            Modern Engine Pros Approach: We lead with decision integrity, not price. The cost of the right decision is always less than the cost of the wrong one played out in the field.
          </p>
        </>
      ),
    },
    {
      id: 'what-we-do-differently',
      title: 'Our Approach Is Different — Why Accountability Wins',
      summary: 'Real diagnostics, documented decisions, and post-install accountability protect both customer and business.',
      content: (
        <>
          <p className="mb-4">
            <strong>The Modern Engine Pros Framework:</strong> We built a process that eliminates the four failure modes above. Here's how:
          </p>
          
          <div className="space-y-6 mb-6">
            <div className="bg-[#F7FAFC] p-4 rounded border-l-4 border-[#003366]">
              <h4 className="font-bold text-[#003366] mb-2">1. Verified Assessment (No Guessing)</h4>
              <p className="text-[#4A5568] text-sm">
                Compression testing, leak-down testing, visual teardown, and precision measurement of critical tolerances. We document every finding. Incomplete diagnostics are not an option.
              </p>
            </div>

            <div className="bg-[#F7FAFC] p-4 rounded border-l-4 border-[#003366]">
              <h4 className="font-bold text-[#003366] mb-2">2. Decision Lock (No Scope Creep)</h4>
              <p className="text-[#4A5568] text-sm">
                Once diagnostics are complete, we present *exact* repair, rebuild, or replacement options with real measurements, cost ranges, and long-term risk assessment. The customer approves in writing. That decision is locked before work begins.
              </p>
            </div>

            <div className="bg-[#F7FAFC] p-4 rounded border-l-4 border-[#003366]">
              <h4 className="font-bold text-[#003366] mb-2">3. Accountable Execution (No Surprises)</h4>
              <p className="text-[#4A5568] text-sm">
                Every stage is documented. Components are verified. Measurements are confirmed. If something changes, we notify the customer *immediately* and re-approve before proceeding.
              </p>
            </div>

            <div className="bg-[#F7FAFC] p-4 rounded border-l-4 border-[#003366]">
              <h4 className="font-bold text-[#003366] mb-2">4. Post-Install Accountability (No Excuses)</h4>
              <p className="text-[#4A5568] text-sm">
                We remain accountable through installation and verification. If a problem emerges, we know exactly who did what, when, and why — and we fix it.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#D32F2F]">
            Result: Engines that work. Customers who trust us. Reputation that lasts.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="education-hub" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="reveal text-center mb-16">
          <h2 className="text-[#003366] font-semibold text-sm tracking-widest uppercase mb-3">
            Authority & Education
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#003366] tracking-tight mb-6">
            Why Engine Decisions Go Wrong
          </h3>
          <p className="text-lg text-[#4A5568] max-w-3xl mx-auto leading-relaxed">
            Most engine replacement failures don't come from defective parts. They come from broken processes, unclear responsibility, and decisions made without complete information.
          </p>
        </div>

        {/* Article Cards */}
        <div className="max-w-5xl mx-auto space-y-4 mb-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-[#4A5568]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <button
                onClick={() =>
                  setExpandedId(expandedId === article.id ? null : article.id)
                }
                className="w-full text-left p-6 hover:bg-[#F7FAFC] transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-[#003366] mb-2">
                      {article.title}
                    </h4>
                    <p className="text-[#4A5568] text-sm">
                      {article.summary}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <svg
                      className={`w-6 h-6 text-[#003366] transition-transform ${
                        expandedId === article.id ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {expandedId === article.id && (
                <div className="px-6 pb-6 pt-4 border-t border-[#4A5568]/10 text-[#4A5568] leading-relaxed">
                  {article.content}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal text-center bg-[#F7FAFC] p-10 rounded-2xl border border-[#4A5568]/10">
          <h3 className="text-2xl font-bold text-[#1A202C] mb-3">
            Ready to Make the Right Engine Decision?
          </h3>
          <p className="text-[#4A5568] mb-6 max-w-2xl mx-auto">
            Our verified process eliminates guesswork. Let's talk about your engine — with real diagnostics, documented decisions, and accountability.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#003366] text-white px-8 py-4 rounded font-bold text-lg transition-all hover:bg-[#002244] hover:shadow-lg hover:-translate-y-0.5"
          >
            Get Expert Guidance
          </a>
        </div>
      </div>
    </section>
  );
};

export default EducationHub;
