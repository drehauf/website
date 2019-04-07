let parser = {

  /*
  * Executes ajax get request, delegates file parsing to callback()
  */
  get: function(uri, parse, callback) {
    $.ajax({
      type: 'GET',
      url: uri,
      dataType: 'text',
      success: (file) => {
        parse(file, callback)
      }
    });
  },

  /*
  * Parses csv data to object
  * Splits by line and by semicolon
  */
  parseCSV: function(file, callback) {
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
};

const Files = Object.freeze({
  CSV: parser.parseCSV,
  JSON: parser.parsrJSON
});