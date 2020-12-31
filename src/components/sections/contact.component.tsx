import React, { FC as Component } from 'react';
import backgroundImage from '../../assets/images/contact.jpg';
import FrameOverlay from '../carousel/frame-overlay.component';
import MailButton from '../simple/mailbutton.component';
import { useShoppingCart } from '../../hooks/shoppingcart.hook';

const Contact: Component = () => {
  const { isCartSet } = useShoppingCart();

  const userSelection = {
    cart: {
      caption: 'Alles fertig?',
      text: 'Schön, dass Sie fündig geworden sind! Sobald Sie unverbindlich eine Mietanfrage stellen, klären wir den Rest. Sie können Ihre Auswahl dann auch später noch verändern.',
      button: <MailButton text="ANFRAGE STELLEN" />,
    },
    none: {
      caption: 'Noch Fragen?',
      text: 'Vielleicht können wir helfen.',
      button: <MailButton text="KONTAKT AUFNEHMEN" />, // null
    },
  };

  const { button, caption, text } = isCartSet ? userSelection.cart : userSelection.none;

  return (
    <section id="contact" className="contact">
      <div className="contact_image">
        <img src={backgroundImage} alt="contact" width="100%" height="100%" />
      </div>
      <FrameOverlay
        src={backgroundImage}
        alt="kontakt"
        button={button}
        caption={caption}
        text={text}
      />
    </section>
  );
};

export default Contact;
