/** @type {import('tailwindcss').Config} */

import { sideBarToggleFalse992 } from "./src/constants/const";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-color-cyan": "#49BBBD",
        "brand-color-lightBlue": "#9DCCFF",
      },
    },
    screens: {
      sideBarToggleFalse: `${sideBarToggleFalse992}px`,
    },
  },
  plugins: [],
};
