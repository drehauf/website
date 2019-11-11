import React, {Component} from 'react';
// import './stylesheets/About.css';

class Contact extends Component {

  render() {
    return (
      <div>
        <img src={require('../../../assets/images/contact.jpg')} alt='contact'/>
        <div id='float'>
          <h2>Alles fertig?</h2>
          <p>Schön, dass Sie fündig geworden sind! Sobald Sie unverbindlich eine Mietanfrage stellen, klären wir den Rest. Sie können Ihre Auswahl dann auch noch verändern.</p>
          <div id='request'>
            <a id='request-action'>ANFRAGE STELLEN</a>
            <p id='request-amount' cart-is-empty='true'></p>
          </div>
        </div>
        <div id='float' hidden>
          <h2>Noch Fragen?</h2>
          <p>Vielleicht können wir helfen.</p>
          <div id='request'>
          <a>ANFRAGE STELLEN</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Contact;