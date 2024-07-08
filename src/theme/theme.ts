import {
  extendTheme,
  StyleFunctionProps,
  type ThemeConfig,
} from "@chakra-ui/react";

import "@fontsource/passion-one";
import "@fontsource-variable/manrope";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Passion One', system-ui`,
    body: `'Manrope Variable', sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        minHeight: "100vh",
        backgroundColor: props.colorMode === "dark" ? "#1B1C1E" : "#DADADA",
        backgroundImage: `url("/bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right 0px",
        backgroundSize: "100%",
        color: props.colorMode === "dark" ? "#FFFFFF" : "#333333",
      },
    }),
  },
});

export default theme;
