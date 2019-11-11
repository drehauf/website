import React, {Component} from 'react';
import '../../About.css';

class About extends Component {

  render() {
    return (
      <div className="container">
        <div className="title">
          <p>Über uns</p>
        </div>
        <div className="flex-container">
          <div className="project">
            <h2>Das Projekt</h2>
            <p>Als Schülerfirma wird ein von Auszubildenden oder Schülern eigenverantwortlich gegründetes Unternehmen und pädagogisches Projekt bezeichnet, das mit realem Geschäftsbetrieb, realen Waren und realen Geldströmen unter dem Schirm einer Schule auf Dauer geführt wird.<br/>
            Auszug aus dem Gesellschaftervertrag: <br/></p>
            <p className="cite">„Es ist Anliegen der Schülerfirma, dass die Schüler praktisches Wissen unter anderem im Bereich der Planung und Umsetzung von Veranstaltungen zu erwerben und in wirtschaftsrealitätsnahen Zusammenhängen anwenden, sowie Schüsselkompetenzen für die erfolgreiche Bewältigung des Überganges von der Schule in den Beruf, wie Eigeninitiative, Verantwortungsbereitschaft und Teamfähigkeit erwerben und anwenden.“</p>
            <p>Ursprünglich als eine temporäre Arbeitsgruppe, mit der Aufgabe, unter professioneller Anleitung ihre eigene Jugendweihe zu gestalten, starteten wir im März 2010 im schulischen Rahmen mit der Planung unserer ersten eigenen Veranstaltung.<br/><br/>
            Das Interesse an Tanz und lauter Musik brachte uns auf die Idee, eine eigene erste Party zu organisieren. Locations und DJs wurden gesucht und verglichen, Flyer entworfen, an Raumkonzepten getüftelt und kulinarische Menüs entwickelt.
            Nach dem Erfolg der ersten eignen Veranstaltung kristallisierte sich schnell eine Kerngruppe höchst motivierter junger Menschen heraus, die Spaß daran fanden und sich weiter damit beschäftigten.<br/><br/>
            So wurde wenig später die Schülerfirma Dreh Auf S-GmbH wurde gegründet. Heute versteht sich die Dreh Auf S-GmbH als Dienstleister im Bereich des Veranstaltungsmanagements und der Veranstaltungstechnik sowie vielen kleineren multimedialen Teilbranchen.</p>
            <br/>
            <a href="#contact">FIRMA UND SCHULE AUF KARTE ANZEIGEN</a>
          </div>
          <div className="patron">
            <h2>Der Schirm</h2>
            <p>Unser Träger, die Freie Montessorischule Huckepack wurde 1995 vom Huckepack e. V. gegründet.<br/><br/>
            Umfassend einer Grundschule mit Hort, einer Mittelschule und einem Beruflichen Gymnasium der Wirtschaftswissenschaften bietet sie als Gesamtschule die Möglichkeit, ohne Schulwechsel die gesamte Schullaufbahn einschließlich des Abiturs an einer Schule zu absolvieren.<br/><br/>
            Die Montessorischule als staatlich anerkannte Schule orientiert sich an den reformpädagogischen Grundsätzen Maria Montessoris.<br/><br/>
            Im Mittelpunkt des Lernkonzeptes stehen die Befähigung der Schülerinnen und Schüler zur Selbstbestimmung und die Persönlichkeitsentwicklung jedes Einzelnen, die Förderung der Schülerinnen und Schüler entsprechend ihrem persönlichen Entwicklungsstand, sowie die Integration von Kindern mit körperlichen und kognitiven Beeinträchtigungen.</p>
            <br/>
            <a href="https://www.huckepack-ev.de/montessorischule.html">FREIE MONTESSORISCHULE HUCKEPACK</a>
          </div>
        </div>
      </div>
    );
  }

}

export default About;