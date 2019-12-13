import React, {Component} from 'react';
import InventoryItemOptions from './InventoryItemOptions';

class InventoryItem extends Component {

  constructor(props) {
    super(props);
  }

  didCheckItem = (checked) => {
    return function() {
      console.log(checked);
      // this.props.item.checked = !this.props.item.checked;
    }
  }

  render() {
    return(
      <tr>
        <td>
          <input type='checkbox' defaultChecked={this.props.item.checked} onChange={this.didCheckItem(this.props.item.checked)}/>
        </td>
        <td>
          <p>{this.props.item.name}</p>
        </td>
        <td>
          <select value={this.props.item.value} selected={this.props.item.value} disabled={!this.props.item.checked}>
            <InventoryItemOptions item={this.props.item}/>
          </select>
        </td>
      </tr>
    );
  }

}

export default InventoryItem;