import React, { FC as Component } from 'react';
import backgroundImage from '../../../../assets/images/contact.jpg';
import MailButton from '../../../simple/mailbutton.component';
import { useShoppingCart } from '../../../shoppingcart/shoppingcart.hook';
import { withShoppingCart, noShoppingCart } from './contact.data';
import useSection from '../section/section.hook';

const Contact: Component = () => {
  const { isCartSet } = useShoppingCart();

  return (
    <section id="contact" className="contact">
      <div className="contact_image">
        <img src={backgroundImage} alt="kontact" width="100%" height="100%" />
      </div>
      <div className="carousel_overlay">
        {
          useSection([isCartSet ? withShoppingCart : noShoppingCart])
        }
        <MailButton text={isCartSet ? 'ANFRAGE STELLEN' : 'KONTAKT AUFNEHMEN'} />
      </div>
    </section>
  );
};

export default Contact;
