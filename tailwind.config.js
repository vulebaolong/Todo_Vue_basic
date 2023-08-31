/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class", // or 'class'
    theme: {
        container: {
            center: true,
            padding: {
                "DEFAULT": "1rem",
                "sm": "2rem",
                "md": "3rem",
                "lg": "4rem",
                "xl": "5rem",
                "2xl": "6rem",
            },
        },
        extend: {},
    },
    plugins: [],
};
