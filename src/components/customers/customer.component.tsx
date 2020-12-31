import React, { FC as Component, PropsWithChildren } from 'react';
import TextBlock from '../simple/textblock.component';
import Customer from '../../models/customer.model';

interface Props extends PropsWithChildren<any> {
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
