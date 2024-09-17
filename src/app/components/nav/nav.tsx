"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import StartLogo from "../home/logo";
import Image from "next/image";

export default function Nav() {
    const [isActive, setIsActive] = useState(false);

    const minifyVariants = {
        hidden: {
            opacity: 0,
            y: "100%",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 1,
                duration: 0.6,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                delay: 1,
                damping: 15,
                delayChildren: 0.8,
            },
        },
    };
    // Bouncy scroll-up effect for the container
    const containerVariants = {
        hidden: {
            opacity: 0,
            y: "100%",
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.5,
                duration: 0.6,
            },
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delayChildren: 0.8,
            },
        },
    };

    // Link animation variants
    const linkVariants = {
        hidden: (i: number) => ({
            opacity: 1,
            y: 500,
            transition: {
                delay: i * 0.05,
                duration: 0.2,
            },
        }),
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.1,
            },
        }),
    };

    const links = [
        { href: "/", label: "Hjem" },
        { href: "/projects", label: "Prosjekter" },
        { href: "/om", label: "Om" },

        // { href: "/blog", label: "Blog" },
    ];

    return (
        <>
            <motion.div
                className="flex justify-between items-center max-w-xl px-2 w-full text-brand-light fixed bottom-8 text-4xl font-extrabold z-20"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.4,
                    ease: "easeIn",
                    delay: 1.2,
                    once: true,
                }}
            >
                <Link
                    href="/message"
                    className="flex items-center justify-center size-14 rounded-full group hover:bg-brand-primary hover:bg-opacity-60 duration-300"
                >
                    <Image
                        src="/assets/message.svg"
                        alt=""
                        width={35}
                        height={35}
                        className="group-hover:scale-125 duration-300"
                    />
                </Link>
                <button className="" onClick={() => setIsActive(!isActive)}>
                    {isActive ? "CLOSE" : "MENU"}
                </button>
                <Link
                    href="tel:+479898478"
                    className="flex items-center justify-center size-14 rounded-full group hover:bg-brand-primary hover:bg-opacity-60 duration-300"
                >
                    <Image
                        src="/assets/phone.svg"
                        alt=""
                        width={35}
                        height={35}
                        className="group-hover:scale-125 duration-300"
                    />
                </Link>
            </motion.div>

            <motion.nav
                className="fixed bottom-0 bg-brand-dark w-full h-full text-brand-light flex flex-col py-4 justify-between z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                {/* <div className="flex items-center justify-center mx-auto scale-150">
                    <StartLogo />
                </div> */}
                <div></div>
                <div className="z-10 flex flex-col justify-center w-full max-w-sm mx-auto pb-8">
                    {links.map((link, i) => (
                        <motion.div
                            key={link.label}
                            custom={i}
                            variants={linkVariants}
                            animate={isActive ? "visible" : "hidden"}
                            className="nav-link duration-300"
                        >
                            <Link
                                href={link.href}
                                className="text-7xl font-extrabold"
                                onClick={() => setIsActive(false)} // Close menu when a link is clicked
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                    {/* <motion.div
                        className=" flex gap-3 w-full max-w-xs pe-4 justify-end items-end mt-4"
                        variants={minifyVariants}
                        initial="hidden"
                        animate={isActive ? "visible" : "hidden"}
                    >
                        <Link
                            href="/om"
                            className="text-xl font-bold text-brand-primary"
                        >
                            Om Kodee
                        </Link>
                    </motion.div> */}
                </div>
                <div></div>
            </motion.nav>
        </>
    );
}
