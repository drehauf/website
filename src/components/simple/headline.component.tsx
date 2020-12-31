import React, { FC as Component } from 'react';

interface Props {
  text: string;
}

const Headline: Component<Props> = ({ text }: Props) => (
  <div className="u-margin-bottom--huge">
    <h2 className="headline">{text}</h2>
  </div>
);

export default Headline;
