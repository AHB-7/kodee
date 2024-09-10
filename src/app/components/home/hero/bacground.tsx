"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Background() {
    // Example animation variants for images
    const imageVariantsOne = {
        hidden: {
            opacity: 0,
            y: 300,
            filter: "saturate(0)",
        },
        visible: {
            opacity: 1,
            height: "120%",
            y: 90,
            filter: "saturate(1)",
            transition: {
                ease: "easeInOut",
                duration: 1,
                filter: {
                    duration: 4,
                    delay: 1,
                    ease: "easeInOut",
                },
            },
        },
    };

    const imageVariantsTwo = {
        hidden: {
            opacity: 0,
            height: "50%",
            filter: "saturate(0)",
            y: -600,
        },
        visible: {
            opacity: 1,
            height: "170%",
            y: 90,
            filter: "saturate(1)",
            transition: {
                ease: "easeInOut",
                duration: 1,
                filter: {
                    duration: 4,
                    delay: 1,
                    ease: "easeInOut",
                },
            },
        },
    };

    const imageVariantsThree = {
        hidden: {
            opacity: 0,
            height: "70%",
            y: 950,
            filter: "saturate(0)",
        },
        visible: {
            opacity: 1,
            height: "140%",
            filter: "saturate(1)",
            y: 90,
            transition: {
                ease: "easeInOut",
                duration: 1,
                filter: {
                    duration: 4,
                    delay: 1,
                    ease: "easeInOut",
                },
            },
        },
    };

    const imageVariantsFour = {
        hidden: {
            opacity: 0,
            height: "70%",
            y: -800,
            filter: "saturate(0)",
        },
        visible: {
            opacity: 1,
            height: "100%",
            y: 90,
            filter: "saturate(1)",
            transition: {
                ease: "easeInOut",
                duration: 1,
                filter: {
                    duration: 4,
                    delay: 1,
                    ease: "easeInOut",
                },
            },
        },
    };

    // State to track hue value

    return (
        <div className="absolute background-image lg-px-56 border-none top-0 -translate-y-44">
            <motion.div
                className="background-image "
                initial="hidden"
                animate="visible"
                variants={imageVariantsOne}
            >
                <div className=" max-w-[12rem] w-full h-3/6 sticky top-0">
                    <Image
                        src="/1.png"
                        alt="Background Image"
                        sizes="300"
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                        priority
                    />
                </div>
            </motion.div>

            <motion.div
                className="background-image"
                initial="hidden"
                animate="visible"
                variants={imageVariantsTwo}
            >
                <div className="max-w-[12rem] w-full h-3/6 sticky top-0">
                    <Image
                        src="/2.png"
                        alt="Background Image"
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="300"
                        className="rounded-full"
                        priority
                    />
                </div>
            </motion.div>

            <motion.div
                className="background-image"
                initial="hidden"
                animate="visible"
                variants={imageVariantsThree}
            >
                <div className=" max-w-[12rem] w-full h-3/6 sticky top-0 ">
                    <Image
                        src="/3.png"
                        alt="Background Image"
                        fill
                        sizes="300"
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                        priority
                    />
                </div>
            </motion.div>

            <motion.div
                className="background-image"
                initial="hidden"
                animate="visible"
                variants={imageVariantsFour}
            >
                <div className="max-w-[12rem] w-full h-3/6 sticky top-0">
                    <Image
                        src="/4.png"
                        alt="Background Image"
                        sizes="300"
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                        priority
                        fill
                    />
                </div>
            </motion.div>
        </div>
    );
}
