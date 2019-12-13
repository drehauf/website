import React, { Component, Fragment } from 'react';
import InventoryData from './inventar.csv';
import CSVParser from './CSVParser.js';

class Inventory extends Component {

  state = {
    inventory: []
  }

  componentDidMount() {
    CSVParser.get(InventoryData, (data) => {
      this.setState({
        inventory: data
      });
    });
  }

  render() {
    return(
      <table id='inventory'>
        <tbody>
          {this.table(this.state.inventory)}
        </tbody>
      </table>
    );
  }

  selectOptions = (quantity) => {
    let options = []
    for (let value = 1; value <= quantity; value++) {
      options.push(
        <option>{value}</option>
      );
    }
    return options;
  }

  tableRow = (rowData) => {
    let {name, quantity} = rowData;
    return(
      <Fragment>
        <td>
          <input type='checkbox'/>
        </td>
        <td>
          {name}
        </td>
        <td>
          <select>
            {this.selectOptions(quantity)}
          </select>
        </td>
      </Fragment>
    );
  };

  table = (tableData) => {
    return tableData.map((row, index) => (
      <tr key={index}>
        {this.tableRow(row)}
      </tr>
    ));
  };

}

export default Inventory;