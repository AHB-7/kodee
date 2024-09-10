"use client";

import { delay, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [isActive, setIsActive] = useState(false);

    // Bouncy scroll-up effect
    const containerVariants = {
        hidden: { opacity: 0, y: "100%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                delayChildren: 0.8, // Delay before starting link animations
            },
        },
    };

    const linkVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.6, // Each link staggered by 0.4s
                duration: 0.5,
            },
        }),
    };

    const links = [
        { href: "/PROJECTS", label: "BSTILL TIME" },
        { href: "/PROJECTS", label: "PROJEKTER" },
        { href: "/about", label: "OM KODEE" },
    ];

    return (
        <>
            <button
                className="fixed bottom-8 text-4xl font-extrabold z-20"
                onClick={() => setIsActive(!isActive)}
            >
                {isActive ? "CLOSE" : "MENU"}
            </button>

            <motion.nav
                className="fixed bottom-0 bg-brand-dark w-full h-screen text-brand-light flex flex-col py-4 ps-4 justify-center z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <div className="z-10 flex flex-col">
                    {links.map((link, i) => (
                        <motion.div
                            key={link.label}
                            custom={i}
                            variants={linkVariants}
                            animate={isActive ? "visible" : "hidden"}
                        >
                            <Link
                                href={link.href}
                                className="text-7xl font-extrabold py-2"
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </motion.nav>
        </>
    );
}
