"use client";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function TyperEffect() {
  const words = [
    {
      text: "Annocement.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className=" text-sm  ">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
