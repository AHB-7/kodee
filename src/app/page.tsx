"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";
import StartAnimation from "./components/start-animation";
import Image from "next/image";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Imager({ id }: { id: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section>
            <div
                ref={ref}
                className="max-w-7xl bg-red-700 flex items-center justify-center "
            ></div>
            <motion.h2
                className=" text-brand-primary"
                style={{ y }}
            >{`#00${id}`}</motion.h2>
        </section>
    );
}

export default function Home() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex items-center justify-center flex-col object-contain">
                <StartAnimation />
                {[1, 2, 3, 4, 5].map((image) => (
                    <Imager key={image} id={image} />
                ))}
                <motion.div className="progress" style={{ scaleX }} />
            </div>
        </main>
    );
}
