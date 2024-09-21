"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

interface CardProps {
    title: string;
    tools: string;
    src: string;
    description: string;
    i: number;
    link: string;
}
export default function Card({
    i,
    title,
    tools,
    src,
    description,
    link,
}: CardProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "start start"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scaleContainer = useTransform(
        scrollYProgress,
        [0, 1], // When the next card is starting to come into view (from 60% to 100% progress)
        [1, 0.87] // Scale from 1 to 0.8 when the next card is in view
    );
    return (
        <div
            ref={container}
            className=" flex items-center flex-col-reverse lg:flex-row justify-center h-screen w-full gap-12 sticky top-0 border rounded-xl p-4 backdrop-blur-3xl bg-brand-dark bg-opacity-25"
            style={{
                transform: `scale(${scaleContainer.get() - 0.02 * i})`,
                top: `calc(0% + ${i * 20}px`,
            }}
        >
            <div className="relative w-full overflow-hidden h-[20rem] rounded-lg">
                <motion.div className="w-full h-full" style={{ scale: scale }}>
                    <Image src={src} alt={description} fill objectFit="cover" />
                </motion.div>
            </div>
            <div className="w-full max-w-xl lg:max-w-full mx-auto text-center lg:text-start">
                <h2>{title}</h2>
                <p>{tools}</p>
                <p>{description}</p>
                <div className="pt-6">
                    <Link href={link} className="primary-btn ">
                        Besøk Siden
                    </Link>
                </div>
            </div>
        </div>
    );
}
