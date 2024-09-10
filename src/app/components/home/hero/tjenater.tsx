"use client";

import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

// Define types for the props in ServiceItem
interface ServiceItemProps {
    service: string;
    index: number;
    variants: Variants; // Framer Motion's built-in type for variants
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

    // Animation variants for each list item
    const listItemVariants: Variants = {
        hidden: { opacity: 0.2 },
        visible: { opacity: 1, transition: { duration: 0.6 } },
    };

    return (
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
    );
}

// Separate component for each service item
function ServiceItem({ service, index, variants }: ServiceItemProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        amount: "all",
        // once: true,
        margin: "-110px",
    });

    return (
        <motion.li
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            custom={index}
            style={{ transitionDelay: `${index * 0.5}s` }} // Optional staggered delay
        >
            <h3>{service}</h3>
        </motion.li>
    );
}
