import React from 'react';

import Sidebar from './Sidebar';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

import { CreateInventory, CreateUser } from 'components/dashboard/editors';

const items = [
  {
    name: 'Tagesgeschäft',
    items: [
      {
        id: 'kalender',
        name: 'Kalender',
        description: 'Termine und Verfügbarkeiten prüfen'
      },
      {
        id: 'angebot-erstellen',
        name: 'Angebot erstellen',
        description: 'Erzeugt ein leeres Angebotsformular'
      },
      {
        id: 'angebot-bearbeiten',
        name: 'Angebot bearbeiten',
        description: 'Öffnet ein bereits bestehendes Angebotsformular'
      },
      {
        id: 'angebot-duplizieren',
        name: 'Angebot duplizieren',
        description: 'Erzeugt eine Kopie eines bereits bestehendes Angebotsformulars'
      },
      {
        id: 'angebot-exportieren',
        name: 'Angebot exportieren',
        description: 'Erzeugt ein druckfertiges Angebot als PDF-Datei aus einem bereits bestehenden Angebotsformular inklusive AGB'
      },
      {
        id: 'rechnung-generieren',
        name: 'Rechnung generieren',
        description: 'Erzeugt eine druckfertige Rechnung als PDF-Datei aus einem bereits bestehenden Angebotsformular inklusive AGB und bucht alle Posten'
      }
    ]
  },
  {
    name: 'Inventar',
    items: [
      {
        id: 'inventar-erstellen',
        name: 'Neues Inventar erstellen',
        description: 'Erzeugt ein leeres Inventurformular'
      },
      {
        id: 'inventar-bearbeiten',
        name: 'Inventar bearbeiten',
        description: 'Öffnet eine Liste aller Vermögensgegenstände und gemieteten Artikel',
        form: <CreateInventory/>
      },
      {
        id: 'pakete-bearbeiten',
        name: 'Pakete bearbeiten',
        description: 'Öffnet die Konfiguration der Pakete'
      },
      {
        id: 'dienstleistung-erstellen',
        name: 'Dienstleistung erstellen',
        description: 'Erzeugt ein leeres Dienstleistungsformular'
      },
      {
        id: 'dienstleistung-bearbeiten',
        name: 'Dienstleistungen bearbeiten',
        description: 'Öffnet ein bereits bestehendes Dienstleistungsformular'
      }
    ]
  },
  {
    name: 'Unternehmen',
    items: [
      {
        id: 'gesellschafter',
        name: 'Gesellschafter erstellen',
        description: 'Erzeugt eine leere Gesellschafterkartei',
        form: <CreateUser/>
      },
      {
        id: 'firma',
        name: 'Firma bearbeiten',
        description: 'Öffnet die Firmenkartei'
      },
      {
        id: 'kunde',
        name: 'Kunde erstellen',
        description: 'Erzeugt eine neue Kundenkartei'
      },
      {
        id: 'kunden',
        name: 'Kunden bearbeiten',
        description: 'Öffnet eine bereits bestehende Kartei eines Kunden'
      }
    ]
  },
  {
    name: 'Anderes',
    items: [
      {
        id: 'jahresabschluss',
        name: 'Jahresabschluss exportieren',
        description: 'Erzeugt einen druckfertigen Jahresabschluss als PDF aus allen Buchungen'
      },
      {
        id: 'darlehensrechner',
        name: 'Darlehensrechner',
        description: 'Erzeugt eine druckfertige Darlehnskalkulation als PDF aus allen Buchungen'
      },
      {
        id: 'arbeitsstunden-erstellen',
        name: 'Arbeitsstunden hinzufügen',
        description: 'Erzeugt ein leeres Arbeitsstundenformular'
      },
      {
        id: 'arbeitsstunden-exportieren',
        name: 'Arbeitsstunden exportieren',
        description: 'Erzeugt eine druckfertige Übersicht als PDF-Datei aus allen bereits bestehenden Arbeitsstundenformularen'
      },
      {
        id: 'log',
        name: 'Logbuch',
        description: 'Erzeugt ein Logbuch aller Aktivitäten im DBMS'
      }
    ]
  }
];

export { Sidebar, SidebarSection, SidebarItem, items };