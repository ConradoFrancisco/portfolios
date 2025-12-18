/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Outfit', 'sans-serif'],
          heading: ['Space Grotesk', 'sans-serif'],
        },
        colors: {
          dark: '#030712',
          primary: '#6366f1',
          secondary: '#d946ef',
        },
        animation: {
          'blob': 'blob 7s infinite',
        },
        keyframes: {
          blob: {
            '0%': { transform: 'translate(0px, 0px) scale(1)' },
            '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
            '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
            '100%': { transform: 'translate(0px, 0px) scale(1)' },
          }
        },
        // Adding will-change utility manually if needed, usually 'will-change-transform' exists in newer versions or can be added via plugin, 
        // but here we can just ensure it works or user arbitrary values. 
        // Let's add a safe utility just in case.
      },
    },
    plugins: [
        function({ addUtilities }: { addUtilities: any }) {
            addUtilities({
                '.will-change-transform': {
                    'will-change': 'transform',
                }
            })
        }
    ],
  };
  