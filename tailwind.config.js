import { blackA, mauve, violet } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export const content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./home/**/*.{js,ts,jsx,tsx}",

];
export const theme = {
    extend: {
        colors: {
            ...blackA,
            ...mauve,
            ...violet,
        },
    },
};
export const plugins = [
];