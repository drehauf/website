import React from 'react';
import Headline from '../essentials/Headline';

const Section = ({ title, content }) => {
  return (
    <section className='section'>
      <div className="container">
        <Headline text={title}/>
        {content}
      </div>
    </section>
  );
}

export default Section;