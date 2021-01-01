import React from 'react';
import { nanoid } from 'nanoid';
import Customer from './customers/customer.component';
import customers from './customers/customers.data';
import data from './credentials.data';
import useSection from '../section/section.hook';

const Credentials = () => (
  <>
    {useSection(data)}
    <div className="customers">
      {
        customers.map((customer) => <Customer key={nanoid()} customer={customer} />)
      }
    </div>
  </>
);

export default Credentials;
