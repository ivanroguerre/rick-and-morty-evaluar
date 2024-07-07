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
});

export default theme;
