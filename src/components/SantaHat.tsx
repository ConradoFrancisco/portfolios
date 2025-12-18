export default function SantaHat({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={className}
            fill="none"
        >
            {/* Red Part of the Hat */}
            <path
                d="M418.4 157.9c-28.8-19.1-85.3 11-137.9 33.5 -52.6 22.5-98.1 41.5-125.6 24.6 -18.4-11.3-46.7 5.6-59 28.1 36.3 35.6 102 75.6 195 44 91.5-31.1 146.6-86.6 156.9-105.6C454.5 169.9 437.5 170.6 418.4 157.9z"
                fill="#EF4444"
            />
            <path
                d="M136.6 256c-20 18.5-27 49-27 49s46-15 97-40c49.5-24.2 103.5-54.8 132-72 -28-36-82-41-82-41 -47.1 23-100.9 85-120 104z"
                fill="#EF4444"
            />

            {/* White Pom-Pom */}
            <circle cx="452" cy="192" r="32" fill="#F3F4F6" />

            {/* White Trim */}
            <path
                d="M129.5 288c-17.7 0-32-14.3-32-32 0-17.7 14.3-32 32-32s32 14.3 32 32C161.5 273.7 147.2 288 129.5 288z"
                fill="#F3F4F6"
            />
            <path
                d="M100 240c0 0 20 40 180-20 0 0-40 50-180 20Z"
                fill="#F3F4F6"
                stroke="#F3F4F6"
                strokeWidth="20"
                strokeLinecap="round"
            />
        </svg>
    );
}
