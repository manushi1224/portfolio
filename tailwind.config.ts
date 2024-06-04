import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        text: {
          50: "#faeafb",
          100: "#f6d4f7",
          200: "#eca9ef",
          300: "#e37ee7",
          400: "#da54de",
          500: "#d029d6",
          600: "#a721ab",
          700: "#7d1881",
          800: "#531056",
          900: "#2a082b",
          950: "#150415",
        },
        background: {
          50: "#fbeafb",
          100: "#f6d5f6",
          200: "#edabed",
          300: "#e481e4",
          400: "#db57db",
          500: "#d22dd2",
          600: "#a824a8",
          700: "#7e1b7e",
          800: "#541254",
          900: "#2a092a",
          950: "#150415",
        },
        primary: {
          50: "#fbeafb",
          100: "#f6d5f6",
          200: "#e78de7",
          300: "#e481e4",
          400: "#db57db",
          500: "#d22dd2",
          600: "#a824a8",
          700: "#7e1b7e",
          800: "#541254",
          900: "#2a092a",
          950: "#150415",
        },
        secondary: {
          50: "#fbedea",
          100: "#f6dbd5",
          200: "#edb7ab",
          300: "#e49381",
          400: "#db6f57",
          500: "#d24b2d",
          600: "#a83c24",
          700: "#7e2d1b",
          800: "#541e12",
          900: "#2a0f09",
          950: "#150804",
        },
        accent: {
          50: "#fbf6ea",
          100: "#f6ecd5",
          200: "#eed9aa",
          300: "#e5c780",
          400: "#dcb456",
          500: "#d4a12b",
          600: "#a98123",
          700: "#7f611a",
          800: "#554011",
          900: "#2a2009",
          950: "#151004",
        },
      },

      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        text: ["Nunito", "sans-serif"],
        accent: ["Montserrat", "sans-serif"],
      },
      fontWeight: {
        normal: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
export default config;
