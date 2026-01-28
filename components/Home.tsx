"use client";

import React, { useEffect } from 'react';
import Hero from './Hero';
import AccountabilitySection from './AccountabilitySection';
import About from './About';
import Services from './Services';
import HowItWorks from './HowItWorks';
import Educational from './Educational';
import EducationHub from './EducationHub';
import VehicleIntakeForm from './VehicleIntakeForm';
import StoreLinks from './StoreLinks';
import Contact from './Contact';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Home: React.FC = () => {
  useEffect(() => {
    // GSAP Reveal Animations
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach((element) => {
      gsap.fromTo(
        element,
        {
          autoAlpha: 0,
          y: 50,
        },
        {
          duration: 1,
          autoAlpha: 1,
          y: 0,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%", // Start animation when top of element hits 85% of viewport height
            toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
          },
        }
      );
    });
    
    // Refresh ScrollTrigger to ensure positions are correct after load
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill()); // Cleanup ScrollTriggers
    };
  }, []);

  return (
    <>
      <Hero />
      <AccountabilitySection />
      {/* Company Heritage */}
      <About />
      {/* What We Do + Core Services */}
      <Services />
      {/* Process Steps */}
      <HowItWorks />
      {/* Authority / Education */}
      <Educational />
      {/* Education Hub — Deep Dives */}
      <EducationHub />
      {/* Vehicle Intake Form */}
      <VehicleIntakeForm />
      {/* Ecosystem */}
      <StoreLinks />
      <Contact />
    </>
  );
};

export default Home;
