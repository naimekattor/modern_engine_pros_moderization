"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="container mx-auto px-6 md:px-12 ">
        <h1 className="text-4xl md:text-5xl font-bold text-[#003366] mb-8 tracking-tight">Privacy Policy (California Compliant)</h1>
        <p className="text-[#4A5568] mb-12 italic">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

        <div className="space-y-8 text-[#4A5568] leading-relaxed">
          <p>
            Modern Engine Pros (“we,” “our,” or “us”) respects your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and protect personal information in accordance with the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA).
          </p>
          <p>
            This policy applies to California residents who visit our website, contact us, or use our services (such as engine decision guidance). It supplements any other notices we may provide and does not apply to information collected offline or through other means unless stated.
          </p>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Information We Collect</h2>
            <p>
              We collect personal information only when necessary to provide our services, respond to inquiries, or operate our website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1A202C] mb-3">Categories of Personal Information Collected</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Identifiers:</strong> name, email address, phone number</li>
              <li><strong>Customer Records:</strong> service-related information you voluntarily provide (e.g., vehicle details, preferences for engine recommendations)</li>
              <li><strong>Internet or Other Electronic Network Activity:</strong> IP address, browser type, device type, pages visited, time spent on pages</li>
              <li><strong>Professional or Employment-Related Information:</strong> details shared for decision guidance (e.g., vehicle-related professional context if provided)</li>
            </ul>
            <p className="mt-4">
              We do not collect sensitive personal information (as defined by CPRA, such as precise geolocation, racial/ethnic origin, health data, etc.) unless you voluntarily provide it in communications, and we do not use it beyond what is necessary for your inquiry or service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#1A202C] mb-3">Sources of Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Directly from you (e.g., inquiry forms, emails, phone calls, or service requests)</li>
              <li>Automatically from your device or browser (e.g., via cookies, server logs, analytics tools)</li>
              <li>From service providers assisting with website operations (e.g., hosting or communication tools)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">How We Use Personal Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responding to inquiries and communications</li>
              <li>Providing engine decision guidance and related services</li>
              <li>Improving website functionality and user experience</li>
              <li>Maintaining internal records for accountability and quality assurance</li>
              <li>Complying with legal obligations</li>
            </ul>
            <p className="mt-4">
              We do not use personal information for automated decision-making technology (ADMT) that produces significant effects concerning you, nor for profiling.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Disclosures of Personal Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>We have not sold any categories of personal information as defined under California law.</li>
              <li>We have not shared any categories of personal information for cross-context behavioral advertising.</li>
              <li>We disclose personal information only to trusted service providers for business purposes, to comply with legal obligations, or to protect our rights and safety. We do not disclose personal information for advertising or behavioral tracking.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Your California Privacy Rights</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to Know</li>
              <li>Right to Delete</li>
              <li>Right to Correct</li>
              <li>Right to Opt-Out of Sale or Sharing (not applicable)</li>
              <li>Right to Limit Use of Sensitive Personal Information</li>
              <li>Right to Non-Discrimination</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">How to Submit a Privacy Request</h2>
            <p>Email: <a href="mailto:info@modernenginepros.com" className="text-[#D32F2F] hover:underline">info@modernenginepros.com</a></p>
            <p>Phone: <a href="tel:+18184099494" className="text-[#D32F2F] hover:underline">+1 (818) 409-9494</a></p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Cookies and Analytics</h2>
            <p>
              Our website may use basic cookies or analytics tools for performance and usability. We do not use cookies for targeted advertising or cross-context behavioral tracking.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and physical safeguards to protect personal information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">External Links</h2>
            <p>
              We are not responsible for the privacy practices of third-party websites linked from our site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Policy Updates</h2>
            <p>
              We may update this Privacy Policy periodically. Updates will be posted with a revised effective date.
            </p>
          </div>

          <div className="pt-8 border-t border-[#4A5568]/20">
            <h2 className="text-2xl font-bold text-[#1A202C] mb-4">Contact Information</h2>
            <p className="font-bold text-[#003366]">Modern Engine Pros</p>
            <p>Glendale, CA</p>
            <p>Email: <a href="mailto:info@modernenginepros.com" className="text-[#D32F2F] hover:underline">info@modernenginepros.com</a></p>
            <p>Phone: <a href="tel:+18184099494" className="text-[#D32F2F] hover:underline">+1 (818) 409-9494</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
