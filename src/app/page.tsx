import React from "react";
import HeroHome from "./components/home/hero/hero-home";
import Background from "./components/home/hero/bacground";

export default function Home() {
    return (
        <main className=" w-full max-w-5xl mx-auto">
            <section className="center-section overflow-hidden">
                <Background />
            </section>
            <section className="overflow-hidden">
                <HeroHome />
            </section>
        </main>
    );
}
