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
        console.log('Parsing CSV file failed:', error);
      }
    });
  },

  parse(file, callback) {
    let data = [];
    let lines = file.split('\n');
    let title = lines[0].replace(': Tabelle 1', '');
    for (let i = 2; i < lines.length; i++) {
      let line = lines[i].split(';');
      let name = line[0];
      let quantity = Number(line[10]);
      if (name !== '' && name !== '/' && name !== '\r' && quantity !== 0 && !isNaN(quantity)) {
        data.push({
          name: name,
          quantity: quantity
        });
      }
    }
    callback({
      title: title,
      data: data
    });
  },

  parsePages(file, callback) {
    let pages = []
    let startIndex = 2;

    file.split('\n').forEach((line, index) => {
      let cells = line.split(';');
      let name = cells[0];
      let quantity = Number(cells[10]);

      if (name !== '' && name !== '/' && name !== '\r' && name !== 'Bezeichnung') {
        if (isNaN(quantity) && name.includes(':')) { //|| index == file.indexOf(line)) {
          pages.push({
            title: name.replace(': Tabelle 1', ''),
            range: {
              start: startIndex,
              end: index - 2
            },
            lines: []
          });

          startIndex = index + 2;
        }
      }
    });
    console.log(pages);
    callback(pages)
  }
}