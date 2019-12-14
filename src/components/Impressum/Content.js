import React, { Fragment } from 'react';
import Button from "../essentials/Button";
import Subheadline from 'components/essentials/Subheadline';
import TextBlock from "components/essentials/TextBlock";

const Content = (
  <Fragment>
    <Subheadline text="1. Haftungsbeschränkung" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
          erstellt. ipunct übernimmt jedoch keine Gewähr für die Richtigkeit,
          Vollständigkeit und Aktualität der bereitgestellten Inhalte. Die
          Nutzung der Inhalte der Website erfolgt auf eigene Gefahr des Nutzers.
          Namentlich gekennzeichnete Beiträge geben die Meinung des jeweiligen
          Autors und nicht immer die Meinung des Anbieters wieder. Mit der
          reinen Nutzung der Website des Anbieters kommt keinerlei
          Vertragsverhältnis zwischen dem Nutzer und dem Anbieter zustande.
        </p>
      </TextBlock>
    </div>
    <Subheadline text="2. Externe Links" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Diese Website enthält Verknüpfungen zu Websites Dritter (\"externe
          Links\"). Diese Websites unterliegen der Haftung der jeweiligen
          Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der
          externen Links die fremden Inhalte daraufhin überprüft, ob etwaige
          Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
          ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und
          zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das
          Setzen von externen Links bedeutet nicht, dass sich der Anbieter die
          hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine
          ständige Kontrolle der externen Links ist für den Anbieter ohne
          konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von
          Rechtsverstößen werden jedoch derartige externe Links unverzüglich
          gelöscht.
        </p>
      </TextBlock>
    </div>
    <Subheadline text="3. Urheber- und Leistungsschutzrechte" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Die auf dieser Website veröffentlichten Inhalte unterliegen dem
          deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
          Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf
          der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
          Rechteinhabers. Dies gilt insbesondere für Vervielfältigung,
          Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe
          von Inhalten in Datenbanken oder anderen elektronischen Medien und
          Systemen. Inhalte und Rechte Dritter sind dabei als solche
          gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe
          einzelner Inhalte oder kompletter Seiten ist nicht gestattet und
          strafbar. Lediglich die Herstellung von Kopien und Downloads für den
          persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
          Die Darstellung dieser Website in fremden Frames ist nur mit
          schriftlicher Erlaubnis zulässig.
        </p>
      </TextBlock>
    </div>
    <Subheadline text="4. Datenschutz" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Die Website von ipunct benutzt Google Analytics, einen
          Webanalysedienst der Google Inc. („Google“). Google Analytics
          verwendet sog. „Cookies“, Textdateien, die auf Ihrem Computer
          gespeichert werden und die eine Analyse der Benutzung der Website
          durch Sie ermöglichen. Die durch den Cookie erzeugten Informationen
          über Ihre Benutzung dieser Website (einschließlich Ihrer IP-Adresse)
          wird an einen Server von Google in den USA übertragen und dort
          gespeichert. Google wird diese Informationen benutzen, um Ihre Nutzung
          der Website auszuwerten, um Reports über die Websiteaktivitäten für
          die Websitebetreiber zusammenzustellen und um weitere mit der
          Websitenutzung und der Internetnutzung verbundene Dienstleistungen zu
          erbringen. Auch wird Google diese Informationen gegebenenfalls an
          Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit
          Dritte diese Daten im Auftrag von Google verarbeiten. Google wird in
          keinem Fall Ihre IP-Adresse mit anderen Daten von Google in Verbindung
          bringen. Sie können die Installation der Cookies durch eine
          entsprechende Einstellung Ihrer Browser Software verhindern; wir
          weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls
          nicht sämtliche Funktionen dieser Website vollumfänglich nutzen
          können. Durch die Nutzung dieser Website erklären Sie sich mit der
          Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor
          beschriebenen Art und Weise und zu dem zuvor benannten Zweck
          einverstanden.Der Anbieter weist ausdrücklich darauf hin, dass die
          Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
          Sicherheitslücken aufweisen und nicht lückenlos vor dem Zugriff durch
          Dritte geschützt werden kann. Die Verwendung der Kontaktdaten des
          Impressums zur gewerblichen Werbung ist ausdrücklich nicht erwünscht,
          es sei denn der Anbieter hatte zuvor seine schriftliche Einwilligung
          erteilt oder es besteht bereits eine Geschäftsbeziehung. Der Anbieter
          und alle auf dieser Website genannten Personen widersprechen hiermit
          jeder kommerziellen Verwendung und Weitergabe ihrer Daten. Weitere
          Informationen finden Sie in unserer Datenschutzerklärung{" "}
          <Button href="/datenschutz" text="hier" external={false} />.
        </p>
      </TextBlock>
    </div>
    <Subheadline text="5. Besondere Nutzungsbedingungen"/>
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von den
          vorgenannten Nummern 1. bis 4. abweichen, wird an entsprechender Stelle
          ausdrücklich darauf hingewiesen. In diesem Falle gelten im jeweiligen
          Einzelfall die besonderen Nutzungsbedingungen. <br/>
          <cite>Quelle: Disclaimer von Juraforum.de</cite>
        </p>
      </TextBlock>
    </div>
  </Fragment>
);

export default Content;