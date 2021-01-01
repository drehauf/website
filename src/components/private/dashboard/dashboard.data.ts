export default [
  {
    name: 'Tagesgeschäft',
    actions: [
      {
        id: 'kalender',
        name: 'Kalender',
        description: 'Termine und Verfügbarkeiten prüfen',
      },
      {
        id: 'angebot-erstellen',
        name: 'Angebot erstellen',
        description: 'Erzeugt ein leeres Angebotsformular',
      },
      {
        id: 'angebot-bearbeiten',
        name: 'Angebot bearbeiten',
        description: 'Öffnet ein bereits bestehendes Angebotsformular',
      },
      {
        id: 'angebot-duplizieren',
        name: 'Angebot duplizieren',
        description: 'Erzeugt eine Kopie eines bereits bestehendes Angebotsformulars',
      },
      {
        id: 'angebot-exportieren',
        name: 'Angebot exportieren',
        description: 'Erzeugt ein druckfertiges Angebot als PDF-Datei aus einem bereits bestehenden Angebotsformular inklusive AGB',
      },
      {
        id: 'rechnung-generieren',
        name: 'Rechnung generieren',
        description: 'Erzeugt eine druckfertige Rechnung als PDF-Datei aus einem bereits bestehenden Angebotsformular inklusive AGB und bucht alle Posten',
      },
    ],
  },
  {
    name: 'Inventar',
    actions: [
      {
        id: 'inventar-erstellen',
        name: 'Neues Inventar erstellen',
        description: 'Erzeugt ein leeres Inventurformular',
      },
      {
        id: 'inventar-bearbeiten',
        name: 'Inventar bearbeiten',
        description: 'Öffnet eine Liste aller Vermögensgegenstände und gemieteten Artikel',
      },
      {
        id: 'dienstleistung-erstellen',
        name: 'Dienstleistung erstellen',
        description: 'Erzeugt ein leeres Dienstleistungsformular',
      },
      {
        id: 'dienstleistung-bearbeiten',
        name: 'Dienstleistungen bearbeiten',
        description: 'Öffnet ein bereits bestehendes Dienstleistungsformular',
      },
    ],
  },
  {
    name: 'Unternehmen',
    actions: [
      {
        id: 'gesellschafter',
        name: 'Gesellschafter erstellen',
        description: 'Erzeugt eine leere Gesellschafterkartei',
      },
      {
        id: 'firma',
        name: 'Firma bearbeiten',
        description: 'Öffnet die Firmenkartei',
      },
      {
        id: 'kunde',
        name: 'Kunde erstellen',
        description: 'Erzeugt eine neue Kundenkartei',
      },
      {
        id: 'kunden',
        name: 'Kunden bearbeiten',
        description: 'Öffnet eine bereits bestehende Kartei eines Kunden',
      },
    ],
  },
  {
    name: 'Anderes',
    actions: [
      {
        id: 'jahresabschluss',
        name: 'Jahresabschluss exportieren',
        description: 'Erzeugt einen druckfertigen Jahresabschluss als PDF aus allen Buchungen',
      },
      {
        id: 'darlehensrechner',
        name: 'Darlehensrechner',
        description: 'Erzeugt eine druckfertige Darlehnskalkulation als PDF aus allen Buchungen',
      },
      {
        id: 'arbeitsstunden-erstellen',
        name: 'Arbeitsstunden hinzufügen',
        description: 'Erzeugt ein leeres Arbeitsstundenformular',
      },
      {
        id: 'arbeitsstunden-exportieren',
        name: 'Arbeitsstunden exportieren',
        description: 'Erzeugt eine druckfertige Übersicht als PDF-Datei aus allen bereits bestehenden Arbeitsstundenformularen',
      },
      {
        id: 'log',
        name: 'Logbuch',
        description: 'Erzeugt ein Logbuch aller Aktivitäten im DBMS',
      },
    ],
  },
];
