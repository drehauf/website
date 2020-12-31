import React from 'react';
import Subheadline from '../simple/Subheadline';
import TextBlock from '../simple/TextBlock';
import TableContainer from '../inventory/table-container.component';
import Packages from '../inventory/packages.component';
import Context from '../../hooks/shoppingcart.hook';

const Services = () => (
  /* eslint-disable max-len */
  <div>
    <div className="supply">
      <Subheadline text="Sie + Wir" />
      <div className="u-margin-top-bottom--large">
        <TextBlock>
          <p>Wir stehen Ihnen beratend bei der Ideenkonzeption, Planung und Kostenkalkulation nach Ihren Vorstellungen zur Verfügung.</p>
        </TextBlock>
      </div>
      <Subheadline text="Licht, Ton und Bühnentechnik" />
      <div className="u-margin-top-bottom--large">
        <TextBlock>
          <p>
            Aus Ihren Vorstellungen entwickeln wir mit Ihnen Konzepte und Pläne, stellen Ihnen die nötigen Beschallungs- und Beleuchtungsanlagen zusammen und begleiten Sie während der Veranstaltung vom Auf- bis zum Abbau mit einem kompetenten jungen Team. Die Installation und Betreuung von Event- und Bühnentechnik baut dabei auf einem Material- und Kompetenzfundus auf, welchen wir stetig erweitern.
          </p>
        </TextBlock>
      </div>
    </div>
    <div className="services_flex-wrapper">
      <div className="services_left-wrapper">
        <Subheadline text="Für Feinschmecker" />
        <div className="u-margin-top-bottom--large">
          <TextBlock>
            <p>
              Eine Auswahl von Lautsprechern, Mikrofonen und mehr aus unserem Lager. Herein!
            </p>
          </TextBlock>
        </div>
        <Context.Consumer>
          {
              (value) => (
                <TableContainer
                  isCartSet={value.isCartSet}
                  items={value.items}
                  selected={value.selected}
                />
              )
            }
        </Context.Consumer>
      </div>
      <div className="services_right-wrapper">
        <Subheadline text="Pakete" />
        <div className="u-margin-top-bottom--large">
          <TextBlock>
            <p>
              Wir haben etwas für jeden Anlass. Für Ihre Veranstaltung erstellen wir Ihnen gern unverbindlich ein spezifisches Paket und Angebot ganz nach Ihren Anforderungen oder auf Basis Ihrer Auswahl.
            </p>
          </TextBlock>
          <div className="packages">
            <Context.Consumer>
              {
                  (value) => (
                    <Packages
                      tableHasSelectedItems={value.selected.length > 0}
                      selectPackageItems={value.onPackageChange}
                      items={value.items}
                    />
                  )
                }
            </Context.Consumer>
          </div>
        </div>
        <a href="#contact">MIETANFRAGE SCHICKEN</a>
      </div>
    </div>
  </div>
);

export default Services;
