import React from 'react';
import Subheadline from 'components/simple/Subheadline';
import TextBlock from 'components/simple/TextBlock';
import TableContainer from 'components/inventory/TableContainer';
import { ShoppingCartContext } from "components/shopping/ShoppingCart";
import Packages from 'components/inventory/Packages';

const Services = () => {

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
          <ShoppingCartContext.Consumer>
            {
              (value) => (
                <TableContainer
                  isCartSet={value.isCartSet}
                  items={value.items}
                  selected={value.selected}
                />
              )
            }
          </ShoppingCartContext.Consumer>
        </div>
        <div className='services_right-wrapper'>
          <Subheadline text='Pakete'/>
          <div className='u-margin-top-bottom--large'>
            <TextBlock>
              <p>
                Wir haben etwas für jeden Anlass. Für Ihre Veranstaltung erstellen wir Ihnen gern unverbindlich ein spezifisches Paket und Angebot ganz nach Ihren Anforderungen oder auf Basis Ihrer Auswahl.
              </p>
            </TextBlock>
            <div className='packages'>
              <ShoppingCartContext.Consumer>
                {
                  (value) => (
                    <Packages
                      tableHasSelectedItems={value.selected.length > 0}
                      selectPackage={value.onPackageChange}
                    />
                  )
                }  
              </ShoppingCartContext.Consumer>
            </div>
          </div>
          <a href='#contact'>MIETANFRAGE SCHICKEN</a>
        </div>
      </div>
    </div>
  );

}

export default Services;