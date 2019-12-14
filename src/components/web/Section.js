import React from 'react';
import Headline from '../essentials/Headline';

const Section = ({ title, content, id }) => {
  return (
    <section id={id} className='section'>
      <div className="container">
        <Headline text={title}/>
        {content}
      </div>
    </section>
  );
}

export default Section;