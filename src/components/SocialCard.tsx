import styled, { css } from "styled-components";
import { MainHeading, BoldText, RegularText, colors, pxToRem, spacing } from "../styles/theme";
import Avatar from "./Avatar";
import Button from "./Button";
import { User, SocialLink } from "../data/users";

export const FlexCSS = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Card = styled.div`
  ${FlexCSS}
  align-items: center;
  text-align: center;
  gap: ${spacing.spacing300};
  padding: ${spacing.spacing500};
  max-width: ${pxToRem(380)};
  background: ${colors.grey800};
  border-radius: 12px;
`;

const ProfileContainer = styled.div`
  ${FlexCSS}
  gap: ${spacing.spacing50};
`;

const LinksContainer = styled.div`
  ${FlexCSS}
  gap: ${spacing.spacing200};
  width: 100%;
`;

export default function SocialCard({ user }: { user: User }) {
  return (
    <Card>
      <Avatar profilePicture={user.profile} />
      <ProfileContainer>
        <MainHeading>
          {user.firstName} {user.lastName}
        </MainHeading>
        <BoldText $textColor={colors.green}>
          {user.city}, {user.country}
        </BoldText>
      </ProfileContainer>
      <div>
        <RegularText>"{user.description}"</RegularText>
      </div>
      <LinksContainer>
        {user.socialLinks.map((socialLink: SocialLink, linkIndex: number) => (
          <Button
            key={linkIndex}
            label={socialLink.network}
            link={socialLink.url}
          />
        ))}
      </LinksContainer>
    </Card>
  );
}
