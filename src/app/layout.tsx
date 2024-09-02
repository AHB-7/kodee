import type { Metadata } from "next";
import "./globals.css";

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
        <html lang="no">
            <body>{children}</body>
        </html>
    );
}
