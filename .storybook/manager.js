import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const lightTheme = create({
  base: "light",
  //logo and Title
  brandTitle: "Bitwarden Component Library",
  brandUrl: "/",
  brandImage:
    "https://github.com/bitwarden/brand/blob/51942f8d6e55e96a078a524e0f739efbf1997bcf/logos/logo-horizontal-blue.png?raw=true",
  brandTarget: "_self",

  //Colors
  colorPrimary: "#746d7e",
  colorSecondary: "#7e17de",

  // UI
  appBg: "#7e6d79",
  appContentBg: "#ffffff",
  appBorderColor: "#d5cfdd",

  // Text colors
  textColor: "#25222a",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#746d7e",
  barSelectedColor: "#7e17de",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#746d7e",
  inputTextColor: "#746d7e",
});

const darkTheme = create({
  base: "dark",

  //logo and Title
  brandTitle: "Bitwarden Component Library",
  brandUrl: "/",
  brandImage:
    "https://github.com/bitwarden/brand/blob/51942f8d6e55e96a078a524e0f739efbf1997bcf/logos/logo-horizontal-white.png?raw=true",
  brandTarget: "_self",

  //Colors
  colorSecondary: "#b06af0",
  barSelectedColor: "#b06af0",
});

export const getPreferredColorScheme = () => {
  if (!globalThis || !globalThis.matchMedia) return "light";

  const isDarkThemePreferred = globalThis.matchMedia("(prefers-color-scheme: dark)").matches;
  if (isDarkThemePreferred) return "dark";

  return "light";
};

addons.setConfig({
  theme: getPreferredColorScheme() === "dark" ? darkTheme : lightTheme,
});
