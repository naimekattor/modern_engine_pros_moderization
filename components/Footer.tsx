import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F7FAFC] text-[#4A5568] py-20 border-t border-[#4A5568]/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          {/* Brand & About */}
          <div className="">
            <Link href="/" className="inline-block relative mb-4">
              <img src="/images/logo1.png" alt="Modern Engine Pros" className='w-[80px] h-auto object-contain' />
            </Link>
            <p className="text-sm leading-relaxed font-medium">
              Since 1979, Southern California's trusted partner for engine remanufacturing and automotive services. Verified quality. Real accountability.
            </p>
            <p className="text-xs mt-4 italic text-[#4A5568]/70">
              "Stay one step ahead without compromising quality in service."
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[#003366] font-bold text-sm tracking-tight mb-5">Navigation</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><a href="/" className="hover:text-[#003366] transition-colors">Home</a></li>
              <li><a href="/#services" className="hover:text-[#003366] transition-colors">Services</a></li>
              <li><a href="/#about" className="hover:text-[#003366] transition-colors">About</a></li>
              <li><a href="/#contact" className="hover:text-[#003366] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Online Stores & Contact */}
          <div>
            <h4 className="text-[#003366] font-bold text-sm tracking-tight mb-5">Stores & Contact</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <a 
                  href="https://www.cylinderheadstore.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#003366] transition-colors"
                >
                  CylinderHeadStore.com
                </a>
              </li>
              <li><a href="https://MEParts.com" target="_blank" className="hover:text-[#003366] transition-colors">MEParts.com</a></li>

              <li>
                <a 
                  href="tel:+18184099494" 
                  className="hover:text-[#003366] transition-colors"
                >
                  (818) 409-9494
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@modernenginepros.com" 
                  className="hover:text-[#003366] transition-colors"
                >
                  info@modernenginepros.com
                </a>
              </li>
              <li className="text-[#4A5568]/80">
                701 Sonora Ave, Glendale, CA 91201
              </li>
            </ul>
          </div>

          {/* Trust & Legal */}
          <div>
            <h4 className="text-[#003366] font-bold text-sm tracking-tight mb-5">Trusted Since 1979</h4>
            <div className="space-y-4">
              <p className="text-sm text-[#4A5568]/80">
                Serving greater Southern California with nationwide shipping. 40+ years of excellence in engine remanufacturing.
              </p>
              <ul className="text-xs font-medium space-y-2">
                <li><Link href="/privacy-policy" className="hover:text-[#003366] transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#4A5568]/10 text-center md:text-left text-xs font-medium text-[#4A5568]/50">
          <p>© {new Date().getFullYear()} Modern Engine Pros / Modern Engine Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;