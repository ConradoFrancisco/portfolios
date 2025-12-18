import { useEffect, useState } from "react";

export default function SnowEffect() {
    const [snowflakes, setSnowflakes] = useState<{ id: number; left: string; animationDuration: string; animationDelay: string }[]>([]);

    useEffect(() => {
        // Ultra-reduced count
        const count = 15;
        const flakes = Array.from({ length: count }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 10}s`, // 10-15s
            animationDelay: `${Math.random() * 5}s`,
        }));
        setSnowflakes(flakes);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden" aria-hidden="true">
            <style>
                {`
          @keyframes snowfall {
            0% { transform: translateY(-10vh); opacity: 0; }
            20% { opacity: 0.8; }
            100% { transform: translateY(110vh); opacity: 0; }
          }
          .snowflake {
            position: absolute;
            top: -20px;
            color: white;
            opacity: 0.8;
            font-size: 1.2rem;
            will-change: transform;
            animation-name: snowfall;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}
            </style>
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="snowflake"
                    style={{
                        left: flake.left,
                        animationDuration: flake.animationDuration,
                        animationDelay: flake.animationDelay,
                    }}
                >
                    ❄
                </div>
            ))}
        </div>
    );
}
