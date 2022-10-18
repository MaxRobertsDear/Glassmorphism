import { Platform, StyleSheet, TextStyle } from "react-native";
import palette from "./palette";

interface Typography {
  base: TextStyle;
  dark: TextStyle;
  bright: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  light: TextStyle;
  lightItalic: TextStyle;
  normal: TextStyle;
  normalItalic: TextStyle;
  lighterGray: TextStyle;
  lightGray: TextStyle;
  lightGrayItalic: TextStyle;
  semiBold: TextStyle;
  bold: TextStyle;
  boldItalic: TextStyle;
  heavy: TextStyle;
  heavyItalic: TextStyle;
  mono: TextStyle;
  left: TextStyle;
  center: TextStyle;
  right: TextStyle;
  smallest: TextStyle;
  smaller: TextStyle;
  small: TextStyle;
  medium: TextStyle;
  large: TextStyle;
  larger: TextStyle;
  largest: TextStyle;
  gray: TextStyle;
  grayLight: TextStyle;
  grayDark: TextStyle;
  grayDarker: TextStyle;
  grayDarkest: TextStyle;
  blueLighter: TextStyle;
  orange: TextStyle;
  brand: TextStyle;
  brandLight: TextStyle;
  link: TextStyle;
  success: TextStyle;
  danger: TextStyle;
  warning: TextStyle;
  softShadow: TextStyle;
}

const typography = StyleSheet.create<Typography>({
  base: {},
  dark: {
    color: palette.black,
  },
  bright: {
    color: palette.white,
  },
  h1: {
    fontSize: 40,
  },
  h2: {
    fontSize: 30,
  },
  h3: {
    fontSize: 25,
  },
  h4: {
    fontSize: 20,
  },
  h5: {
    fontSize: 13,
  },
  light: {},
  lightItalic: {},
  normal: {},
  normalItalic: {},
  lighterGray: {
    color: palette.gray.lighter,
  },
  lightGray: {
    color: palette.gray.base,
  },
  lightGrayItalic: {
    color: palette.gray.base,
  },
  semiBold: {
    fontWeight: "600",
  },
  bold: {},
  boldItalic: {},
  heavy: {},
  heavyItalic: {},
  mono: {
    fontFamily: Platform.select({
      android: "monospace",
      ios: "Menlo",
    }),
  },
  left: {
    textAlign: "left",
  },
  center: {
    textAlign: "center",
  },
  right: {
    textAlign: "right",
  },
  smallest: {
    fontSize: 10,
  },
  smaller: {
    fontSize: 12,
  },
  small: {
    fontSize: 14,
  },
  medium: {
    fontSize: 16,
  },
  large: {
    fontSize: 18,
  },
  larger: {
    fontSize: 20,
  },
  largest: {
    fontSize: 32,
  },
  gray: {
    color: palette.gray.base,
  },
  grayLight: {
    color: palette.gray.light,
  },
  grayDark: {
    color: palette.gray.dark,
  },
  grayDarker: {
    color: palette.gray.darker,
  },
  grayDarkest: {
    color: palette.gray.darkest,
  },
  blueLighter: {
    color: palette.blue.lighter,
  },
  orange: {
    color: palette.orange.base,
  },
  brand: {
    color: palette.blue.dark,
  },
  brandLight: {
    color: palette.brand.base,
  },
  link: {
    color: palette.blue.dark,
  },
  success: {
    color: palette.green.dark,
  },
  danger: {
    color: palette.danger,
  },
  warning: {
    color: palette.yellow.dark,
  },
  softShadow: {
    textShadowColor: "rgba(0, 0, 0, .1)",
    textShadowRadius: 2,
    textShadowOffset: { width: -0.5, height: 1 },
  },
});

const MAX_FONT_SIZE_MULTIPLIER = 1.5;
const MAX_ICON_FONT_SIZE_MULTIPLIER = 3;

export {
  typography as default,
  MAX_FONT_SIZE_MULTIPLIER,
  MAX_ICON_FONT_SIZE_MULTIPLIER,
};
