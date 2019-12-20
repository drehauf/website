import React from 'react';
import BackgroundImg from 'assets/images/contact.jpg';
import FrameOverlay from 'components/FrameOverlay';

const Contact = ({ isCardSet }) => {

  const text = {
    card: {
      caption: "Alles fertig?",
      text: "Schön, dass Sie fündig geworden sind! Sobald Sie unverbindlich eine Mietanfrage stellen, klären wir den Rest. Sie können Ihre Auswahl dann auch später noch verändern."
    },
    withoutCart: {
      caption: "Noch Fragen?",
      text: "Vielleicht können wir helfen."
    }
  };

  const content = isCardSet ? text.card : text.withoutCart;

  return (
    <div id="contact" className='contact'>
      <div className="contact_image">
        <img src={BackgroundImg} alt='contact' width="100%" height="100%"/>
      </div>
      <FrameOverlay
        src={BackgroundImg}
        alt="kontakt"
        href='/'
        actiontext='ANFRAGE STELLEN'
        caption={content.caption}
        text={content.text}
        />
    </div>
  );

}

export default Contact;