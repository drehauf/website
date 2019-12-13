import React, {Component} from 'react';

class InventoryItemOptions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.item.id,
      enabled: false,
      options: this.range(this.props.item.totalAmount)
    };
  }

  range = (max) => {
    let value = 1
    let range = []
    while (value <= max) {
      range.push(value);
      value++;
    }
    return range;
  }

  render() {
    return this.state.options.map((value) => (
      <option key={this.state.id} value={value} enabled={this.state.checked}>{value}</option>
    ))
  }

}

export default InventoryItemOptions;