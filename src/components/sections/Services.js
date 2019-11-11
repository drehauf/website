import React, {Component} from 'react';
// import '../../About.css';

class Services extends Component {

  render() {
    return (
      <div className="container">
        <div className="title">
          <p>Leistungen</p>
        </div>
        <div className="supply">
          <h2>Sie+Wir</h2>
          <p>Wir stehen Ihnen beratend bei der Ideenkonzeption, Planung und Kostenkalkulation nach Ihren Vorstellungen zur Verfügung.</p>
          <h2>Licht, Ton und Bühnentechnik</h2>
          <p>Aus Ihren Vorstellungen entwickeln wir mit Ihnen Konzepte und Pläne, stellen Ihnen die nötigen Beschallungs- und Beleuchtungsanlagen zusammen und begleiten Sie während der Veranstaltung vom Auf- bis zum Abbau mit einem kompetenten jungen Team.<br/>
          Die Installation und Betreuung von Event- und Bühnentechnik baut dabei auf einem Material- und Kompetenzfundus auf, welchen wir stetig erweitern.</p>
        </div>
        <div className="flex-container">
          <div className="single">
            <div id="inline">
              <h2>Für Feinschmecker</h2>
              <a id="done" href="#contact" cart-is-empty="true">FERTIG</a>
            </div>
            <p>Eine Auswahl von Lautsprechern, Mikrofonen und mehr aus unserem Lager. Herein!</p>
            <table id="inventory"></table>
        </div>
        <div className="bundles">
            <h2>Pakete</h2>
            <p>Wir haben etwas für jeden Anlass. Für Ihre Veranstaltung erstellen wir Ihnen gern unverbindlich ein spezifisches Paket und Angebot ganz nach Ihren Anforderungen.</p>
            <br/>
            <a href="#contact">MIETANFRAGE SCHICKEN</a>
          </div>
        </div>
      </div>
    );
  }

}

export default Services;