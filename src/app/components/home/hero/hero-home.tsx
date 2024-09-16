"use client";

import { motion } from "framer-motion";
import StartLogo from "../logo";
import Image from "next/image";
import Link from "next/link";

export default function HeroHome() {
    // Define the variants for each span
    const spanVariants = {
        initial: { opacity: 0, x: -50 },
        animate: (customDelay: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: customDelay, // Stagger based on custom prop
                duration: 0.5,
                ease: "easeInOut",
            },
        }),
    };

    return (
        <>
            <div className="max-w-5xl relative">
                <div className="absolute top-0 right-2">
                    <StartLogo />
                </div>
            </div>
            <div className="flex relative flex-col justify-start gap-2 items-start px-1 sm:items-center h-screen">
                <div className="absolute top-0 w-screen h-full rotate-180 opacity-30 -z-10">
                    <Image
                        src="/background/123.jpeg"
                        fill
                        alt=""
                        className="object-cover"
                    />
                    <div className="h-screen w-full bg-gradient-to-b absolute from-brand-dark to-transparent"></div>
                </div>
                <div className="sticky top-0 ms-4 sm:mx-auto">
                    <motion.h1
                        className="text-start font-extrabold pb-2 uppercase sm:text-center"
                        initial="initial"
                        animate="animate"
                    >
                        <motion.span
                            variants={spanVariants}
                            custom={0.2} // Delay for the first span
                        >
                            Fra
                        </motion.span>{" "}
                        <motion.span
                            className="text-brand-primary block sm:inline-block"
                            variants={spanVariants}
                            custom={0.4} // Delay for the second span
                        >
                            visjon
                        </motion.span>{" "}
                        <motion.span
                            variants={spanVariants}
                            custom={0.6} // Delay for the third span
                        >
                            til
                        </motion.span>{" "}
                        <motion.span
                            className="text-brand-primary block sm:inline-block"
                            variants={spanVariants}
                            custom={0.8}
                        >
                            virkelighet
                        </motion.span>
                    </motion.h1>
                    <motion.h2
                        className="under-title-hero"
                        initial={{ opacity: 0, x: 250 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeIn",
                            delay: 0.4,
                        }}
                    >
                        Kom i gang med å identifisere <br />
                        <span>din idé!</span>
                    </motion.h2>
                </div>
                <motion.div
                    className="self-center"
                    initial={{ opacity: 0, y: 250 }}
                    animate={{ opacity: 1, y: 40 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 0.7,
                    }}
                >
                    <button className="primary-btn">
                        <Link href="/message" className="pb-2">
                            KONTAKT
                        </Link>
                    </button>
                </motion.div>
            </div>
        </>
    );
}
