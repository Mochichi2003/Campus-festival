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
    maxHeight: {
      "85vh": "85vh",
      full: "100%",
    },
    scale: {
      103: "1.03",
      105: "1.05",
      125: "1.25",
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
    height: {
      sm: "8px",
      md: "16px",
      lg: "24px",
      xl: "48px",
      header: "54px",
      header_mini: "40px",
    },
    extend: {
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
        11: "11rem",
        12: "12rem",
        13: "13rem",
        14: "14rem",
        15: "15rem",
        16: "16rem",
        17: "17rem",
        18: "18rem",
        19: "19rem",
        20: "20rem",
        "screen-lg": "1024px",
        // "screen-xl": "1248ox",
      },
      colors: {
        cyan: "#9cdbff",
        brand: "#34AEF3",
        cornflowerblue: {
          50: "#f4fafc",
          100: "#e0f8fb",
          200: "#b6ecf8",
          300: "#84dbf6",
          400: "#42baf3",
          500: "#1b93ef",
          600: "#136fe2",
          700: "#1558c0",
          800: "#14438d",
          900: "#12366c",
        },
        mediumslateblue: {
          50: "#f5f9fc",
          100: "#e8f3fc",
          200: "#cadffa",
          300: "#aac6fa",
          400: "#7e9bf9",
          500: "#526df9",
          600: "#3b4bf4",
          700: "#313bdf",
          800: "#282fb1",
          900: "#21278a",
        },
        darkorchid: {
          50: "#f5f6fa",
          100: "#eee9fa",
          200: "#dfcdf9",
          300: "#cfaef7",
          400: "#c081f7",
          500: "#b155f7",
          600: "#9537f2",
          700: "#732cdd",
          800: "#5825b3",
          900: "#46208e",
        },
        deeppink: {
          50: "#fcf8f9",
          100: "#fceef6",
          200: "#f9ceed",
          300: "#f8a6e0",
          400: "#f96ecb",
          500: "#f943b2",
          600: "#f1288f",
          700: "#d01f6f",
          800: "#a21a52",
          900: "#7f173f",
        },
        crimson: {
          50: "#fcf9f7",
          100: "#fceff0",
          200: "#fad6de",
          300: "#f9b2c1",
          400: "#f97c90",
          500: "#f95163",
          600: "#f13143",
          700: "#d22639",
          800: "#a51f31",
          900: "#811a29",
        },
        darkorange: {
          50: "#faf6ed",
          100: "#fbefd5",
          200: "#f8e0a5",
          300: "#f5c864",
          400: "#f2a22a",
          500: "#f07b12",
          600: "#e3570c",
          700: "#c14110",
          800: "#9c3316",
          900: "#7e2a16",
        },
        orange: {
          50: "#faf7eb",
          100: "#faf2cc",
          200: "#f6e88f",
          300: "#f1d54a",
          400: "#e7b619",
          500: "#e09409",
          600: "#ca6f06",
          700: "#a55409",
          800: "#82410f",
          900: "#683411",
        },
        goldenrod: {
          50: "#faf9f0",
          100: "#faf6d2",
          200: "#f4ed93",
          300: "#eddd4c",
          400: "#ddc018",
          500: "#caa008",
          600: "#aa7c05",
          700: "#845e08",
          800: "#65470d",
          900: "#4f380e",
        },
        limegreen: {
          50: "#f5faf7",
          100: "#ecf8eb",
          200: "#d3f2ca",
          300: "#abe79f",
          400: "#5cd360",
          500: "#28ba32",
          600: "#1e9c20",
          700: "#217c21",
          800: "#1f5f22",
          900: "#1b4b20",
        },
        lightseagreen: {
          50: "#eef9f9",
          100: "#d5f7f6",
          200: "#a6f0eb",
          300: "#6be4e0",
          400: "#26d0cf",
          500: "#0cb5b7",
          600: "#0b979b",
          700: "#107a7c",
          800: "#135e60",
          900: "#114c4c",
        },
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
