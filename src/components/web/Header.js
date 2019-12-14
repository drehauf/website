import React from 'react';
import BurgerMenu from './BurgerMenu';
import Button from '../essentials/Button';
import Logo from '../../assets/images/logo.png';
import Link from 'components/essentials/Link';

const Header = () => {

  const aboutLink = <Link href="#about" text="ÜBER UNS"/>;
  const servicesLink = <Link href="#services" text="LEISTUNGEN" />;
  const credentialsLink = <Link href="#credentials" text="REFERENZEN" />;
  const contactLink = <Link href="#contact" text="KONTAKT" />;

  return (
    <header>
      <div className="header_wrapper container">
        <a className='h-left animate' href='#slider' hidden>
          <img className='h-logo' src={Logo} alt='Logo'/>
        </a>
        <div className='h-right'>
          <div id='hamburger-list'>
            <Button link={aboutLink}/>
            <Button link={servicesLink}/>
            <Button link={credentialsLink}/>
            <Button link={contactLink}/>
          </div>
          <BurgerMenu/>
        </div>
      </div>
    </header>
  )

}

export default Header;