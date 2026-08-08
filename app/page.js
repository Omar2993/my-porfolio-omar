import React from "react";
import Image from "next/image";
import { archivoBlack } from "@/app/fonts";
import { greatVibes } from "@/app/fonts";
import { inter } from "@/app/fonts";
import { saira } from "@/app/fonts";
// import BlackGlobe from "@/Components/BlackGlobe";
import { motion, useMotionValue, animate } from "framer-motion";
import Hero from "@/Components/Hero";
import AboutCards from "@/Components/AboutCards";
import ProjectShowcase from "@/Components/ProjectShowcase";
import SectionTitle from "@/Components/SectionTitle";
import SkillSet from "@/Components/SkillSet";
import CrimeSceneEffect from "@/Components/CrimeSceneEffect";
import ProfileSection from "@/Components/ProfileSection";
import Testimonials from "@/Components/Testimonials";
import LastWord from "@/Components/LastWord";



import FlowerSpinner from "@/Components/FlowerSpinner";
import RotatingBubble from "@/Components/RotatingBubble";

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
