"use client";

import { motion } from "framer-motion";
import StartLogo from "../logo";

export default function HeroHome() {
    return (
        <>
            <div className="max-w-5xl relative">
                <div className=" absolute top-0 right-2">
                    <StartLogo />
                </div>
            </div>
            <div className="flex relative flex-col justify-start gap-2 items-start px-1 sm:items-center h-screen">
                <div className="sticky top-0 mx-auto">
                    <motion.h1
                        className="text-start font-extrabold pb-2 uppercase sm:text-center"
                        initial={{
                            opacity: 0,
                            x: -250,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeIn",
                            delay: 0.1,
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
                        className="under-title-hero"
                        initial={{ opacity: 0, x: 250 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeIn",
                            delay: 0.4,
                        }}
                    >
                        Kom i gang med å identifisere <br />{" "}
                        <span>din idee!</span>
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
                    <button className="primary-btn"> KONTAKT</button>
                </motion.div>
            </div>
        </>
    );
}
