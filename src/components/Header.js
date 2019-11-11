import React, {Component} from 'react';
import '../Header.css';

class Header extends Component {

  render() {
    return (
      <header>
        <a className="h-left animate" href="#slider" hidden>
          <img className="h-logo" src="img/logo.png" alt="Logo"/>
        </a>
        <div className="h-right">
          <label for="checkbox">&#9776;</label>
          <input type="checkbox" id="checkbox"/>
          <ul id="hamburger-list">
            <li>
              <a href="#about">ÜBER&nbsp;UNS</a>
            </li>
            <li>
              <a href="#services">LEISTUNGEN</a>
            </li>
            <li>
              <a href="#credentials">REFERENZEN</a>
            </li>
            <li>
              <a href="#contact">KONTAKT</a>
            </li>
          </ul>
        </div>
      </header>
    )
  }

}

export default Header;