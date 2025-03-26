import { AccordionIcons } from "@/components/Accordion";
import { NumberTickerDemo } from "@/components/NumberTicker";
import React from "react";

const DashboardContent = () => {
  return (
    <section id="Prizes" className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] ">
      <div className="container mx-auto ">
      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="text-5xl text-center tracking-[0.2px] font-semibold text-white custom-hero-title-shadow">
                Phases & Prizes
              </h2>
              <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
                Empowering Change with Innovation and Purpose.
              </p>

              {/* <div className="h-[500px] w-[500px] mx-auto">
                <Model />
              </div> */}
              
            </div>
        <div className="flex flex-col items-center gap-12 justify-center">
        <div className="-mx-4 flex flex-col w-full">
                <AccordionIcons/>
        </div>

        <div className="-mx-4 flex flex-col justify-center w-full pt-4 items-center gap-4">
            <h3 className="text-[32px] tracking-[0.2px] font-semibold text-white custom-hero-title-shadow">
                Prize Pool
            </h3>
          <div className="flex flex-row">
            <span className="text-8xl font-medium tracking-tighter text-black dark:text-white pr-2">₹</span>
            <NumberTickerDemo />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 py-4 m-4 w-full">
            <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] !prize-card-glow p-8 rounded-lg flex flex-col items-center gap-4">
                <h3 className="text-lg text-[#e0e0e0] md:text-[18px] font-normal tracking-[0.2px]">
                    1st Prize
                </h3>
                <p className="text-white text-xl leading-tight font-semibold tracking-[0.2px]">
                    ₹ 25,000
                </p>
                <div className="rounded-lg bg-[linear-gradient(180deg,hsla(0,0%,100%,.03),hsla(0,0%,100%,.1))] shadow-[inset_0_1px_0_0_hsla(0,0%,100%,.05),_0_0_0_1px_hsla(0,0%,100%,.25),_inset_0_-1px_0_0_rgba(0,0,0,.2)] py-2 px-3">
                    <p className="text-sm text-">+ Certificate</p>
                </div>
            </div>
            <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] !prize-card-glow p-8 rounded-lg flex flex-col items-center gap-4">
                <h3 className="text-lg text-[#e0e0e0] md:text-[18px] font-normal tracking-[0.2px]">
                    2nd Prize
                </h3>
                <p className="text-white text-xl leading-tight font-semibold tracking-[0.2px]">
                    ₹ 15,000
                </p>
                <div className="rounded-lg bg-[linear-gradient(180deg,hsla(0,0%,100%,.03),hsla(0,0%,100%,.1))] shadow-[inset_0_1px_0_0_hsla(0,0%,100%,.05),_0_0_0_1px_hsla(0,0%,100%,.25),_inset_0_-1px_0_0_rgba(0,0,0,.2)] py-2 px-3">
                    <p className="text-sm text-">+ Certificate</p>
                </div>
            </div>
            <div className="bg-[linear-gradient(137deg,#111214_4.87%,#0c0d0f_75.88%)] border border-[hsla(0,0%,100%,0.06)] !prize-card-glow p-8 rounded-lg flex flex-col items-center gap-4">
                <h3 className="text-lg text-[#e0e0e0] md:text-[18px] font-normal tracking-[0.2px]">
                    3rd Prize
                </h3>
                <p className="text-white  text-xl leading-tight font-semibold tracking-[0.2px]">
                    ₹ 10,000
                </p>
                <div className="rounded-lg bg-[linear-gradient(180deg,hsla(0,0%,100%,.03),hsla(0,0%,100%,.1))] shadow-[inset_0_1px_0_0_hsla(0,0%,100%,.05),_0_0_0_1px_hsla(0,0%,100%,.25),_inset_0_-1px_0_0_rgba(0,0,0,.2)] py-2 px-3">
                    <p className="text-sm text-">+ Certificate</p>
                </div>
            </div>
            
        </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardContent;

