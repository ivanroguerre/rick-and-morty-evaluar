import {
  extendBaseTheme,
  StyleFunctionProps,
  theme as chakraTheme,
  type ThemeConfig,
} from "@chakra-ui/react";

import "@fontsource/passion-one";
import "@fontsource-variable/manrope";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const { Container, Heading, Spinner, Switch, FormLabel, Card, Input, Button } =
  chakraTheme.components;

const theme = extendBaseTheme({
  config,
  // Al usar `extendBaseTheme` se reduce el tamaño del payload JS inicial
  components: {
    Container,
    FormLabel,
    Heading,
    Spinner,
    Switch,
    Card,
    Input,
    Button,
  },
  fonts: {
    heading: `'Passion One', system-ui`,
    body: `'Manrope Variable', sans-serif`,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        minHeight: "100vh",
        backgroundColor: props.colorMode === "dark" ? "#1B1C1E" : "#DADADA",
        backgroundImage: `url("/bg.webp")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom right 0px",
        backgroundSize: "100%",
        color: props.colorMode === "dark" ? "#FFFFFF" : "#333333",
      },
    }),
  },
});

export default theme;
