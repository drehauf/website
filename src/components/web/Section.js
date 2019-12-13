import React from 'react';
import "../../stylesheets/Sections.css";
import Headline from '../essentials/Headline';

const Section = ({ title, content }) => {
  return (
    <article >
      <div className="container">
        <Headline text={title}/>
        {content}
      </div>
    </article>
  );
}

export default Section;