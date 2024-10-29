'use client';
import Hero from "@/app/sections/Hero";
import Navbar from "./sections/navbar";
import Services from "./sections/services";
import Testimonials from "./sections/testimonials";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import About from "./sections/about";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col bg-mainBg w-full">
        <Navbar/>
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <Contact/>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
