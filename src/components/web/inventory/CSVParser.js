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
    for (let i = 1; i < lines.length; i++) {
      let line = lines[i].split(';');
      data.push({
        name: line[0],
        quantity: line[1]
      });
    }
    callback(data);
  }

}