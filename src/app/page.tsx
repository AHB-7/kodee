"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue,
} from "framer-motion";
import StartAnimation from "./components/start-animation";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import VantaComponent from "./components/back-ground/vanta";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex items-center justify-center flex-col object-contain">
                <StartAnimation />
                <VantaComponent />
            </div>
        </main>
    );
}
