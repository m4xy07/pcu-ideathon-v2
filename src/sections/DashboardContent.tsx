import { AccordionIcons } from "@/components/Accordion";
import { RadioGroupForm } from "@/components/Dashboard/formtop3";
import { SelectFormTop5 } from "@/components/Dashboard/formtop5";
import { NumberTickerDemo } from "@/components/NumberTicker";
import React from "react";

const DashboardContent = () => {
  return (
    <section id="Prizes" className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] ">
      <div className="container mx-auto ">
      <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <h2 className="text-5xl text-center tracking-[0.2px] font-semibold text-white custom-hero-title-shadow">
                Vote
              </h2>
              <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
                Select the 5 teams you liked the most.
              </p>

              
            </div>
            {/* <RadioGroupForm /> */}
            <SelectFormTop5 />
      </div>
    </section>
  );
};

export default DashboardContent;

