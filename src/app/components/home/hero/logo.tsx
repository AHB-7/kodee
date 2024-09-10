"use client";

import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import { useState } from "react";

export default function StartLogo() {
    const [progress, setProgress] = useState(0);

    useAnimationFrame((t) => {
        const duration = 2400; // 2.4 seconds
        const currentProgress = Math.min((t / duration) * 100, 100);
        setProgress(Number(currentProgress.toFixed(0)));
    });

    const circleRadius = 50;
    // const circleCircumference = 2 * Math.PI * circleRadius;

    return (
        <div className=" w-full mx-auto -z-20 max-w-5xl relative">
            <motion.div
                className="absolute top-0 right-0"
                initial={{ opacity: 0, y: -200 }}
                animate={{ opacity: 1, y: 10 }}
                transition={{
                    duration: 0.8,
                    delay: 0.8,
                    ease: "easeOut",
                }}
            >
                <Image
                    className=" w-24"
                    src="/assets/kodee-log-light.svg"
                    alt="Logo av Kodee som visser navn på Kodee me en linje som går i midten av logo"
                    width={250}
                    height={100}
                />
            </motion.div>

            {/* <motion.svg
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
            </motion.svg> */}
        </div>
    );
}
