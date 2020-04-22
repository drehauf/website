import React, { useState, useEffect } from 'react';
import Button from './essentials/Button';
import Subheadline from './essentials/Subheadline';
import TextBlock from './essentials/TextBlock';

const SecurityDisclaimer = () => {

  const storageItemKey = 'securityDisclaimerWasSeen';
  const [isPresented, setPresented] = useState(null);

  /*
  * Effect for render
  * Check in localStorage if disclaimer was already shown
  * Conditionally present disclaimer
  */
  useEffect(() => {
    setPresented(window.localStorage.getItem(storageItemKey) ?? false);
  }, []);

  /*
  * Effect for isPresented
  * Set presented state to localStorage
  */
  useEffect(() => {
    window.localStorage.setItem(storageItemKey, isPresented);
  }, [isPresented]);

  /*
  * onClick for Button
  * Dismiss the disclaimer
  */
  const dismissSheet = () => {
    window.localStorage.setItem(storageItemKey, true);
    setPresented(true);
  }

  return (
    <div className='disclaimer' hide={(isPresented ?? false).toString()}>
      <div className='disclaimer_backdrop'></div>
      <div className='disclaimer_sheet'>
        <Subheadline text="Wir sammeln keine Nutzerdaten"/>
        <div className="disclaimer_sheet_content u-margin-top-bottom--large">
          <TextBlock>
            <p className='disclaimer_sheet_content_text'>
              Weil wir Ihre Privatsphäre schätzen, teilen wir Ihre Nutzerdaten nicht mit Dritten und sammeln keine Cookies.
            </p>
          </TextBlock>
        </div>
        <div
          className='disclaimer_sheet_content_button button'
          role='button'
          onClick={() => dismissSheet()}
          >WEITER</div>
      </div>
    </div>
  );
};

export default SecurityDisclaimer;