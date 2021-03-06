import React, { FC as Component } from 'react';

interface Props {
  text: string | null;
}

const Subheadline: Component<Props> = ({ text }: Props) => (
  <h3 className="subheadline">{text}</h3>
);

export default Subheadline;
