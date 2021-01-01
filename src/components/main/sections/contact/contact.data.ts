import Article from '../section/article.model';

const withShoppingCart: Article = {
  title: 'Alles fertig?',
  paragraphs: [
    'Schön, dass Sie fündig geworden sind! Sobald Sie unverbindlich eine Mietanfrage stellen, klären wir den Rest. Sie können Ihre Auswahl dann auch später noch verändern.',
  ],
};

const noShoppingCart: Article = {
  title: 'Noch Fragen?',
  paragraphs: [
    'Vielleicht können wir helfen.',
  ],
};

export { withShoppingCart, noShoppingCart };
