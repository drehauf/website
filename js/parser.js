let parser = {

  /*
  * Executes ajax get request, delegates file parsing to callback()
  */
  parse: function(uri, callback) {
    $.ajax({
      type: 'GET',
      url: uri,
      dataType: 'text',
      success: (file) => {
        parser.getParser(uri, (parse) => {
          parse(file, callback)
        });
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
  },

  /*
  * Parses json data to object
  */
  parseJSON: function(file, callback) {
    let data = [];
    callback(data);
  },

  /*
  * Splits the uri down to the file extension
  * Hands the right parser to callback()
  */
  getParser: function(uri, callback) {
    let uriComponents = uri.split('/');
    let file = uriComponents[uriComponents.length - 1];
    let extension = file.split('.')[1].toUpperCase();
    switch (extension) {
      case Files.csv:
        callback(parser.parseCSV);
        break;
      case Files.json:
        callback(parser.parseJSON);
        break;
    }
  }

};

const Files = Object.freeze({
  csv: 'CSV',
  json: 'JSON'
});