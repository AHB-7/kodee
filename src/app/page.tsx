import Image, { getImageProps } from "next/image";
import Link from "next/link";
import StartAnimation from "./components/start-animation";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <StartAnimation />
        </main>
    );
}
