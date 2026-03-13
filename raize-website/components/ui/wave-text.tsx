"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface AnimatedTextProps {
    text?: string;
    className?: string;
    /** Disable standard brand highlighting for "AI" in "rAIze" */
    allowHighlight?: boolean;
}

function Text_03({
    text = "Hover me",
    className = "",
    allowHighlight = true,
}: AnimatedTextProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleMouseEnter = () => {
        if (!isPlaying) {
            setIsPlaying(true);
        }
    };

    return (
        <motion.span
            className={cn(
                "w-full text-center inline-block cursor-pointer transition-all",
                className
            )}
            onMouseEnter={handleMouseEnter}
            initial="initial"
            animate={isPlaying ? "hover" : "initial"}
        >
            {text.split("").map((char, index, arr) => {
                const isSpace = char === " ";
                const isAInRaize = char === "A" && arr[index - 1] === "r" && arr[index + 1] === "I";
                const isIInRaize = char === "I" && arr[index - 1] === "A" && arr[index - 2] === "r";
                const isBrandBlue = allowHighlight && (isAInRaize || isIInRaize);

                return (
                    <motion.span
                        key={index}
                        className={cn("inline-block", isSpace ? "w-[0.25em]" : "", isBrandBlue ? "text-primary" : "")}
                        onAnimationComplete={() => {
                            if (index === arr.length - 1) {
                                setIsPlaying(false);
                            }
                        }}
                        variants={{
                            initial: {
                                y: 0,
                                scale: 1,
                                paddingLeft: "0px",
                                paddingRight: "0px",
                            },
                            hover: {
                                y: [0, -6, 0],
                                scale: [1, 1.25, 1],
                                paddingLeft: ["0px", "3px", "0px"],
                                paddingRight: ["0px", "3px", "0px"],
                                transition: {
                                    duration: 0.7,
                                    times: [0, 0.5, 1],
                                    ease: "easeInOut",
                                    delay: index * 0.03,
                                },
                            },
                        }}
                    >
                        {isSpace ? "\u00A0" : char}
                    </motion.span>
                );
            })}
        </motion.span>
    );
}

export { Text_03 };
