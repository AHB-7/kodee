import Nav from "@/app/components/nav/nav";
import { Metadata } from "next";
import { Antonio } from "next/font/google";

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.ico?v=1",
        apple: "/apple-touch-icon.png?v=1",
    },
    title: "Prosjekter",
    description:
        "Send oss en melding for å starte et nytt prosjekt sammen. Vi hjelper deg med å skape en imponerende online tilstedeværelse for din bedrift, organisasjon, eller personlig merkevare.",
    keywords: [
        "send",
        "melding",
        "nytt",
        "prosjekt",
        "online",
        "tilstedeværelse",
        "bedrift",
        "organisasjon",
        "personlig",
        "merkevare",
        "digital",
        "utvikling",
        "webdesign",
        "webutvikling",
        "online",
        "digital løsninger",
    ],
};
const antonio = Antonio({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="no" className={antonio.className}>
            {" "}
            <body className="bg-brand-dark text-brand-light mx-auto">
                <Nav />
                {children}
            </body>
        </html>
    );
}
