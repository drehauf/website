import React from 'react';
import Headline from 'components/simple/Headline';

const Section = ({ title, content, id, sectionStyle }) => {
  return (
    <section id={id} className="section" style={sectionStyle}>
      <div className="container">
        <Headline text={title} />
        {content}
      </div>
    </section>
  );
};

export default Section;