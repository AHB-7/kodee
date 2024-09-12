"use client";
import React, { useState } from "react";
import Background from "../components/home/hero/bacground";
import Tjenster from "../components/home/services/tjenater";
import HeroHome from "../components/home/hero/hero-home";
import Priser from "../components/home/price/pris";
import LogoInro from "../components/home/hero/logo-intro";

export default function Home() {
    const [animationComplete, setAnimationComplete] = useState(false);

    // Callback function to trigger when the logo animation is complete
    const handleLogoInroComplete = () => {
        setAnimationComplete(true);
    };

    return (
        <>
            <main className="w-full max-w-5xl mx-auto">
                <section className="center-section overflow-hidden">
                    {!animationComplete && (
                        <LogoInro onComplete={handleLogoInroComplete} />
                    )}
                </section>
                {animationComplete && (
                    <section className="overflow-hidden">
                        <HeroHome />
                        <Tjenster />
                        <Priser />
                    </section>
                )}
            </main>
        </>
    );
}
