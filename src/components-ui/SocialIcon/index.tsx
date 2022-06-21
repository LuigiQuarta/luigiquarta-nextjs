import {ReactNode} from "react";

interface SocialIconProps {
  href: string;
  title: string;
  icon: ReactNode;
}

const SocialIcon = ({href, title, icon}: SocialIconProps) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title}>{icon}</a>
  );
}

export default SocialIcon;
