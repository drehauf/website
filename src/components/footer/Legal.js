import React, { Fragment } from 'react';
import Navbar from 'components/header/Header';
import Section from 'components/sections/Section';
import Subheadline from 'components/simple/Subheadline';
import TextBlock from "components/simple/TextBlock";

const Impressum = () => {

  return (
    <Fragment>
      <Navbar />
      <Section
        title="Impressum"
        content={Content}
        sectionStyle={{ paddingTop: "4.8em" }}
      />
    </Fragment>
  );
}

const Content = (
  <Fragment>
    <Subheadline text="1. Haftungsbeschränkung" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt. Dreh Auf übernimmt jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers. Mit der reinen Nutzung der Website des Anbieters kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.
        </p>
      </TextBlock>
    </div>
    <Subheadline text="2. Externe Links" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Diese Website enthält Verknüpfungen zu Websites Dritter (externe Links). Diese Websites unterliegen der Haftung der jeweiligen Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der externen Links die fremden Inhalte daraufhin überprüft, ob etwaige Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße ersichtlich.
        </p>
        <p>
          Der Anbieter hat keinerlei Einfluss auf die aktuelle und zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine ständige Kontrolle der externen Links ist für den Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe Links unverzüglich gelöscht.
        </p>
      </TextBlock>
    </div>
    <Subheadline text="3. Urheber- und Leistungsschutzrechte" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Die auf dieser Website veröffentlichten Inhalte unterliegen dem deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen Rechteinhabers. Dies gilt insbesondere für Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder anderen elektronischen Medien und Systemen. Inhalte und Rechte Dritter sind dabei als solche gekennzeichnet.
        </p>
        <p>
          Die unerlaubte Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung von Kopien und Downloads für den persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt. Die Darstellung dieser Website in fremden Frames ist nur mit schriftlicher Erlaubnis zulässig.
        </p>
      </TextBlock>
    </div>
    <Subheadline text="4. Datenschutz" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Diese Website benutzt keine Werbeanalysedienste.
          Diese verwenden sog. „Cookies“, Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie ermöglichen. Dadurch werden keine Informationen über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse) an Dritte übertragen und dort gespeichert.
        </p>
        <p>
          Der Anbieter weist ausdrücklich darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch Dritte geschützt werden kann.
        </p>
        <p>
          Die Verwendung der Kontaktdaten des Impressums zur gewerblichen Werbung ist ausdrücklich nicht erwünscht, es sei denn der Anbieter hatte zuvor seine schriftliche Einwilligung erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter und alle auf dieser Website genannten Personen widersprechen hiermit jeder kommerziellen Verwendung und Weitergabe ihrer Daten.
        </p>
        <p>
          Weitere Informationen finden Sie in unserer Datenschutzerklärung.
        </p>
      </TextBlock>
    </div>
    <Subheadline text="5. Besondere Nutzungsbedingungen"/>
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den vorgenannten Nummern 1. bis 4. abweichen, wird an entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen Einzelfall die besonderen Nutzungsbedingungen.
        </p>
      </TextBlock>
    </div>
  </Fragment>
);

export default Impressum;