"use client";
import LayoutTextFlipComponent from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";

const LayoutTextFlip = () => {
  return (
    <div className="w-auto flex flex-col items-center justify-center">
      <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
        <LayoutTextFlipComponent
          text="I am a "
          words={["Backend", "Frontend", "C#", "Fullstack"]}
          textLast="Developer"
        />
      </motion.div>
    </div>
  );
};
export default LayoutTextFlip;
