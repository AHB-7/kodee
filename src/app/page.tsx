import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between  bg-brand-dark">
            <div className="flex items-center justify-between flex-col w-full flex-1">
                <Image
                    src="./assets/kodee-log-light.svg"
                    width={100}
                    height={50}
                    alt=""
                    className="py-4"
                ></Image>
                <div className="flex-1 flex items-center justify-center flex-col">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-light px-1 md:max-w-3xl lg:max-w-4xl">
                        Gjør din visjon til en{" "}
                        <span className="bg-brand-secondary bg-opacity-80 rounded-md inline-flex items-center justify-center p-1">
                            unik
                        </span>
                        og
                        <span className="bg-brand-primary bg-opacity-80 rounded-md inline-flex items-center justify-center p-1">
                            imponerende
                        </span>
                        online tilstedeværelse !
                    </h1>
                    <p className="px-4 text-gray-400 text-sm font-light text-center py-6">
                        Ekspert tjenester innen webdesign, utvikling og
                        markedsføring for å hjelpe din bedrift å vokse.
                    </p>
                    <div className="flex gap-3 flex-wrap-reverse items-center justify-center">
                        <button className="bg-brand-primary px-8 py-2 text-brand-dark font-bold rounded-md text-md">
                            Send Medling
                        </button>
                        <button className=" text-brand-light px-8 py-2 border border-brand-light  font-bold rounded-md text-md">
                            Bestill Gratis Møte
                        </button>
                    </div>

                    <p className="text-end w-full text-brand-primary">
                        ab@kodee.no
                    </p>
                </div>
            </div>
        </main>
    );
}
