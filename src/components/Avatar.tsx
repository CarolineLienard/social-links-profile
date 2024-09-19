import styled from "styled-components";
import { pxToRem } from "../styles/theme";

const AvatarContainer = styled.div`
  width: ${pxToRem(88)};
  height: ${pxToRem(88)};
  border-radius: 50%;
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
`;

function Avatar({ profilePicture } : { profilePicture : string}) {
  return (
    <AvatarContainer>
      <ProfileImage src={profilePicture} alt="Avatar" />
    </AvatarContainer>
  );
}

export default Avatar;
