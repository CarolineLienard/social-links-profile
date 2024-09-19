import styled, { css } from "styled-components";

type TextProps = { $textColor?: string };

// Responsive
enum Breakpoints {
  mobile = "375px",
  tablet = "600px",
}

export const mediaQuery = (breakpoint: keyof typeof Breakpoints) => `
  @media (min-width: ${Breakpoints[breakpoint]})
`;

// Colors
export const colors = {
  grey900: "#141414",
  grey800: "#1F1F1F",
  grey700: "#333333",
  green: "#C4F82A",
  white: "#FFFFFF",
};

// Typography
export const pxToRem = (pxValue: number) => `${pxValue / 16}rem`;

const baseTextStyle = css<TextProps>`
  color: ${(props) => props.$textColor || colors.white};
  font-size: ${pxToRem(14)};
  letter-spacing: 0px;
  line-height: 150%;
`;
export const MainHeading = styled.h1<TextProps>`
  ${baseTextStyle}
  font-size: ${pxToRem(24)};
  font-weight: 700;
`;
export const RegularText = styled.p<TextProps>`
  ${baseTextStyle}
`;
export const BoldText = styled.p<TextProps>`
  ${baseTextStyle}
  font-weight: 700;
`;

// Spacing 
export const spacing = {
  spacing500: pxToRem(40),
  spacing300: pxToRem(24),
  spacing200: pxToRem(16),
  spacing150: pxToRem(12),
  spacing100: pxToRem(8),
  spacing50: pxToRem(4),
};