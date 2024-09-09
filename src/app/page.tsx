import StartAnimation from "./components/home/hero/start-animation/start";
import React from "react";
import ParticlesComponent from "./components/home/hero/partcles/partcle";
import HeroContent from "./components/home/hero/hero-content/hero-content";

export default function Home() {
    return (
        <main className="center-section">
            <section className="center-section">
                <StartAnimation />
                <ParticlesComponent />
                <HeroContent />
            </section>
        </main>
    );
}
