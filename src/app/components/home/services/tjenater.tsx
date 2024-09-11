"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ServiceItemProps {
    children: string;
    progress: any;
    range: [number, number];
}

export default function Tjenster() {
    const services = [
        "UX/UI Design",
        "Responsive Design",
        "Logo Design",
        "Visuell Identitet",
        "Brand Guidelines",
        "eCommerce Løsninger",
        "SEO Optimalisering",
        "On-Page SEO",
        "Content Strategy",
        "Integrasjoner med API-er",
        "Teknisk Vedlikehold",
        "Kontinuerlig Forbedring",
    ];

    const element = useRef(null);
    const { scrollYProgress } = useScroll({
        target: element,
        offset: ["start 0.85", "start start"],
    });

    return (
        <section
            className="flex items-center justify-center flex-wrap-reverse lg:justify-between"
            ref={element}
        >
            <div className="flex flex-col justify-start pt-8 px-1 sm:pt-0 sm:justify-center sm:pb-12 items-start gap-8">
                <h2 className="text-6xl">Tjenester</h2>
                <motion.ul className="tjenster-liste">
                    {services.map((service, i) => {
                        const start = i / services.length;
                        const end = (i + 1) / services.length;
                        return (
                            <Word
                                key={i}
                                range={[start, end]}
                                progress={scrollYProgress}
                            >
                                {service}
                            </Word>
                        );
                    })}
                </motion.ul>
            </div>
            {/* <motion.div
                className="sepia object-cover rounded-xl"
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <Image
                    className="rounded-xl pt-12"
                    src="/assets/api.jpeg"
                    alt="Service Image"
                    width={500}
                    height={200}
                />
            </motion.div> */}
        </section>
    );
}

const Word = ({ children, range, progress }: ServiceItemProps) => {
    const opacity = useTransform(progress, range, [0.4, 1]);
    return (
        <motion.li style={{ opacity }}>
            <h3>{children}</h3>
        </motion.li>
    );
};
