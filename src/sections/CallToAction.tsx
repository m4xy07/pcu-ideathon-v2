'use client';
import Button from "@/components/Buttonmain";
import starsBg from "@/assets/stars.png";
import gridlines from "@/assets/grid-lines.png";
import {motion, useMotionTemplate, useMotionValue, useScroll, useTransform} from "framer-motion";
import { RefObject, useEffect, useRef } from "react";
import LiquidChrome from "@/components/LiquidChrome/LiquidChrome";
import ModernAnimatedButtonVariant1 from "@/components/RaycastButton";



export const CallToAction = () => {
  
  return (
  <section className="py-16">
  <div className="container">
  <div style={{ width: '100%', height: '600px', position: 'relative', borderRadius: '20px', overflow: 'hidden' }}>
    <div className="absolute text-center justify-center mx-auto" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 2 }}>
    <span className="text-[48px] tracking-[0.2px] font-semibold text-white custom-hero-title-shadow">
      Innovate, Build, Win.
    </span>
    <div className="pt-8">
      <ModernAnimatedButtonVariant1 />
    </div>
    </div>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', opacity: 0.4, zIndex: 1 }}></div>
    <LiquidChrome
    baseColor={[0.35, 0.1, 0.1]}
    speed={0.3}
    amplitude={0.3}
    interactive={true}
    />
  </div>
  </div>
  </section>
  );
};
