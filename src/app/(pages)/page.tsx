import React from "react";
import Background from "../components/home/hero/bacground";
import Tjenster from "../components/home/services/tjenater";
import HeroHome from "../components/home/hero/hero-home";
import Priser from "../components/home/price/pris";

export default function Home() {
    return (
        <>
            <main className=" w-full max-w-5xl mx-auto">
                <section className="center-section overflow-hidden">
                    <Background />
                </section>
                <section className="overflow-hidden">
                    <HeroHome />
                    <Tjenster />
                    <Priser />
                </section>
            </main>
        </>
    );
}
