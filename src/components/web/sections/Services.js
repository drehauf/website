import React, {Component} from 'react';
import Inventory from 'components/web/inventory/Inventory.js';
import Subheadline from 'components/essentials/Subheadline';
import TextBlock from 'components/essentials/TextBlock';
import ShoppingCart from 'components/web/inventory/ShoppingCart';

class Services extends Component {

  render() {
    return (
      <div>
        <div className='supply'>
          <Subheadline text='Sie + Wir'/>
          <div className='u-margin-top-bottom--large'>
            <TextBlock>
            <p>Wir stehen Ihnen beratend bei der Ideenkonzeption, Planung und Kostenkalkulation nach Ihren Vorstellungen zur Verfügung.</p>
            </TextBlock>
          </div>
          <Subheadline text='Licht, Ton und Bühnentechnik'/>
          <div className='u-margin-top-bottom--large'>
            <TextBlock>
              <p>
                Aus Ihren Vorstellungen entwickeln wir mit Ihnen Konzepte und Pläne, stellen Ihnen die nötigen Beschallungs- und Beleuchtungsanlagen zusammen und begleiten Sie während der Veranstaltung vom Auf- bis zum Abbau mit einem kompetenten jungen Team. Die Installation und Betreuung von Event- und Bühnentechnik baut dabei auf einem Material- und Kompetenzfundus auf, welchen wir stetig erweitern.
              </p>
            </TextBlock>
          </div>
        </div>
        <div className='services_flex-wrapper'>
          <div className='services_left-wrapper'>
            <Subheadline text='Für Feinschmecker'/>
            <div className='u-margin-top-bottom--large'>
              <TextBlock>
                <p>
                  Eine Auswahl von Lautsprechern, Mikrofonen und mehr aus unserem Lager. Herein!
                </p>
              </TextBlock>
            </div>
            <ShoppingCart/>
            <div className='u-margin-top--large'>
              <a id='done' href='#contact' cart-is-empty='true'>{this.getButtonName}</a>
            </div>
        </div>
        <div className='services_right-wrapper'>
          <Subheadline text='Pakete'/>
          <div className='u-margin-top-bottom--large'>
            <TextBlock>
              <p>
                Wir haben etwas für jeden Anlass. Für Ihre Veranstaltung erstellen wir Ihnen gern unverbindlich ein spezifisches Paket und Angebot ganz nach Ihren Anforderungen.
              </p>
            </TextBlock>
          </div>
          <a href='#contact'>MIETANFRAGE SCHICKEN</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Services;