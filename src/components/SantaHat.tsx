export default function SantaHat({ className }: { className?: string }) {
    return (
        <svg
            width="500"
            height="500"
            viewBox="0 0 500 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <defs>
                <linearGradient
                    id="hat_red_gradient"
                    x1="250"
                    y1="0"
                    x2="250"
                    y2="500"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FF0000" />
                    <stop offset="1" stopColor="#C20000" />
                </linearGradient>
                <radialGradient
                    id="hat_white_gradient"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(250 350) rotate(90) scale(150 250)"
                >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#EAEAEA" />
                </radialGradient>
            </defs>
            <path
                d="M450 250C450 388.071 338.071 500 200 500C61.9288 500 -50 388.071 -50 250C-50 111.929 61.9288 0 200 0C338.071 0 450 111.929 450 250Z"
                fill="url(#hat_red_gradient)"
            />
            <path
                d="M480 270C480 308.66 448.66 340 410 340C371.34 340 340 308.66 340 270C340 231.34 371.34 200 410 200C448.66 200 480 231.34 480 270Z"
                fill="url(#hat_white_gradient)"
            />
            <path
                d="M500 350C500 432.843 432.843 500 350 500C267.157 500 200 432.843 200 350C200 267.157 267.157 200 350 200C432.843 200 500 267.157 500 350Z"
                fill="url(#hat_white_gradient)"
            />
        </svg>
    );
}
