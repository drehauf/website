import React, {Component} from 'react';
import '../../stylesheets/Header.scss';

class Footer extends Component {

  render() {
    return (
      <footer>
        <ul>
          <a id='footer-left' href='#impressum'>IMPRESSUM</a>
          <a id='footer-right'href='#privacy'>DATENSCHUTZ</a>
        </ul>
      </footer>
    )
  }

}

export default Footer;