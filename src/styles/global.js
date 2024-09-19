import { createGlobalStyle } from "styled-components";
import Inter from "../assets/fonts/inter.ttf"
import { colors } from "./theme";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url(${Inter});
  }
  /* CSS Reset and global styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    &::before, &::after {
      box-sizing: inherit;
    }
  }
  body {
    font-family: 'Inter', sans-serif;
    background: ${colors.grey900};
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  img, svg {
    display: block;
    max-width: 100%;
  }
`;
