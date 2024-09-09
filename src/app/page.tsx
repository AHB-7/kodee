import React from "react";
import HeroHome from "./components/home/hero/hero-home";
import Background from "./components/home/hero/bacground";

export default function Home() {
    return (
        <main className="center-section">
            <section className="center-section overflow-hidden">
                <HeroHome />
                <Background />
                <HeroHome />
            </section>
        </main>
    );
}
