export default function SantaHat({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className={className}
            fill="none"
        >
            {/* Floppy Red Hat Body */}
            <path
                d="M110 320c-15-20-10-60 20-90 40-40 120-60 200-40 60 15 90 60 70 110 -15 35-50 50-90 40 -40-10-60-40-50-70 10-30 40-40 70-30"
                fill="#EF4444"
                className="hidden" // Placeholder logic if complex path needed, simplified below
            />
            {/* Real simplified floppy hat */}
            <path
                d="M66.6 333.5C73.8 300.2 119.3 273 175 273s101.2 27.2 108.4 60.5H66.6z"
                fill="#F3F4F6"
            />
            <path
                d="M175 273c-66 0-110-50-60-150 40-80 160-80 200 40 20 60-40 110-140 110"
                fill="#EF4444"
            />
            {/* White Trim (Base) */}
            <rect x="60" y="330" width="230" height="40" rx="20" fill="#F3F4F6" />

            {/* Pom Pom at the end of a flopped tip - let's make it droop to the right */}
            <path
                d="M315 163 c 40 40 60 100 20 150"
                stroke="#EF4444"
                strokeWidth="45"
                strokeLinecap="round"
                fill="none"
            />
            <circle cx="340" cy="330" r="35" fill="#F3F4F6" />
        </svg>
    );
}
