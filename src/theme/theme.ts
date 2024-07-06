import { extendTheme } from "@chakra-ui/react";

import "@fontsource/passion-one";
import "@fontsource-variable/manrope";

const theme = extendTheme({
  fonts: {
    heading: `'Passion One', system-ui`,
    body: `'Manrope Variable', sans-serif`,
  },
});

export default theme;
