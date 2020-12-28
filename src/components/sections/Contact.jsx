import React from 'react';
import BackgroundImg from '../../assets/images/contact.jpg';
import FrameOverlay from '../carousel/FrameOverlay';
import MailButton from '../simple/MailButton';

const Contact = ({ isCardSet }) => {
  const text = {
    card: {
      caption: 'Alles fertig?',
      text: 'Schön, dass Sie fündig geworden sind! Sobald Sie unverbindlich eine Mietanfrage stellen, klären wir den Rest. Sie können Ihre Auswahl dann auch später noch verändern.',
      button: <MailButton text="ANFRAGE STELLEN" />,
    },
    withoutCart: {
      caption: 'Noch Fragen?',
      text: 'Vielleicht können wir helfen.',
      button: <MailButton text="KONTAKT AUFNEHMEN" />, // null
    },
  };

  const content = isCardSet ? text.card : text.withoutCart;

  return (
    <section id="contact" className="contact">
      <div className="contact_image">
        <img src={BackgroundImg} alt="contact" width="100%" height="100%" />
      </div>
      <FrameOverlay
        src={BackgroundImg}
        alt="kontakt"
        button={content.button}
        caption={content.caption}
        text={content.text}
      />
    </section>
  );
};

export default Contact;
