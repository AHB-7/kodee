"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDown, IoMdArrowUp } from "react-icons/io";
import { IoArrowDownSharp } from "react-icons/io5";
export default function Message() {
    return (
        <section className="flex flex-col items-center justify-center gap-8 h-screen px-6 lg:px-16 relative">
            <div className=" absolute top-0 w-screen h-full rotate-180 opacity-30 -z-10">
                <Image
                    src="/background/123.jpeg"
                    fill
                    alt=""
                    className="object-cover"
                />
                <div className=" h-screen w-full bg-gradient-to-t absolute from-brand-dark to-transparent "></div>
            </div>
            <div className="mb-6 lg:mb-0 text-center lg:text-left">
                <h2 className="text-2xl lg:text-4xl font-semibold text-brand-light pb-4">
                    Hva nå?
                </h2>
                <p className=" max-w-[24.5rem] w-full leading-7 text-justify">
                    Kom i gang og send oss en melding eller bestill en gratis
                    konsultasjon. Vi vil hjelpe deg med å forstå og løse dine
                    problemer.
                </p>
            </div>
            <div className="flex gap-4">
                <Link
                    href="/message"
                    className="flex items-center justify-center gap-2 border px-6 py-2  hover:text-brand-primary hover:scale-105 duration-300 active:border-brand-primary"
                >
                    Send En Melding
                    <span className=" rotate-45 text-brand-primary text-xl ">
                        <IoMdArrowUp />
                    </span>
                </Link>
                <Link
                    href="/timebestilling"
                    className="flex items-center justify-center gap-2 border px-6 py-2  hover:text-brand-primary hover:scale-105 duration-300 active:border-brand-primary"
                >
                    Bestill En Time{" "}
                    <span className=" rotate-45 text-brand-primary text-xl">
                        <IoMdArrowUp />
                    </span>
                </Link>
            </div>
        </section>
    );
}
