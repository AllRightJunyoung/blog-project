import { Avatar, AvatarGroup } from "@chakra-ui/react";
import GithubIcon from "public/images/github.svg";
import LinkedIn from "public/images/linkedIn.svg";
import Instagram from "public/images/instagram.svg";

const SnsIcons = () => {
  return (
    <AvatarGroup spacing="1rem">
      <Avatar icon={<GithubIcon />} bg="#357276" border="1px solid #357276" />
      <Avatar icon={<LinkedIn />} bg="#357276" border="1px solid #357276" />
      <Avatar icon={<Instagram />} bg="#357276" border="1px solid #357276" />
    </AvatarGroup>
  );
};

export default SnsIcons;
