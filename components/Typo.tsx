"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Get",
    },
    {
      text: "Your Personal ",
    },
    {
      text: "AI Trainer",
    },
    {
      text: "On",
    },
    {
      text: "MysticFit.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div id="home" className="flex flex-col items-center justify-center h-[40rem] bg-black  ">
      <p className="text-neutral-200 text-xs sm:text-base  ">
      Good form is the foundation of every great workout
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Download now
        </button> */}
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          <a href="/download" target="blank">Download Now</a>
        </button>
      </div>
    </div>
  );
}
