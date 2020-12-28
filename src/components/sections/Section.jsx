import React from 'react';
import Headline from '../simple/Headline';

const Section = ({
  title, content, id, sectionStyle,
}) => (
  <section id={id} className="section" style={sectionStyle}>
    <div className="container">
      <Headline text={title} />
      {content}
    </div>
  </section>
);

export default Section;
