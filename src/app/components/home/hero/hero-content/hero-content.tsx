"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
    const blobVariants = {
        animate: {
            d: [
                // Starting shape (relatively circular blob)
                "M50,100 C75,150 125,150 150,100 C175,50 125,0 100,50 C75,100 25,50 50,100 Z",
                // Irregular shape 1
                "M60,90 C90,140 140,160 170,110 C200,60 130,20 90,40 C50,60 10,90 60,90 Z",
                // Irregular shape 2
                "M50,120 C90,160 160,140 140,90 C120,40 70,10 50,50 C30,90 10,60 50,120 Z",
                // Irregular shape 3
                "M60,100 C100,180 160,140 160,80 C160,20 100,20 60,60 C20,100 20,80 60,100 Z",
                // Back to starting shape
                "M50,100 C75,150 125,150 150,100 C175,50 125,0 100,50 C75,100 25,50 50,100 Z",
            ],
            transition: {
                duration: 10, // Control how fast the animation should run
                repeat: Infinity,
                ease: "easeInOut", // Smooth transitions
            },
        },
    };
    return (
        <div className="flex gap-6 flex-col px-2">
            <motion.h1
                className="text-start"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 2.4,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                Små bedrifter, store muligheter
            </motion.h1>

            <motion.h2
                className="text-end"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    delay: 2.4,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                la oss innovere sammen
            </motion.h2>
            <div className=" flex justify-center">
                <svg
                    width="300"
                    height="300"
                    viewBox="0 0 200 200"
                    className="scale-100 hover:scale-110 transform-origin-center duration-500 hover:cursor-pointer"
                >
                    {/* Dynamic blob animation */}
                    <motion.path
                        d="M50,100 C75,150 125,150 150,100 C175,50 125,0 100,50 C75,100 25,50 50,100 Z"
                        fill="none"
                        stroke="green"
                        strokeWidth="2"
                        variants={blobVariants}
                        animate="animate"
                    />
                    {/* Central Circle */}
                    <circle
                        cx="100"
                        cy="100"
                        r="50"
                        stroke="green"
                        strokeWidth="2"
                        fill="none"
                    />
                    {/* KONTAK Text */}
                    <text
                        x="100"
                        y="105"
                        textAnchor="middle"
                        fontSize="20"
                        fill="white"
                    >
                        KONTAK
                    </text>
                </svg>
            </div>
        </div>
    );
}
