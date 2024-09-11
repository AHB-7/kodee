"use client";

import { motion } from "framer-motion";
import StartLogo from "./logo";

export default function HeroHome() {
    return (
        <>
            <div className="max-w-5xl relative">
                <div className=" absolute top-0 right-2">
                    <StartLogo />
                </div>
            </div>
            <div className="flex relative flex-col justify-start gap-8 pb-12 items-start px-1 sm:items-center h-screen">
                <div className="sticky top-0 translate-y-12">
                    <motion.h1
                        className=" text-start font-extrabold pb-2 uppercase sm:text-center"
                        initial={{
                            opacity: 0,
                            x: -250,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeIn",
                            delay: 1.3,
                        }}
                    >
                        Fra{" "}
                        <span className=" text-brand-primary block sm:inline-block">
                            {" "}
                            visjon
                        </span>{" "}
                        til
                        <span className=" text-brand-primary block sm:inline-block">
                            {" "}
                            virkelighet{" "}
                        </span>
                    </motion.h1>
                    <motion.h2
                        className="text-end sm:text-center p-0 text-3xl pt-8 pb-2"
                        initial={{ opacity: 0, x: 250 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeIn",
                            delay: 1.3,
                        }}
                    >
                        Kom i gang med å identifisere din bedrift!
                    </motion.h2>
                </div>
                <motion.div
                    className="self-center"
                    initial={{ opacity: 0, y: 250 }}
                    animate={{ opacity: 1, y: 40 }}
                    transition={{
                        duration: 0.6,
                        ease: "easeIn",
                        delay: 1.5,
                    }}
                >
                    <button className="primary-btn"> KONTAKT</button>
                </motion.div>
            </div>
        </>
    );
}
