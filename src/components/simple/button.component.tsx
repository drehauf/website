import React, { FC as Component, PropsWithChildren, ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';

interface Props extends PropsWithChildren<any> {
  href: string;
  content: string | ReactNode;
  external?: boolean;
}

const Button: Component<Props> = ({ href, content, external }: Props) => {
  let link = <HashLink smooth to={href}>{content}</HashLink>;

  if (external) {
    link = <a href={href}>{content}</a>;
  }

  return <div className="button">{link}</div>;
};

Button.defaultProps = {
  external: false,
} as Props;

export default Button;
