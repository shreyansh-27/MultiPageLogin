/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bgsidebar: "url('./assets/images/bg-sidebar-desktop.svg')",
        arcade: "url('./assets/images/icon-arcade.svg')",
        advanced: "url('./assets/images/icon-advanced.svg')",
        pro: "url('./assets/images/icon-pro.svg')",
      },
    },
  },
  plugins: [],
};
