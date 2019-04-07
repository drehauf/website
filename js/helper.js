let helper = {

  /*
  * Get Elements by Id or Elements by className
  */
  getElement: (id) => (document.getElementById(id)),
  getElements: (className) => (document.getElementsByClassName(className)),

  /*
  * Replace all placeholder in a cloned template by data
  */
  setCloneData: function(clone, data) {
    for (let key in data) {
      clone.innerHTML = clone.innerHTML.replace('%' + key, data[key]);
    }
  },

  /*
  * Clone a template to a div, callback for setCloneData()
  */
  cloneTemplate: function(templateId, divId, callback) {
    let template = helper.getElement(templateId).firstElementChild;
    let div = helper.getElement(divId);
    let clone = template.cloneNode(true);
    div.append(clone);
    callback(clone);
    if (div.children.length > 0) {
      // div.removeChild();
    }
  },

  /*
  * Formats a date: Sunday, 7 March 2019 to 20190407
  */
  formatDate: function(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    return `${year}${month}${day}`;
  },



};