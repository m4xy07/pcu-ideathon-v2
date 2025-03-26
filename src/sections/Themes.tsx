import React from "react";
import {
  Trees,
  Cross,
  BrainCog,
  GraduationCap,
  Boxes,
  UsersRound,
} from "lucide-react";
import Spline from "@splinetool/react-spline/next";



const Team = () => {
  return (
    <section
      id="Themes"
      className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="text-5xl text-center tracking-[0.2px] font-semibold text-white custom-hero-title-shadow">
                Themes
              </h2>
              <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
                Empowering Change with Innovation and Purpose.
              </p>

               
                 <div className="mx-auto w-full mt-8 md:ml-0 ml-[-60px]">
                  
                    <div className="relative overflow-hidden">
                    <div className="absolute bottom-4 right-0 bg-black w-[50px] md:w-[220px] h-[40px]" />
                    <Spline scene="https://prod.spline.design/tqfLknVH3p1UIu99/scene.splinecode" />
                    </div>
                
                </div> 

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] p-8 rounded-lg flex flex-col">
                <div className="p-2 rounded-md bg-gradient-to-b from-red-600/20 via-red-950/40 to-black w-fit">
                  <Trees className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg md:text-[20px] font-medium tracking-[0.2px] mt-4">
                  Sustainability & Environment
                </h3>
                <p className="text-[#9c9c9d] mt-4 text-base leading-tight font-medium tracking-[0.2px]">
                  Build solutions for a greener tomorrow tackling climate
                  change, pollution, and agricultural issues.
                </p>
              </div>
              <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] p-8 rounded-lg">
                <div className="p-2 rounded-md bg-gradient-to-b from-red-600/20 via-red-950/40 to-black w-fit">
                  <Cross className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg md:text-[20px] font-medium tracking-[0.2px] mt-4">
                  Healthcare & Well-being
                </h3>
                <p className="text-[#9c9c9d] mt-4 text-base leading-tight font-medium tracking-[0.2px]">
                  Innovate for better healthcare solutions, mental health, and
                  overall well-being of individuals.
                </p>
              </div>
              <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] p-8 rounded-lg">
                <div className="p-2 rounded-md bg-gradient-to-b from-red-600/20 via-red-950/40 to-black w-fit">
                  <BrainCog className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg md:text-[20px] font-medium tracking-[0.2px] mt-4">
                  AI and Technology
                </h3>
                <p className="text-[#9c9c9d] mt-4 text-base leading-tight font-medium tracking-[0.2px]">
                  Leverage AI and technology to build innovative solutions for
                  real-world problems.
                </p>
              </div>
              <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] p-8 rounded-lg">
                <div className="p-2 rounded-md bg-gradient-to-b from-red-600/20 via-red-950/40 to-black w-fit">
                  <GraduationCap className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg md:text-[20px] font-medium tracking-[0.2px] mt-4">
                  Education and Learning
                </h3>
                <p className="text-[#9c9c9d] mt-4 text-base leading-tight font-medium tracking-[0.2px]">
                  Enhance Learning experiences with tech driven tools for
                  accessibility, engagement, and effectiveness.
                </p>
              </div>
              <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] p-8 rounded-lg">
                <div className="p-2 rounded-md bg-gradient-to-b from-red-600/20 via-red-950/40 to-black w-fit">
                  <Boxes className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg md:text-[20px] font-medium tracking-[0.2px] mt-4">
                  Smart & Urban Development
                </h3>
                <p className="text-[#9c9c9d] mt-4 text-base leading-tight font-medium tracking-[0.2px]">
                  Develop solutions for smart cities and urban development to
                  improve quality of life and sustainability.
                </p>
              </div>
              <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] p-8 rounded-lg">
                <div className="p-2 rounded-md bg-gradient-to-b from-red-600/20 via-red-950/40 to-black w-fit">
                  <UsersRound className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-lg md:text-[20px] font-medium tracking-[0.2px] mt-4">
                  Social Impact
                </h3>
                <p className="text-[#9c9c9d] mt-4 text-base  leading-tight font-medium tracking-[0.2px]">
                  Design Solutions that promote diversity, equity, and
                  inclusion, and create a positive social impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center"></div>
      </div>
    </section>
  );
};

export default Team;
