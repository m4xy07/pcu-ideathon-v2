import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Footer } from "@/sections/Footer";
import Team from "@/sections/Themes";
import { CallToAction } from "@/sections/CallToAction";
import ScrollSec from "@/sections/ScrollSec";
import Prize from "@/sections/Prize";
import TeamSec from "@/sections/TeamSec";

export default function Home() {
  return (
    <>
      <Header />
      <Hero/> 
      <LogoTicker />
      <Team/>
      <ScrollSec/>
      <Prize/>
      {/* <TeamSec/> */}
      <CallToAction/>
      <Footer />
    </>
  
  );
}
