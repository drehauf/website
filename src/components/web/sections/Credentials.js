import React, { Component, Fragment } from 'react';
import TextBlock from 'components/essentials/TextBlock';
import Subheadline from 'components/essentials/Subheadline';

class Credentials extends Component {

  render() {
    return (
      <Fragment>
        <Subheadline text='Nur zufriedene Kunden'/>
        <div className='u-margin-top-bottom--large'>
          <TextBlock>
            <p>
              Ein Auzug aus dem, was die Firma so erbracht hat. Von 2011 bis heute:
            </p>
          </TextBlock>
        </div>
      </Fragment>
    );
  }

}

export default Credentials;