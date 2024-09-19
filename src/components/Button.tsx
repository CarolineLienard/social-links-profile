import styled from "styled-components";
import { colors, BoldText, spacing } from "../styles/theme";

const StyledButton = styled.button`
  padding: ${spacing.spacing150};
  background-color: ${colors.grey700};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.8s;
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
    <a href={link} target="_blank" rel="noopener noreferrer">
      <StyledButton>
        <BoldText>{label}</BoldText>
      </StyledButton>
    </a>
  );
}
