import Image, { getImageProps } from "next/image";
import Link from "next/link";
import MyComponent from "./servers/get-images";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex items-center justify-between flex-col w-full flex-1 z-10">
                {/* <Image
                    src="./assets/kodee-log-light.svg"
                    width={100}
                    height={50}
                    alt=""
                    className="py-4"
                ></Image> */}
                <p className="text-brand-primary absolute top-0 left-0 p-3 ">
                    ab@kodee.no
                </p>
                <div className="flex-1 flex items-center justify-center flex-col">
                    <h1 className="px-2 text-5xl md:text-7xl lg:text-9xl font-extrabold text-center">
                        Gjør din{" "}
                        <span className=" text-brand-secondary">visjon</span>
                        <br />
                        til
                        <span className=" text-brand-primary">virkelighet</span>
                        !
                    </h1>
                    <div className="flex gap-3 flex-wrap-reverse items-center justify-center mt-12">
                        <button className="bg-brand-primary px-8 py-2 text-brand-dark font-mono text-lg">
                            Send Medling
                        </button>
                        <button className="px-8 py-2 border border-brand-light font-mono text-lg">
                            Bestill Gratis Møte
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full h-16 hover:bg-brand-secondary flex items-center justify-center">
                <Link href="" className="">
                    <p className="font-extrabold text-3xl">MENU</p>
                </Link>
            </div>
            <MyComponent />
        </main>
    );
}
