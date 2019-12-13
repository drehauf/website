import React, { Component, Fragment } from 'react';
import InventoryData from './../../../assets/data/inventory.csv';
import InventoryItem from './InventoryItem.js';
import CSVParser from './../utils/CSVParser.js';

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

  table = (tableData) => {
    return tableData.map((row, index) => (
      <tr key={index}>
        <InventoryItem rowData={row}/>
      </tr>
    ));
  };

}

export default Inventory;