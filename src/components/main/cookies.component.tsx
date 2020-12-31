import React, { FC as Component, useState, useEffect } from 'react';
import Subheadline from '../simple/subheadline.component';
import TextBlock from '../simple/textblock.component';

const Cookies: Component = () => {
  const storageItemKey: string = 'securityDisclaimerWasSeen';
  const [isPresented, setPresented] = useState<boolean>(false);

  /**
  * Effect for render.
  * Check in localStorage if disclaimer was already shown.
  * Conditionally present disclaimer
  */
  useEffect(() => {
    setPresented(Boolean(window.localStorage.getItem(storageItemKey)) ?? false);
  }, []);

  /**
  * Effect for isPresented.
  * Set presented state to localStorage
  */
  useEffect(() => {
    window.localStorage.setItem(storageItemKey, String(isPresented));
  }, [isPresented]);

  /**
  * onClick for Button.
  * Dismiss the disclaimer
  */
  const dismissSheet = () => {
    window.localStorage.setItem(storageItemKey, 'true');
    setPresented(true);
  };

  return (
    <div className="disclaimer" hidden={isPresented ?? false}>
      <div className="disclaimer_backdrop" onClick={() => dismissSheet()} />
      <div className="disclaimer_sheet">
        <Subheadline text="Wir sammeln keine Nutzerdaten" />
        <div className="disclaimer_sheet_content u-margin-top-bottom--large">
          <TextBlock>
            <p className="disclaimer_sheet_content_text">
              {/* eslint-disable-next-line max-len */}
              Weil wir Ihre Privatsphäre schätzen, teilen wir Ihre Nutzerdaten nicht mit Dritten und sammeln keine Cookies.
            </p>
          </TextBlock>
        </div>
        <div
          className="disclaimer_sheet_content_button button"
          role="button"
          onClick={() => dismissSheet()}
        >
          WEITER
        </div>
      </div>
    </div>
  );
};

export default Cookies;
