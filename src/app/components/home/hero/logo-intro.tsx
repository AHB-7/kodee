"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { time } from "console";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface LogoInroProps {
    onComplete?: () => void; // onComplete is a function that returns void, and it's optional
}
export default function LogoInro({ onComplete }: LogoInroProps) {
    const handleAnimationComplete = () => {
        // Trigger navigation to the next page or complete the intro
        if (onComplete) {
            onComplete(); // Notify the parent component that the animation is done
        }
    };

    return (
        <motion.section
            className="flex justify-center items-center h-screen overflow-visible"
            onAnimationComplete={handleAnimationComplete}
            animate={{
                scale: [1, 29],
                opacity: [1, 0],
            }}
            transition={{
                delay: 3.5,
                duration: 0.5,
            }}
        >
            <motion.svg
                className="w-full max-w-md overflow-visible"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 563 116"
                preserveAspectRatio="xMidYMid meet"
                initial={{ opacity: 0 }} // Set initial opacity to 0 (hidden)
                animate={{ opacity: 1 }} // Animate to full opacity
                transition={{
                    duration: 0.5, // Short transition for smooth fade-in
                }}
            >
                <motion.path
                    d="M4.464 116c-1.212 0-2.26-.442-3.141-1.326C.44 113.79 0 112.741 0 111.526V4.474C0 3.26.44 2.21 1.323 1.326 2.205.442 3.252 0 4.464 0h31.58c1.213 0 2.26.442 3.142 1.326.882.884 1.323 1.933 1.323 3.148v32.812l18.683-33.64c.551-.884 1.323-1.713 2.315-2.486C62.609.387 64.042 0 65.806 0h36.54c.992 0 1.819.387 2.48 1.16.772.663 1.158 1.491 1.158 2.486 0 .663-.166 1.27-.496 1.823L75.726 55.514l32.573 55.017c.33.442.496 1.05.496 1.823 0 .995-.386 1.878-1.158 2.652-.661.663-1.488.994-2.48.994H67.459c-2.204 0-3.858-.497-4.96-1.491-.992-1.105-1.598-1.879-1.819-2.32L40.51 76.063v35.463c0 1.215-.441 2.264-1.323 3.148-.882.884-1.93 1.326-3.142 1.326H4.464Z"
                    fill="#F1F7EE"
                    id="kLetter"
                    animate={{
                        x: [240, 0],
                        scaleY: [0.6, 1],
                        y: [15, 0],
                    }}
                    transition={{
                        delay: 0.7,
                        duration: 2,
                        type: "spring",
                        bounce: 0.3,
                    }}
                />
                <motion.g
                    style={{
                        transformOrigin: "bottom",
                    }}
                    animate={{
                        y: [0, -135, 60, 0],
                        scaleX: [1.2, 1.2, 1.7, 1],
                        scaleY: [0.95, 0.6, 0.3, 1],
                    }}
                    transition={{
                        type: "spring",
                        bounce: 0.3,
                        repeat: 1,
                        y: {
                            delay: 0.5, // Add delay here for y
                            duration: 2,
                            times: [0, 0.55, 0.7, 1],
                        },
                        scaleX: {
                            delay: 1.7, // Add the same delay for scaleX
                            duration: 0.4,
                            times: [0, 0.45, 0.8, 1],
                        },
                        scaleY: {
                            delay: 1.7, // Add the same delay for scaleY
                            duration: 0.4,
                            times: [0, 0.45, 0.8, 1],
                        },
                    }}
                >
                    <path
                        d="M222.5 58c0 32.032-25.967 58-58 58s-58-25.968-58-58 25.967-58 58-58 58 25.968 58 58Zm-31.636 0c0 14.56-11.804 26.364-26.364 26.364S138.136 72.56 138.136 58 149.94 31.636 164.5 31.636c3.791 0 7.395.8 10.652 2.241l10.129-10.129 16.128-3.277-2.481 13.026-11.227 11.972A26.25 26.25 0 0 1 190.864 58Zm-4.53-31.176a3.722 3.722 0 0 1 5.264 0l2.193 2.193a4.963 4.963 0 0 1 0 7.019l-29.692 29.691a1.241 1.241 0 0 1-1.755 0l-3.07-3.07a6.202 6.202 0 0 1 0-8.773l27.06-27.06ZM110.842 56.76a.93.93 0 1 0 0 1.861h19.54a.93.93 0 1 0 0-1.86h-19.54Zm52.883-52.882a.93.93 0 0 1 .93.93v19.54a.93.93 0 0 1-1.861 0V4.808a.93.93 0 0 1 .931-.93Zm36.735 91.864a.93.93 0 0 0 1.316-1.316l-13.817-13.817a.93.93 0 0 0-1.316 1.316l13.817 13.817Zm-74.786 0a.93.93 0 0 1 0-1.316L139.49 80.61a.93.93 0 0 1 1.316 1.315l-13.817 13.817a.93.93 0 0 1-1.315 0Zm71.393-38.982a.93.93 0 1 0 0 1.861h19.54a.93.93 0 0 0 0-1.86h-19.54Zm-33.342 33.343a.93.93 0 0 1 .93.93v19.54a.931.931 0 0 1-1.861 0v-19.54a.93.93 0 0 1 .931-.93Zm-24.235-55.33a.93.93 0 0 0 1.316-1.317l-13.817-13.817a.93.93 0 0 0-1.316 1.316l13.817 13.817Z"
                        fill="#49FF46"
                        id="oLetter"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                    />
                </motion.g>

                <motion.path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M236.579 114.674c.881.884 1.929 1.326 3.141 1.326h48.445c10.582 0 19.841-1.602 27.777-4.806 8.047-3.314 14.385-8.341 19.015-15.08 4.629-6.85 7.164-15.466 7.605-25.851.221-4.53.331-8.562.331-12.097 0-3.646-.11-7.844-.331-12.595-.33-9.942-2.976-18.283-7.936-25.022-4.85-6.74-11.353-11.821-19.51-15.246C306.959 1.768 297.7 0 287.338 0H239.72c-1.212 0-2.26.442-3.141 1.326-.882.884-1.323 1.933-1.323 3.148v107.052c0 1.215.441 2.264 1.323 3.148Zm32.382-86.673C274.229 24.826 280.401 23 287 23c19.33 0 35 15.67 35 35s-15.67 35-35 35-35-15.67-35-35c0-10.586 4.7-20.074 12.127-26.492A35.076 35.076 0 0 1 268.961 28Zm-6.316-3.571c-.379-.579-.901-.93-1.645-.93l1.645.93Z"
                    fill="#F1F7EE"
                    id="dLetter"
                    animate={{
                        opacity: [0, 1],
                        x: [100, 0],
                    }}
                    transition={{
                        delay: 2,
                        type: "spring",
                        bounce: 0.5,
                        duration: 0.6,
                    }}
                />
                <motion.path
                    d="M362.112 116c-1.213 0-2.26-.442-3.142-1.326-.882-.884-1.323-1.933-1.323-3.148V4.474c0-1.215.441-2.264 1.323-3.148C359.852.442 360.899 0 362.112 0h84.82c1.212 0 2.259.442 3.141 1.326.882.884 1.323 1.933 1.323 3.148V27.84c0 1.215-.441 2.265-1.323 3.149-.882.883-1.929 1.325-3.141 1.325h-49.603v10.44h45.965c1.213 0 2.26.442 3.142 1.326.882.884 1.322 1.933 1.322 3.149V68.77c0 1.216-.44 2.265-1.322 3.149-.882.884-1.929 1.326-3.142 1.326h-45.965v10.44h50.925c1.213 0 2.26.442 3.142 1.325.882.884 1.323 1.934 1.323 3.149v23.366c0 1.215-.441 2.264-1.323 3.148-.882.884-1.929 1.326-3.142 1.326h-86.142Z"
                    fill="#F1F7EE"
                    id="eFirst"
                    animate={{
                        opacity: [0, 1],
                        x: [100, 0],
                    }}
                    transition={{
                        delay: 2.3,
                        type: "spring",
                        bounce: 0.5,
                        duration: 0.6,
                    }}
                />
                <motion.path
                    d="M472.393 116c-1.213 0-2.26-.442-3.142-1.326-.881-.884-1.322-1.933-1.322-3.148V4.474c0-1.215.441-2.264 1.322-3.148C470.133.442 471.18 0 472.393 0h84.82c1.212 0 2.26.442 3.141 1.326.882.884 1.323 1.933 1.323 3.148V27.84c0 1.215-.441 2.265-1.323 3.149-.881.883-1.929 1.325-3.141 1.325h-49.602v10.44h45.965c1.212 0 2.259.442 3.141 1.326.882.884 1.323 1.933 1.323 3.149V68.77c0 1.216-.441 2.265-1.323 3.149-.882.884-1.929 1.326-3.141 1.326h-45.965v10.44h50.925c1.212 0 2.259.442 3.141 1.325.882.884 1.323 1.934 1.323 3.149v23.366c0 1.215-.441 2.264-1.323 3.148-.882.884-1.929 1.326-3.141 1.326h-86.143Z"
                    fill="#F1F7EE"
                    id="eEnd"
                    animate={{
                        opacity: [0, 1],
                        x: [100, 0],
                        rotate: [180, 0],
                    }}
                    transition={{
                        delay: 2.6,
                        duration: 0.5,
                        ease: "easeInOut",
                    }}
                />
            </motion.svg>
        </motion.section>
    );
}
