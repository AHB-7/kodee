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
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="flex flex-col justify-end pb-12 items-center h-screen">
            <div className="px-2 text-white">
                <motion.h1
                    className="text-start font-bold pb-6"
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
            </div>

            {/* Blob and Button Section (Larger Part of Golden Ratio - 1.618x) */}
            <motion.div
                className="flex justify-center relative scale-100 hover:scale-125 duration-500 hover:cursor-pointer"
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 2.4, // Delay the appearance only
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                <motion.div
                    whileHover={{ scale: 1.2 }} // Hover effect independent from appearance delay
                    transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className="cursor-pointer"
                >
                    <motion.svg
                        width="300"
                        height="300"
                        viewBox="0 0 200 200"
                        animate={{ rotate: 360 }} // Continuously rotate without resetting
                        transition={{
                            duration: 10, // Duration for one full rotation
                            repeat: Infinity, // Keep rotating infinitely
                            ease: "linear", // Smooth, continuous rotation without restart
                        }}
                    >
                        {/* Dynamic blob animation */}
                        <motion.path
                            d="M50,100 C75,150 125,150 150,100 C175,50 125,0 100,50 C75,100 25,50 50,100 Z"
                            fill="none"
                            strokeWidth="1"
                            className="stroke-brand-light"
                            variants={blobVariants}
                            animate="animate"
                        />
                        <circle
                            cx="100"
                            cy="100"
                            r="50"
                            className="stroke-brand-light"
                            strokeWidth="1"
                            fill="none"
                        />
                    </motion.svg>

                    {/* Centered KONTAKT text */}
                    <div
                        className="absolute text-2xl font-bold text-white"
                        style={{
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)", // Proper centering
                        }}
                    >
                        KONTAKT
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
}
