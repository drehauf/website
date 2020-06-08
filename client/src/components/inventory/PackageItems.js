const small = {
  name: 'S',
  description: 'Ein kleines Starterpaket, das gut zu gemütlichen Anlässen passt.',
  details: 'Transport, Auf- und Abbau inklusive.',
  items: [
    {
      name: "Behringer X32 Producer",
      quantity: 1,
      isChecked: true
    }
  ]
};

const medium = {
  name: 'M',
  description: 'Unsere Empfehlung für die meisten Parties und Veranstaltungen.',
  details: 'Beinhaltet auch Betreuung während der Veranstaltung.',
  id: 1,
  items: [
    {
      name: "Pioneer DJM-250-K",
      quantity: 1,
      isChecked: true
    }
  ]
};

const large = {
  name: 'XL',
  description: 'Alles drin: Konzerte, Theateraufführungen, Konferenzen und co.',
  details: 'Beinhaltet auch Betreuung während der Veranstaltung.',
  id: 2,
  items: [
    {
      name: "Mackie Onyx 1640i",
      quantity: 1,
      isChecked: true
    }
  ]
};

export default [ small, medium, large ];