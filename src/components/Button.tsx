import styled from "styled-components";
import { colors, BoldText, spacing } from "../styles/theme";

const StyledButton = styled.a`
  padding: ${spacing.spacing150};
  background-color: ${colors.grey700};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.8s;
  text-decoration: none;
  &:hover {
    background-color: ${colors.green};
    & > p {
      color: ${colors.grey700};
    }
  }
`;

export default function Button({
  label,
  link,
}: {
  label: string;
  link: string;
}) {
  return (
    <StyledButton href={link} target="_blank" rel="noopener noreferrer">
      <BoldText>{label}</BoldText>
    </StyledButton>
  );
}
