"use client";
import Card from "@/app/components/projects/card";
import { projects } from "../../components/projects/data";

export default function Page() {
    return (
        <main className="">
            <section className=" mb-24">
                <h1>Prosjekter</h1>
                <p className="text-center py-4 text-xl pt-12">
                    Her er en oversikt over alle prosjekter som ble utført.
                </p>
            </section>
            <section className=" max-w-6xl">
                {projects.map((project, index) => {
                    return <Card key={index} i={index} {...project} />;
                })}
            </section>
        </main>
    );
}
