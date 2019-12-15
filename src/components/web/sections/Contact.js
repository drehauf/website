import React, {Component} from 'react';
import BackgroundImg from 'assets/images/contact.jpg';
import FrameOverlay from 'components/FrameOverlay';

class Contact extends Component {

  content = [
    {
      caption: "Alles fertig?",
      text: "Schön, dass Sie fündig geworden sind! Sobald Sie unverbindlich eine Mietanfrage stellen, klären wir den Rest. Sie können Ihre Auswahl dann auch später noch verändern."
    },
    {
      caption: "Noch Fragen?",
      text: "Vielleicht können wir helfen."
    }
  ];

  render() {
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
          caption={this.content[0].caption}
          text={this.content[0].text}
          />
      </div>
    );
  }

}

export default Contact;