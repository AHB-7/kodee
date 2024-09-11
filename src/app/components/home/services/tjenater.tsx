"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface ServiceItemProps {
    service: string;
    index: number;
    variants: Variants;
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

    const listItemVariants: Variants = {
        hidden: { opacity: 0.4 },
        visible: { opacity: 1, transition: { duration: 0.4 } },
    };
    const refImage = useRef(null);

    const { scrollYProgress } = useScroll({
        target: refImage,
        offset: ["start 0.9", "0.25 start"],
    });
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 12]);
    const scale = useTransform(scrollYProgress, [0, 0.8], [0.2, 0.8]); // Updated scale range for smoother effect
    const y = useTransform(scrollYProgress, [0, 0.9], [-200, 0]);

    return (
        <section className="flex items-center justify-center flex-wrap-reverse lg:justify-between">
            <div className="flex flex-col justify-start pt-8 px-1 sm:pt-0 sm:justify-center sm:pb-12 items-start gap-8 h-screen">
                <h2 className="text-6xl">Tjenester</h2>
                <motion.ul className="tjenster-liste">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            service={service}
                            index={index}
                            variants={listItemVariants}
                        />
                    ))}
                </motion.ul>
            </div>
            <motion.div
                className=" sepia object-cover rounded-xl"
                ref={refImage}
                style={{ rotate, scale, y }}
                transition={{ duration: 0.6, ease: "easeInOut" }} // Added easing and duration
            >
                <Image
                    className="rounded-xl pt-12"
                    src="/assets/api.jpeg"
                    alt=" "
                    width={500}
                    height={200}
                />
            </motion.div>
        </section>
    );
}

function ServiceItem({ service, index, variants }: ServiceItemProps) {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end 0.86", "0.25 start"],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <motion.li
            ref={ref}
            initial="hidden"
            className="opacity-20"
            style={{ opacity }}
            variants={variants}
            custom={index}
        >
            <h3>{service}</h3>
        </motion.li>
    );
}
