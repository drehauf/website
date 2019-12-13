import React, {Component} from 'react';
import About from './sections/About';
import Services from './sections/Services';
import Credentials from './sections/Credentials';
import Contact from './sections/Contact';
import '../../stylesheets/Sections.scss';

class Sections extends Component {

  sections = [
    {
      content: <About/>,
      id: 'about',
      title: 'Über uns'
    },
    {
      content: <Services/>,
      id: 'services',
      title: 'Leistungen'
    },
    {
      content: <Credentials/>,
      id: 'credentials',
      title: 'Referenzen'
    },
    {
      content: <Contact/>,
      id: 'contact',
      title: 'Kontakt'
    }
  ];

  render() {
    return this.sections.map((section) => (
      <article key={section.id}>
        <div className='container'>
        <div className='title'>
          <p>{section.title}</p>
        </div>
        {section.content}
        </div>
      </article>
    ));
  }

}

export default Sections;