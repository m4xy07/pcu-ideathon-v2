import React from "react";
import { ScrollBasedVelocityDemo } from "@/components/VelocityScroll";

const Team = () => {
  return (
    <section id="team" className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px] ">
      <div className="container mx-auto ">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <ScrollBasedVelocityDemo />
            </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          
        </div>
      </div>
    </section>
  );
};

export default Team;

