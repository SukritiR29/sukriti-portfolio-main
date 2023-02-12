/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#CD9B0B",
          secondary: "#434343",
          accent: "#fef08a",
          neutral: "#4b5563",
          "base-100": "#CAC5C3",
          info: "#2563eb",
          success: "#2ED6C8",
          warning: "#F79722",
          error: "#FC2255",
        },
      },
    ],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
