import React, {Component} from 'react';
import InventoryItem from './InventoryItem';

class InventoryItems extends Component {

  render() {
    return this.props.items.map((item) => (
        <InventoryItem key={item.key} item={item}/>
    ));
  }

}

export default InventoryItems;