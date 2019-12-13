import React, {Component} from 'react';
// import './stylesheets/About.css';

class Credentials extends Component {

  render() {
    return (
      <div>
        <div className='text'>
          <h2>Nur zufriedene Kunden</h2>
          <p>Ein Auzug aus dem, was die Firma so erbracht hat. Von 2011 bis heute:</p>
        </div>
        <div className='flex-container' id='customers'></div>
      </div>
    );
  }

}

export default Credentials;