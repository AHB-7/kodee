import Card from "@/app/components/projects/card";
import { projects } from "../../components/projects/data";

export const metadata = {
    icons: {
        icon: "/favicon.ico?v=1",
        apple: "/apple-touch-icon.png?v=1",
    },
    title: "Prosjekter",
    description:
        "Se Kodees prosjekter, der vi har skapt innovative nettsider for restauranter, gullsmedverksteder, og museer. Utforsk våre tilpassede løsninger bygget med Next.js, GraphQL, Apollo Client, og Tailwind CSS, som gir enestående brukeropplevelser og responsive design.",
    keywords: [
        "prosjekter",
        "nettside prosjekter",
        "Next.js prosjekter",
        "GraphQL prosjekter",
        "Apollo Client prosjekter",
        "React utvikling",
        "Tailwind CSS design",
        "restaurant nettsideutvikling",
        "gullsmed nettside",
        "museum nettside",
        "portefølje nettside",
        "firma nettside",
        "bedriftsnettside",
        "e-handelsnettsted",
        "nettbutikk utvikling",
        "blogg nettside",
        "personlig nettside",
        "skole nettside",
        "utdanning nettside",
        "kunstportefølje nettside",
        "frilansportefølje nettside",
        "event nettside",
        "nonprofit nettside",
        "nettavis utvikling",
        "helseklinikk nettside",
        "fotograf nettside",
        "eiendomsmegler nettside",
        "advokatfirma nettside",
        "restaurant meny nettside",
        "bestillingssystem nettside",
        "produktkatalog nettside",
        "arkitekt nettside",
        "konsulentfirma nettside",
        "tjenesteorientert nettside",
        "booking nettside",
        "hotell nettside",
        "nettmagasin",
        "nyhetsbrev nettside",
        "porteføljeutvikling",
        "arrangement nettside",
        "CV nettside",
        "nettverk nettside",
        "medlemsportal nettside",
        "treningssenter nettside",
        "håndverker nettside",
        "barnehage nettside",
        "festival nettside",
        "lokal virksomhet nettside",
        "utvikler portefølje nettside",
        "designstudio nettside",
        "konferanse nettside",
    ],
};

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
