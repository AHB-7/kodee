"use client";
import React, { useState } from "react";
import Tjenster from "../components/home/services/tjenater";
import HeroHome from "../components/home/hero/hero-home";
import LogoInro from "../components/home/hero/logo-intro";
import Message from "../components/home/message/message";

export default function Home() {
    const [animationComplete, setAnimationComplete] = useState(false);

    // Callback function to trigger when the logo animation is complete
    const handleLogoInroComplete = () => {
        setAnimationComplete(true);
    };

    return (
        <>
            <main className="w-full mx-auto">
                <section className="center-section overflow-visible">
                    {!animationComplete && (
                        <LogoInro onComplete={handleLogoInroComplete} />
                    )}
                </section>
                {animationComplete && (
                    <section className="overflow-hidden">
                        <HeroHome />
                        <Tjenster />
                        <Message />
                    </section>
                )}
            </main>
        </>
    );
}
