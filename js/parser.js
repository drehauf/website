let parser = {

  /*
  * Executes ajax get request, delegates file parsing to callback()
  */
  get: function(uri, callback) {
    $.ajax({
      type: 'GET',
      url: uri,
      dataType: 'text',
      success: (file) => {
        callback(file);
      }
    });
  },

  /*
  * Parses csv data to object
  * Splits by line and by semicolon
  */
  processCSV: function(file) {
    let data = [];
    let lines = file.split('\n');
    for (let i = 1; i < lines.length; i++) {
      let line = lines[i].split(';');
      data.push({
        name: line[0],
        quantity: line[1]
      });
    }
    populateTable(data);
  }

};