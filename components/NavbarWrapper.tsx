"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

const NavbarWrapper: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <Navbar scrolled={scrolled} />;
};

export default NavbarWrapper;
