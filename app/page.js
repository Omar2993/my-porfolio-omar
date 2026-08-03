import React from "react";
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
// import BlackGlobe from "@/Comonents/BlackGlobe";
import { motion, useMotionValue, animate } from "framer-motion";
import Hero from "@/Comonents/Hero";
import AboutCards from "@/Comonents/AboutCards";
import ProjectShowcase from "@/Comonents/ProjectShowcase";
import SectionTitle from "@/Comonents/SectionTitle";
import SkillSet from "@/Comonents/SkillSet";
import CrimeSceneEffect from "@/Comonents/CrimeSceneEffect";
import ProfileSection from "@/Comonents/ProfileSection";
import Testimonials from "@/Comonents/Testimonials";
import LastWord from "@/Comonents/LastWord";
import FlowerSpinner from "@/Comonents/FlowerSpinner";
import RotatingBubble from "@/Comonents/RotatingBubble";

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
