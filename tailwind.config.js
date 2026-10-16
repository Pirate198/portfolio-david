export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#0F1724", 2: "#18233A", 3: "#24314B" },
        paper: { DEFAULT: "#F3F0E9", 2: "#E8E3D8" },
        rule: "#D3CBBB",
        muted: "#555C69",
        accent: { DEFAULT: "#B93C25", soft: "#E8775E" },
      },
      fontFamily: {
        serif: ['"Newsreader"', "Georgia", "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
    },
  },
};
