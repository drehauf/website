import React, { FC as Component } from 'react';
import Button from '../../../simple/button.component';
import Subheadline from '../../../simple/subheadline.component';
import TextBlock from '../../../simple/textblock.component';

const About: Component = () => (
  /* eslint-disable max-len */
  <div className="about_flex-wrapper">
    <div className="about_left-wrapper">
      <Subheadline text="Das Projekt" />
      <div className="u-margin-top-bottom--large">
        <TextBlock>
          <p>
            Als Schülerfirma wird ein von Auszubildenden oder Schülern eigenverantwortlich gegründetes Unternehmen und pädagogisches Projekt bezeichnet, das mit realem Geschäftsbetrieb, realen Waren und realen Geldströmen unter dem Schirm einer Schule auf Dauer geführt wird.
          </p>
          <p className="about_cite">
            „Es ist Anliegen der Schülerfirma, dass die Schüler praktisches Wissen unter anderem im Bereich der Planung und Umsetzung von Veranstaltungen zu erwerben und in wirtschaftsrealitätsnahen Zusammenhängen anwenden, sowie Schüsselkompetenzen für die erfolgreiche Bewältigung des Überganges von der Schule in den Beruf, wie Eigeninitiative, Verantwortungsbereitschaft und Teamfähigkeit erwerben und anwenden.“
          </p>
          <p>
            Ursprünglich als eine temporäre Arbeitsgruppe, mit der Aufgabe, unter professioneller Anleitung ihre eigene Jugendweihe zu gestalten, starteten wir im März 2010 im schulischen Rahmen mit der Planung unserer ersten eigenen Veranstaltung. Das Interesse an Tanz und lauter Musik brachte uns auf die Idee, eine eigene erste Party zu organisieren. Locations und DJs wurden gesucht und verglichen, Flyer entworfen, an Raumkonzepten getüftelt und kulinarische Menüs entwickelt. Nach dem Erfolg der ersten eignen Veranstaltung kristallisierte sich schnell eine Kerngruppe höchst motivierter junger Menschen heraus, die Spaß daran fanden und sich weiter damit beschäftigten. So wurde wenig später die Schülerfirma Dreh Auf S-GmbH wurde gegründet. Heute versteht sich die Dreh Auf S-GmbH als Dienstleister im Bereich des Veranstaltungsmanagements und der Veranstaltungstechnik sowie vielen kleineren multimedialen Teilbranchen.
          </p>
        </TextBlock>
      </div>
      <Button
        href="https://wego.here.com/deutschland/dresden/education-facility/freie-montessorischule-huckepack--276u31f3-f98f3c5dc3124f76b306cdafc6f2b4b0?map=51.0423,13.78616,15,normal"
        content="FIRMA UND SCHULE AUF KARTE ANZEIGEN"
        external
      />
    </div>
    <div className="about_right-wrapper">
      <Subheadline text="Der Schirm" />
      <div className="u-margin-top-bottom--large">
        <TextBlock>
          <p>
            Unser Träger, die Freie Montessorischule Huckepack wurde 1995 vom Huckepack e. V. gegründet.
          </p>
          <p>
            Umfassend einer Grundschule mit Hort, einer Mittelschule und einem Beruflichen Gymnasium der Wirtschaftswissenschaften bietet sie als Gesamtschule die Möglichkeit, ohne Schulwechsel die gesamte Schullaufbahn einschließlich des Abiturs an einer Schule zu absolvieren.
          </p>
          <p>
            Die Montessorischule als staatlich anerkannte Schule orientiert sich an den reformpädagogischen Grundsätzen Maria Montessoris. Im Mittelpunkt des Lernkonzeptes stehen die Befähigung der Schülerinnen und Schüler zur Selbstbestimmung und die Persönlichkeitsentwicklung jedes Einzelnen, die Förderung der Schülerinnen und Schüler entsprechend ihrem persönlichen Entwicklungsstand, sowie die Integration von Kindern mit körperlichen und kognitiven Beeinträchtigungen.
          </p>
        </TextBlock>
      </div>
      <Button
        href="https://www.huckepack-ev.de/montessorischule.html"
        content="FREIE MONTESSORISCHULE HUCKEPACK"
        external
      />
    </div>
  </div>
);

export default About;
