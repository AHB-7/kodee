import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

// Import Vanta.js Net effect
import NET from "vanta/dist/vanta.net.min";

const VantaComponent: React.FC = () => {
    const [vantaEffect, setVantaEffect] = useState<any>(null); // Track the Vanta effect instance
    const vantaRef = useRef<HTMLDivElement>(null); // Create a ref for the div

    useEffect(() => {
        // Ensure Vanta.js runs only on the client side
        if (typeof window !== "undefined" && !vantaEffect && vantaRef.current) {
            setVantaEffect(
                NET({
                    el: vantaRef.current, // Attach Vanta effect to the ref
                    THREE: THREE, // Pass the three.js instance
                    mouseControls: true,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x7fc00, // Correct six-digit hex color for green
                    backgroundColor: 0x0f0f13, // Correct six-digit hex color for background
                    points: 9.0,
                    maxDistance: 21.0,
                    spacing: 18.0,
                    showDots: false,
                })
            );
        }

        // Cleanup on component unmount
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    return <div ref={vantaRef} className="h-screen w-full absolute -z-10" />; // Assign the ref here
};

export default VantaComponent;
