/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'brand-black': '#231F20', // Dark Charcoal from PDF
                'brand-charcoal': '#333333', // Secondary Dark
                'brand-orange': '#F39200', // Primary Orange from PDF
                'brand-red': '#dc2626',
                'brand-gold': '#fbbf24',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
