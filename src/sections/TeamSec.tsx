import { MorphingDialogBasicOne } from "@/components/morphing-dialog-card";
import React from "react";

const TeamSec = () => {
  return (
    <section
      id="Prizes"
      className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]"
    >
      <div className="container mx-auto">
        <div className="mx-auto mb-[60px] max-w-[510px] text-center">
          <h2 className="text-5xl text-center tracking-[0.2px] font-semibold text-white custom-hero-title-shadow">
            Team
          </h2>
          <p className="text-white/70 text-lg text-center mt-5 tracking-tight">
            Discover the Visionaries Driving Innovation – Meet Our Team.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 justify-center">
          <div className="w-full flex md:flex-row gap-6 pb-6 flex-col">
            <MorphingDialogBasicOne
              dialogData={{
                title: "Dr. Swati Shirke-Deshmukh",
                imageSrc: "/images/Team/SwatiShirke.webp",
                imageAlt: "Swati Shirke-Deshmukh [Faculty co-ordinator]",
                subtitle: "Faculty co-ordinator",
                description:
                  "Dr. Swati Shirke-Deshmukh is a faculty co-ordinator of the team. She is an Associate Professor in the department of Computer Engineering at PCU. She has a keen interest in the field of Machine Learning and Artificial Intelligence.",
              }}
            />

            <MorphingDialogBasicOne
              dialogData={{
                title: "Arfiya Shikalgar",
                imageSrc: "/images/Team/Member5.webp",
                imageAlt: "Arfiya Shikalgar - President",
                subtitle: "President",
                description:
                  "Arfiya Shikalgar is the President of the student chapter, Innovare. She is a third-year student of Computer Engineering at PCU.",
              }}
            />

            <MorphingDialogBasicOne
              dialogData={{
                title: "Aditya Jadhav",
                imageSrc: "/images/Team/AdityaJ.webp",
                imageAlt: "Aditya Jadhav - Vice-President",
                subtitle: "Vice-President",
                description:
                  "Aditya Jadhav is the Vice-President of the student chapter, Innovare. He is a second-year student of Computer Engineering at PCU.",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSec;
