import "../styles/globals.css";
import { Antonio } from "next/font/google";
import { Metadata } from "next";
import Nav from "../components/nav/nav";

const antonio = Antonio({
    weight: ["400", "600", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    icons: {
        icon: "/favicon.ico?v=1",
        apple: "/apple-touch-icon.png?v=1",
    },
    title: "Kodee",
    description:
        "Kodee er et digitalt byrå som hjelper deg med å gjøre din visjon til en imponerende online tilstedeværelse.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="no" className={antonio.className}>
            <body className="bg-brand-dark text-brand-light mx-auto">
                <Nav />
                {children}
            </body>
        </html>
    );
}
