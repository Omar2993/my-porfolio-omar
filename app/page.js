import React from "react";
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
// import BlackGlobe from "@/components/BlackGlobe";
import { motion, useMotionValue, animate } from "framer-motion";
import Hero from "@/components/Hero";
import AboutCards from "@/components/AboutCards";
import ProjectShowcase from "@/components/ProjectShowcase";
import SectionTitle from "@/components/SectionTitle";
import SkillSet from "@/components/SkillSet";
import CrimeSceneEffect from "@/components/CrimeSceneEffect";
import ProfileSection from "@/components/ProfileSection";
import Testimonials from "@/components/Testimonials";
import LastWord from "@/components/LastWord";



import FlowerSpinner from "@/components/FlowerSpinner";
import RotatingBubble from "@/components/RotatingBubble";

const Page = () => {
  return (
    <main className=" overflow-x-clip ">
      {/* <RotatingBubble/> */}
      {/* <FlowerSpinner/> */}
      <Hero />
      <AboutCards />
      <SectionTitle />
      <ProjectShowcase />
      <SkillSet />
      <CrimeSceneEffect />
      <ProfileSection />
      <Testimonials/>
      <LastWord/>
    </main>
  );
};

export default Page;
