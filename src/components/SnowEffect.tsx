import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SnowEffect() {
    const [snowflakes, setSnowflakes] = useState<{ id: number; left: string; duration: number; delay: number }[]>([]);

    useEffect(() => {
        const flakes = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 5 + 5, // 5-10s duration
            delay: Math.random() * 5, // 0-5s delay
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {snowflakes.map((flake) => (
                <motion.div
                    key={flake.id}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: "110vh", opacity: [0, 1, 0] }}
                    transition={{
                        duration: flake.duration,
                        repeat: Infinity,
                        delay: flake.delay,
                        ease: "linear",
                    }}
                    style={{ left: flake.left }}
                    className="absolute top-0 text-white text-opacity-80 text-xl select-none"
                >
                    ❄
                </motion.div>
            ))}
        </div>
    );
}
