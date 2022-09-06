import React from "react";
import { SiReact, SiNextdotjs, SiGithub } from "react-icons/si";

export const ReactIcon = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <SiReact size={25} />
    </a>
  );
});

export const NextIcon = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <SiNextdotjs size={25} />
    </a>
  );
});

export const GithubIcon = React.forwardRef(({ onClick, href }, ref) => {
  return (
    <a href={href} onClick={onClick} ref={ref}>
      <SiGithub size={25} />
    </a>
  );
});

GithubIcon.displayName = "GithubIcon";
NextIcon.displayName = "NextIcon";
ReactIcon.displayName = "ReactIcon";
