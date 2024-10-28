'use client';
import Hero from "@/app/sections/Hero";
import Navbar from "./sections/navbar";
import Services from "./sections/services";
import Testimonials from "./sections/testimonials";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import About from "./sections/about";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col bg-mainBg">
        <Navbar/>
        <Hero />
        <Services />
        <Testimonials />
        <About/>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
