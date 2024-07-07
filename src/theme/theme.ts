import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

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
    global: {
      body: {
        minHeight: "100vh",
        backgroundImage: `url("/bg.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right 0px",
        backgroundSize: "100%",
      },
    },
  },
});

export default theme;
