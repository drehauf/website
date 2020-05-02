import React, {Component} from 'react';
import '../Construction.scss';

class Construction extends Component {

  state = {
    subscript: 'info',
    domaine: 'drehauf.com'
  }

  render() {
    return (
      <div id='construction'>
      <img src={process.env.PUBLIC_URL + '/banner-construction.png'} alt='Logo mit Bauarbeiterhelm'/>
        <h1>Wir bauen für Sie um!</h1>
        <div id='message'>
          <h2>Währenddessen errreichen Sie uns unter</h2>
          <code onClick={this.mailTo}>
            {this.state.subscript}@{this.state.domaine}
          </code>
        </div>
        <h2>Vielen Dank für Ihr Verständnis!</h2>
      </div>
    );
  }

  mailTo = (event) => {
    window.location.href = `mailto:${this.state.subscript}@${this.state.domaine}`;
  }
}

export default Construction;