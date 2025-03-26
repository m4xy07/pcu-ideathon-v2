'use client';
import { useState, useEffect } from "react";
import Balatro from "@/components/Balatro/Balatro";
import ModernAnimatedButtonVariant1 from "@/components/RaycastButton";
import Image from "next/image";

export const Hero = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="Home"
      className="h-[492px] md:h-[800px] flex items-center justify-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
    >
      <Balatro isRotate={false} mouseInteraction={false} pixelFilter={2000} spinRotation={-2.0} spinSpeed={7.0} />

      <div className="container absolute flex flex-col items-center justify-center h-full text-center">
        {/* Animated Image */}
        <div
          className={`h-72 w-72 flex items-center justify-center transition-opacity duration-1000 ${showContent ? "opacity-0" : "animate-scalePulse"}`}
        >
          <Image src="/images/Heist_Card.png" alt="Heist Card" width={1920} height={1080} className="mx-auto" />
        </div>
        {/* Fade-in Content */}
        <div
          className={`transition-all absolute duration-1000 delay-500 flex flex-col items-center justify-center h-full ${showContent ? "opacity-100 translate-y-2" : "opacity-0 translate-y-5"}`}
        >
          <div className="gap-0">
            <Image src="/images/PCU_Logo.png" alt="PCU Logo" width={200} height={200} className="items-center justify-center mx-auto pb-4"/>
          {/* <h1 className="text-5xl md:text-[48px] font-semibold text-white custom-hero-title-shadow">
          PCU&apos;s
          </h1> */}
          <h1 className="text-5xl md:text-[72px] font-semibold text-white custom-hero-title-shadow">
            Ideathon 2.0
          </h1>
            <h1 className="text-5xl md:text-[48px] font-semibold text-white custom-hero-title-shadow">
            2K25
          </h1>
          </div>
          <p className="text-base md:text-xl text-white tracking-[0.2px] mt-5 max-w-xl custom-text-shadow">
            PCU&apos;s Ideathon 2.0 is a platform for students to showcase their innovative ideas and solutions to real-world problems.
          </p>
          <div className="pt-8 md:pt-16">
            <ModernAnimatedButtonVariant1 />
          </div>
        </div>
      </div>

      {/* Custom animation for scale pulse */}
      <style jsx>{`
        @keyframes scalePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-scalePulse {
          animation: scalePulse 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};
