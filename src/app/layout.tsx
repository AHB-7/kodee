import "./globals.css";
import { Antonio } from "next/font/google";
import { Metadata } from "next";

const antonio = Antonio({
    weight: ["400", "600", "700"], // Choose specific weights
    subsets: ["latin"],
});

export const metadata: Metadata = {
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
            <body className="bg-brand-dark text-brand-light">{children}</body>
        </html>
    );
}
