"use client";

import { delay, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import StartLogo from "../home/hero/logo";
import { IoPaperPlaneSharp } from "react-icons/io5";
import Image from "next/image";

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
        hidden: { opacity: 1, y: -100 },
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
        { href: "/PROJECTS", label: "BSTILL TIME" },
        { href: "/PROJECTS", label: "PROJEKTER" },
        { href: "/about", label: "OM KODEE" },
    ];

    return (
        <>
            <div className="flex justify-between items-center max-w-xl px-2 w-full text-brand-light fixed bottom-8 text-4xl font-extrabold z-20">
                <Link
                    href=""
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
                    href=""
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
            </div>

            <motion.nav
                className="fixed bottom-0 bg-brand-dark w-full h-screen text-brand-light flex flex-col py-4 justify-between z-10"
                variants={containerVariants}
                initial="hidden"
                animate={isActive ? "visible" : "hidden"}
            >
                <div className="flex items-center justify-center mx-auto scale-150">
                    <StartLogo />
                </div>
                <div className="z-10 flex flex-col justify-center xs:items-center">
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
                            >
                                {link.label}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                <div></div>
            </motion.nav>
        </>
    );
}
