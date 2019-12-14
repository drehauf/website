import React, {Component} from 'react';
import '../../stylesheets/Header.scss';
import Button from '../essentials/Button';

class Footer extends Component {

  render() {
    return (
      <footer>
        <ul>
          <Button link="/impressum" text="IMPRESSUM"/>
          <Button link="/datenschutz" text="DATENSCHUTZ"/>
        </ul>
      </footer>
    )
  }

}

export default Footer;