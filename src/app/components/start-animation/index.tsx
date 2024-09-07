"use client";

import Image from "next/image";
import { motion, useTime, useTransform } from "framer-motion";

export default function StartAnimation() {
    const time = useTime();
    const rotate = useTransform(time, [0, 4000], [0, 360], { clamp: false });
    return (
        <>
            <div className="flex justify-center h-screen w-screen overflow-hidden py-4">
                <motion.div
                    className="p-1 w-[200px] top-[50%] h-[100px]"
                    animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 0, 0, 0],
                        width: [
                            "150px",
                            "200px",
                            "250px",
                            "200px",
                            "100px",
                            "100px",
                        ],
                        height: ["100px"],
                        top: ["50%", "50%", "50%", "50%", "0%", "0%"],
                        transition: { duration: 2 },
                        opacity: [0, 0.2, 1, 1, 1],
                        position: ["relative"],
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInn",
                        times: [0, 0.25, 0.45, 0.6, 0.9],
                    }}
                >
                    <Image
                        className="object-contain"
                        src="/assets/kodee-log-light.svg"
                        alt="alt"
                        width={300}
                        height={300}
                    />
                </motion.div>
            </div>
        </>
    );
}
