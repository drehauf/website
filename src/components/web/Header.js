import React, {Component} from 'react';
import BurgerMenu from './BurgerMenu';
// import '../../stylesheets/Header.scss';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="header_wrapper">
          <a className='h-left animate' href='#slider' hidden>
            <img className='h-logo' src={require('../../assets/images/logo.png')} alt='Logo'/>
          </a>
          
          <div className='h-right'>
            
            <ul id='hamburger-list'>
              <li>
                <a href='#about'>ÜBER&nbsp;UNS</a>
              </li>
              <li>
                <a href='#services'>LEISTUNGEN</a>
              </li>
              <li>
                <a href='#credentials'>REFERENZEN</a>
              </li>
              <li>
                <a href='#contact'>KONTAKT</a>
              </li>
            </ul>
            <BurgerMenu/>
          </div>
        </div>
      </header>
    )
  }

}

export default Header;