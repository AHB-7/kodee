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
        offset: ["start 0.95", "start start"],
    });

    return (
        <section className="flex items-center justify-center md:justify-between flex-wrap-reverse relative max-w-4xl mx-auto">
            <div className="w-full pb-12 order-3 px-1 text-center md:text-start">
                <h2 className="text-6xl">Hva Kodee tilbyr</h2>
            </div>
            <div className="flex flex-col justify-start pt-8 px-1 md:pt-0 sm:justify-center md:pb-12 items-start gap-8">
                <motion.ul className="tjenster-liste" ref={element}>
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
            <motion.div
                className=" max-w-[24.5rem] w-full leading-7"
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <p className=" text-lg px-4">
                    Kodee tilbyr{" "}
                    <span className=" text-brand-primary">unike</span> nettsider
                    som skiller seg ut fra de som benytter ferdiglagde maler. Vi
                    legger stor vekt på at våre kunder skal være
                    <span>synlige</span> på nettet og ha full tilgang og
                    <span className="text-brand-primary">kontroll</span> over
                    sin egen nettside. Med våre tjenester får du en{" "}
                    <span className="text-brand-primary">pris</span> basert på
                    dine <span className="text-brand-primary">behov</span>, ikke
                    hva vi tilbyr.
                </p>
            </motion.div>
        </section>
    );
}

const Word = ({ children, range, progress }: ServiceItemProps) => {
    const opacity = useTransform(progress, range, [0.3, 1]);
    return (
        <motion.li style={{ opacity }} className="text-brand-primary">
            <h3>{children}</h3>
        </motion.li>
    );
};
