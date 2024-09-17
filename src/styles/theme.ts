import styled, { css } from "styled-components";

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

const baseTextStyle = css<{$textColor?: string }>`
  color: ${props => props.$textColor || colors.white};
  font-size: ${pxToRem(14)};
  letter-spacing: 0px;
  line-height: 150%;
`;

export const MainHeading = styled.h1<{ $textColor?: string }>`
  ${baseTextStyle}
  font-size: ${pxToRem(24)};
  font-weight: 700;
`;

export const RegularText = styled.p<{$textColor?: string }>`
  ${baseTextStyle}
`;

export const BoldText = styled.p<{$textColor?: string }>`
  ${baseTextStyle}
  font-weight: 700;
`;
