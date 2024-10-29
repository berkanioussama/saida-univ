import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const Hero = () => {

  const words = [
    {text: "Explore",className: "text-white"},
    {text: "the",className: "text-white"},
    {text: "Future",className: "text-blue-500 dark:text-blue-500",},
    {text: "with",className: "text-white"},
    {text: "Us.",
      className: "text-blue-500 dark:text-blue-500",},
  ];

  return (
    
      <div className="h-svh flex flex-col items-center justify-center text-center text-white">
        <TypewriterEffectSmooth words={words} />
        <h3 className="text-xl md:text-2xl xl:text-3xl font-semibold">Your Gateway to Innovation and Knowledge</h3>
      </div>
  );
}
 
export default Hero;