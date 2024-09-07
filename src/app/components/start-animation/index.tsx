"use client";

import Image, { getImageProps } from "next/image";
import { motion, useTime, useTransform } from "framer-motion";

export default function StartAnimation() {
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
    return (
        <motion.div
            style={{ rotate }}
            className="border-4 border-dashed rounded-full w-44 h-44 flex items-center justify-center p-4"
        >
            <Image
                className="top-0 left-0 w-fit object-contain"
                src="/assets/kodee-log-light.svg"
                alt="alt"
                width={100}
                height={100}
            />
        </motion.div>
    );
}
