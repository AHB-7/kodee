"use client";

import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

export default function StartAnimation() {
    const [progress, setProgress] = useState(0);

    useAnimationFrame((t) => {
        const duration = 2400; // 2.4 seconds
        const currentProgress = Math.min((t / duration) * 100, 100);
        setProgress(Number(currentProgress.toFixed(0)));
    });

    const circleRadius = 50;
    const circleCircumference = 2 * Math.PI * circleRadius;

    return (
        <div className="flex flex-col justify-center items-center h-screen absolute mx-auto">
            <motion.div
                className="flex justify-center items-center "
                initial={{ opacity: 0 }} // Start invisible
                animate={{
                    opacity: [0, 1, 0, 1, 0.2, 1, 0.1, 1, 0.3, 0.9, 0.6, 1],
                    y: [0, 0, -380],
                    scale: [0.5, 0.8, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0.3],
                }}
                transition={{
                    duration: 2.4,
                    opacity: {
                        times: [
                            0, 0.05, 0.1, 0.15, 0.25, 0.35, 0.45, 0.55, 0.7,
                            0.85, 0.95, 1,
                        ],
                        duration: 2,
                    },
                    y: {
                        delay: 2.2,
                        duration: 0.4,
                        ease: "easeOut",
                    },
                }}
            >
                <Image
                    className="object-contain"
                    src="/assets/kodee-log-light.svg"
                    alt="alt"
                    width={400}
                    height={200}
                />
            </motion.div>

            <motion.svg
                width="120"
                height="120"
                className="relative"
                initial={{ opacity: 1, display: "block" }} // Start fully visible
                animate={{ opacity: 0, display: "none" }}
                transition={{
                    opacity: {
                        duration: 0.3,
                        delay: 2.2, // Disappear right when the image starts moving up
                    },
                    display: {
                        delay: 2.2,
                        duration: 0.4,
                        ease: "easeOut",
                    },
                }}
            >
                <circle
                    cx="60"
                    cy="60"
                    r={circleRadius}
                    strokeWidth="1"
                    fill="transparent"
                    className=" stroke-brand-primary"
                />
                <motion.circle
                    cx="60"
                    cy="60"
                    r={circleRadius}
                    strokeWidth="5"
                    fill="transparent"
                    className="stroke-brand-primary"
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={circleCircumference}
                    animate={{
                        strokeDashoffset: [circleCircumference, 0],
                    }}
                    transition={{
                        duration: 2.2,
                        ease: "easeIn",
                    }}
                />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="20"
                    fill="white"
                >
                    {progress}%
                </text>
            </motion.svg>
        </div>
    );
}
