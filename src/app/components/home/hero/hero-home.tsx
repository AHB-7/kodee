"use client";

import { motion } from "framer-motion";

export default function HeroHome() {
    return (
        <div className="flex flex-col justify-center gap-8 pb-12 items-center h-screen">
            <div className="text-white">
                <motion.h1
                    className="text-start font-extrabold pb-2 uppercase lg:text-center"
                    initial={{ opacity: 0, x: -250 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeIn",
                        delay: 1,
                    }}
                >
                    Fra{" "}
                    <span className=" text-brand-primary block lg:inline-block">
                        {" "}
                        visjon
                    </span>{" "}
                    til
                    <span className=" text-brand-primary block">
                        {" "}
                        virkelighet{" "}
                    </span>
                </motion.h1>

                <motion.h2
                    className="text-end lg:text-center"
                    initial={{ opacity: 0, x: 250 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeIn",
                        delay: 1,
                    }}
                >
                    la oss innovere sammen
                </motion.h2>
            </div>
            <motion.div
                className=""
                initial={{ opacity: 0, y: 150 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeIn",
                    delay: 1,
                }}
            >
                <button className="primary-btn">KONTAKT</button>
            </motion.div>
        </div>
    );
}
