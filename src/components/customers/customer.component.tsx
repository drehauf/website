import React, { FC as Component } from 'react';
import TextBlock from '../simple/TextBlock';
import Customer from '../../models/customer.model';

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  key: string;
  customer: Customer;
}

const CustomerComponent: Component<Props> = ({ customer }: Props) => (
  <div className="customer">
    <img
      className="customer_logo"
      src={customer.image}
      alt={customer.name}
    />
    <h3>{customer.name}</h3>
    <TextBlock>
      <p>{customer.event}</p>
    </TextBlock>
  </div>
);

export default CustomerComponent;
