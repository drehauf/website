import React, {Component} from 'react';
import InventoryItem from './InventoryItem';

class Inventory extends Component {

  items = [
    {
      id: 1,
      name: 'Pioneer DJM-250-K',
      totalAmount: 1,
      amount: 1,
      checked: true
    },
    {
      id: 2,
      name: 'Mackie Onyx 1640i',
      totalAmount: 4,
      amount: 1,
      checked: false
    },
    {
      id: 3,
      name: 'HK Audio L.U.K.A.S Alpha: Bass',
      totalAmount: 2,
      amount: 1,
      checked: false
    },
    {
      id: 4,
      name: 'HK Audio L.U.K.A.S Alpha: Top',
      totalAmount: 4,
      amount: 1,
      checked: false
    }
  ];

  getItems = () => {
    return this.items.map((item) => (
        <InventoryItem key={item.key} item={item}/>
    ));
  }

  render() {
    return(
      <table id='inventory'>
        <tbody>
        {this.getItems()}
        </tbody>
      </table>
    );
  }

}

export default Inventory;