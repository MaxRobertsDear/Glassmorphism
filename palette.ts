interface ColorGroup {
  lightest?: string;
  lighter?: string;
  light?: string;
  base: string;
  dark?: string;
  darker?: string;
  darkest?: string;
}

const white = "#ffffff";
const black = "#000000";

/* https://hihayk.github.io/scale/#10/10/70/93/10/10/20/25/6a6b68 */
const gray: ColorGroup = {
  lightest: "#fbfbfb",
  lighter: "#f1f1f1",
  light: "#e6e6e6",
  base: "#bcbcbc",
  dark: "#888888",
  darker: "#4d4d4d",
  darkest: "#231e1e",
};

/* https://hihayk.github.io/scale/#10/10/80/95/10/10/-25/25/0047a7 */
const blue: ColorGroup = {
  lightest: "#e4f2f5",
  lighter: "#a5d4de",
  light: "#3073d7",
  base: "#192649",
  dark: "#002e5d",
  darker: "#002242",
  darkest: "#001526",
};

/* https://hihayk.github.io/scale/#10/10/70/95/10/10/-25/25/6fc9d0 */
const teal: ColorGroup = {
  lightest: "#f8fcfc",
  lighter: "#dff1f0",
  light: "#c4e8e7",
  base: "#6fc9d0",
  dark: "#3c7d7b",
  darker: "#2d605d",
  darkest: "#1e423f",
};

/* https://hihayk.github.io/scale/#10/10/70/95/10/10/20/25/f91f58 */
const red: ColorGroup = {
  lighter: "#F8DCD6",
  base: "#EB0010",
};

/* https://hihayk.github.io/scale/#10/10/70/95/10/10/20/25/1ff99f */
const green: ColorGroup = {
  lighter: "#D3F1D0",
  base: "#58B67C",
  dark: "#067E4C",
};

/* https://hihayk.github.io/scale/#10/10/70/95/10/10/20/25/f9be1f */
const yellow: ColorGroup = {
  lightest: "#F6EAD8",
  lighter: "#ECE2D8",
  base: "#EEB35A",
};

/* https://hihayk.github.io/scale/#10/10/70/95/10/10/20/25/ff5a00 */
const orange: ColorGroup = {
  lighter: "#F7B49E",
  base: "#CB5935",
  dark: "#9F3721",
};

const palette = {
  black,
  white,
  gray,
  blue,
  teal,
  red,
  green,
  yellow,
  orange,

  brand: {
    base: orange.base,
    secondary: orange.lighter,
  },

  homeGrey: "#F4F4F4",

  danger: red.base,
  success: green.base,
  warning: yellow.base,

  cta: orange.base,
  notification: blue.light,

  header: blue.darker,
  background: white,
  ruler: gray.lightest,

  statusBar: { default: blue.base, frozen: "#9da3b2ff" },
};

export default palette;
