import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-brand-dark">
            <div className=" flex items-center justify-center flex-col gap-12">
                <Image
                    src="./assets/kodee-log-light.svg"
                    width={200}
                    height={50}
                    alt=""
                ></Image>
                <p className="text-md font-thin">
                    The page is under developing and it will be life as ASP
                </p>
                <p className="text-end w-full text-brand-secondary">
                    ab@kodee.no
                </p>
            </div>
        </main>
    );
}
