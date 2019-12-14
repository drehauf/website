import React, { Component } from 'react';
import InventoryData from 'assets/data/inventory.csv';
import InventoryItem from 'components/web/inventory/InventoryItem.js';
import CSVParser from 'components/web/utils/CSVParser.js';

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