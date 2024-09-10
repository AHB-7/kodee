"use client";

import { motion } from "framer-motion";

export default function Tjenster() {
    return (
        <div className="flex flex-col justify-start pt-8 px-1 sm:pt-0 sm:justify-center sm:pb-12 items-start gap-8 h-screen">
            <h2 className="text-6xl">Tjenster</h2>
            <ul className="tjenster-liste">
                <li>
                    <h3>UX/UI Design</h3>
                </li>
                <li>
                    <h3>Responsivt Design</h3>
                </li>
                <li>
                    <h3>Logo Design</h3>
                </li>
                <li>
                    <h3>Visuell Identitet</h3>
                </li>
                <li>
                    <h3>Brand Guidelines</h3>
                </li>
                <li>
                    <h3>eCommerce Løsninger</h3>
                </li>
                <li>
                    <h3>SEO Optimalisering</h3>
                </li>
                <li>
                    <h3>On-Page SEO</h3>
                </li>
                <li>
                    <h3>Content Strategy</h3>
                </li>
                <li>
                    <h3>Integrasjoner med API-er</h3>
                </li>
                <li>
                    <h3>Teknisk Vedlikehold</h3>
                </li>
                <li>
                    <h3>Kontinuerlig Forbedring</h3>
                </li>
            </ul>
        </div>
    );
}
