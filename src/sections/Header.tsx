"use client";
import LogoIcon from "../assets/Ideathon_Logo_White.png";
import MenuIcon from "@/assets/icon-menu.svg";
import Buttonmain from "@/components/Buttonmain";
import Image from "next/image";
import { Link } from "react-scroll";
import Link1 from "next/link";

import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const navLinks = [
  {label: "Home", href: "#Home"},
  {label: "Themes", href: "#Themes"},
  {label: "Prizes", href: "#Prizes"},
  // {label: "Team", href: "#Team"},

];



export const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (<header className="py-4 border-b border-white/15 md:border-none sticky top-0 z-10">
    <div className="absolute inset-0 backdrop-blur -z-10 md:hidden"></div>
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:py-2.5 md:px-4 rounded-xl max-w-[1200px] mx-auto relative">
      <div className="absolute inset-0 backdrop-blur -z-10 hidden md:block"></div>

        <div className="justify-left flex w-[103px]">
          <Image src={LogoIcon} alt="Ideathon Logo" className='h-9 md:h-[40px] w-auto'/>
        </div>
          

        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">

        <nav className="flex gap-8 text-sm">
            <Link to="Home" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Home</Link>
            <Link to="Themes" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Themes</Link>
            <Link to="Prizes" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Prizes</Link>
            {/* <Link to="Team" spy={true} smooth={true} offset={50} duration={200} className="text-white/70 hover:text-white transition" style={{cursor:'pointer'}}>Team</Link> */}
          </nav>
          
        </div>

        <div className='flex justify-end gap-8'>
          <svg 
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f8f8f8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <line x1="3" y1="6" x2="21" y2="6" className={twMerge(
            "origin-left transition",
            isOpen && 'rotate-45 -translate-y-1')}></line>
          <line 
          x1="3" 
          y1="12" 
          x2="21"
          y2="12" 
          className={twMerge("transition", isOpen && "opacity-0")}
          ></line>
          <line x1="3" y1="18" x2="21" y2="18" className={twMerge(
            "origin-left transition",
            isOpen && '-rotate-45 translate-y-1')}></line>
          </svg>

            <div className="hidden md:flex">
              <SignedIn>
                <div className="flex gap-8">
                  <Link1 href="/dashboard" className="items-center justify-center text-sm hidden md:flex text-white/70 hover:text-white transition">
                    Dashboard
                  </Link1>
                  <Buttonmain href='#'>Log out</Buttonmain>
                </div>
                
              </SignedIn>
            </div>
          

          <SignedOut>
            <SignInButton>
              <div className="flex gap-8">
              <Link1 href="/sign-in" className="items-center justify-center text-sm hidden md:flex text-white/70 hover:text-white transition">
                Log in
              </Link1>

              <div className="hidden md:flex">
                <Buttonmain href='https://unstop.com/p/ideathon-20-2025-pimpri-chinchwad-university-maharashtra-1433066?lb=9PcWzBfl'>Register</Buttonmain>
              </div>
              </div>

            </SignInButton>
          </SignedOut>



          
          
        </div>
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial = {{height: 0}}
          animate = {{height: "auto"}}
          exit = {{height: 0}}
        className=' overflow-hidden'>
          <div className='flex flex-col items-center gap-4 py-4'>
        {navLinks.map(link => (
          <a href={link.href} key={link.label} className='text-opacity-60 text-white hover:text-opacity-100 transition'>
            {link.label}
          </a>
        ))}
        <div className="flex pt-6 flex-row gap-8">
        <SignedIn>
          <div className="flex gap-8">
             <Link1 href="/dashboard" className="items-center justify-center text-sm flex text-white/70 hover:text-white transition">
                    Dashboard
                  </Link1>
                 
            <Buttonmain href='#'>Log out</Buttonmain>
            </div>
          </SignedIn>

          <SignedOut>
            <SignInButton>

              <Link1 href="/sign-in" className="items-center justify-center text-sm hidden md:flex text-white/70 hover:text-white transition">
                Log in
              </Link1>

              <div className="hidden md:flex">
                <Buttonmain href='https://unstop.com/p/ideathon-20-2025-pimpri-chinchwad-university-maharashtra-1433066?lb=9PcWzBfl'>Register</Buttonmain>
              </div>

            </SignInButton>
          </SignedOut>
        </div>
        </div>
      </motion.div>
      )}
      </AnimatePresence>
      </div>


  </header>
  );
};
