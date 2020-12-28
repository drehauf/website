import $ from 'jquery';

export default {

  get(uri, callback) {
    this.fetch(uri, callback);
  },

  fetch(uri, callback) {
    $.ajax({
      type: 'GET',
      url: uri,
      dataType: 'text',
      success: (file) => {
        this.parse(file, callback);
      },
      error: (error) => {
        // eslint-disable-next-line no-console
        console.error('Parsing CSV file failed:', error);
      },
    });
  },

  parse(file, callback) {
    const data = [];
    const lines = file.split('\n');
    const title = lines[0].replace(': Tabelle 1', '');
    for (let i = 2; i < lines.length; i++) {
      const line = lines[i].split(';');
      const name = line[0];
      const quantity = Number(line[10]);
      if (name !== '' && name !== '/' && name !== '\r' && quantity !== 0 && !Number.isNaN(quantity)) {
        data.push({
          name,
          maxQuantity: quantity,
        });
      }
    }
    callback({
      title,
      data,
    });
  },

  parsePages(file, callback) {
    const pages = [];
    let startIndex = 2;

    file.split('\n').forEach((line, index) => {
      const cells = line.split(';');
      const name = cells[0];
      const quantity = Number(cells[10]);

      if (name !== '' && name !== '/' && name !== '\r' && name !== 'Bezeichnung') {
        if (Number.isNaN(quantity) && name.includes(':')) { // || index == file.indexOf(line)) {
          pages.push({
            title: name.replace(': Tabelle 1', ''),
            range: {
              start: startIndex,
              end: index - 2,
            },
            lines: [],
          });

          startIndex = index + 2;
        }
      }
    });
    callback(pages);
  },
};
