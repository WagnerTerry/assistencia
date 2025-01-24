"use client";

import { useState, useEffect } from "react";
import { NavMenu } from "./nav-menu";
import Image from "next/image";

import NegoBam from "../../images/bam.png";

export const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`px-4 py-4 flex font-bold text-lg items-center justify-center w-full bg-black z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0 shadow-lg" : "relative"
      }`}
    >
      <Image
        src={NegoBam}
        alt="Vou tacar"
        width={150}
        height={50}
        className="mr-10"
      />
      <NavMenu />
    </div>
  );
};
