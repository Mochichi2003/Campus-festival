module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    "./components/**/*.jsx",
    "./pages/**/*.jsx",
    "./components/**/*.tsx",
    "./pages/**/*.tsx",
    "./components/**/*.ts",
    "./pages/**/*.ts",
    "./components/**/*.js",
    "./pages/**/*.js",
  ],
  theme: {
    maxWidth: {
      1: "1rem",
      2: "2rem",
      3: "3rem",
      4: "4rem",
      5: "5rem",
      6: "6rem",
      7: "7rem",
      8: "8rem",
      9: "9rem",
      10: "10rem",
    },
    screens: {
      sss: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    borderWidth: {
      default: "1px",
      0: "0",
      2: "2px",
      4: "4px",
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      spacing: {
        96: "24rem",
        128: "32rem",
      },
      opacity: {
        10: "0.1",
        20: "0.2",
        90: "0.90",
        95: "0.95",
        96: "0.96",
        97: "0.97",
        98: "0.98",
        99: "0.99",
      },
    },
  },
  variants: {},
  plugins: [],
};
