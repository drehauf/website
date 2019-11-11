import React, {Component} from 'react';
import About from './sections/About';
import Services from './sections/Services';
import Credentials from './sections/Credentials';
import Contact from './sections/Contact';

class Sections extends Component {

  sections = [
    {
      content: <About/>,
      id: 'about'
    },
    {
      content: <Services/>,
      id: 'services'
    },
    {
      content: <Credentials/>,
      id: 'credentials'
    },
    {
      content: <Contact/>,
      id: 'contact'
    }
  ];

  render() {
    return this.sections.map((section) => (
      <article id={section.id}>
        {section.content}
      </article>
    ));
  }

}

export default Sections;