"use client";

import { motion } from "framer-motion";
import ParticlesComponent from "./partcles/partcle";
import Link from "next/link";

export default function HeroContentOm() {
    return (
        <div className="flex flex-col justify-end pb-24 items-center ">
            <div className=" absolute top-0 right-0 -z-10 opacity-50">
                <ParticlesComponent />
            </div>
            <div className="px-2 text-white">
                <motion.h1
                    className="text-start font-bold pb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.4,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    <span className=" text-brand-primary">Om</span> Kodee
                </motion.h1>
            </div>
            <motion.div
                className=" max-w-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.4,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
            >
                <p className=" leading-7 text-lg text-justify ease-linear px-2">
                    Jeg heter Alan Brim og er daglig leder (SEO) for Kodee. Som
                    en erfaren frilanser spesialiserer jeg meg på å utvikle
                    skreddersydde nettsider, fra konsept og UI/UX-design til
                    ferdigstillelse av et funksjonelt og profesjonelt produkt.
                    Med en solid bakgrunn innen front-end utvikling og flere års
                    erfaring, har jeg hatt gleden av å samarbeide med en rekke
                    kunder på tvers av ulike bransjer.
                    <span className="py-1 block"></span>
                    Som 28-åring med en brennende lidenskap for kreative
                    løsninger, er jeg alltid på jakt etter nye utfordringer. Min
                    tilnærming handler om å forstå kundens unike behov og levere
                    løsninger som ikke bare ser bra ut, men også fungerer
                    optimalt for brukeren. Jeg er dedikert til å skape nettsider
                    som kombinerer estetikk, funksjonalitet og brukervennlighet
                    på en effektiv måte.
                    <span className="py-1 block text-end font-extrabold">
                        {" "}
                        La oss sammen realisere din digitale visjon.
                    </span>
                </p>
            </motion.div>
            <div className="p-4">
                <Link href="/message" className=" primary-btn">
                    Kontakt Oss
                </Link>
            </div>
        </div>
    );
}
