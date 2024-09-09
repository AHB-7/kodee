"use client";

import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container);
        },
        []
    );

    return (
        <motion.div
            className="-z-10"
            animate={{
                opacity: [0, 1],
            }}
            transition={{
                duration: 1,
                delay: 2.1,
            }}
        >
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "#121312",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                            },
                            resize: true,
                        },
                        modes: {
                            grab: {
                                distance: 200,
                            },
                            slow: {
                                factor: 1, // Slowing factor (the higher, the slower)
                                radius: 400, // Radius around the mouse where particles slow down
                            },
                            // push: {
                            //     quantity: 4,
                            // },
                            // repulse: {
                            //     distance: 200,
                            //     duration: 0.4,
                            // },
                            // Adding the "size" mode for the hover effect
                            size: {
                                distance: 200,
                                duration: 0.4,
                                size: 1, // Make the size smaller when hovering
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#49FF46",
                        },
                        links: {
                            color: "#49FF46",
                            distance: 150,
                            enable: true,
                            opacity: 1,
                            width: 0.5,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            speed: 2,
                            straight: true,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 150,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "line",
                        },
                        size: {
                            value: { min: 2, max: 6 },
                        },
                    },
                    detectRetina: false,
                }}
            />
        </motion.div>
    );
};
export default ParticlesComponent;
