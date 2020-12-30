import React from 'react';
import { nanoid } from 'nanoid';
import TextBlock from '../simple/TextBlock';
import Subheadline from '../simple/Subheadline';
import Customer from '../customers/customer.component';
import customers from '../../data/customers.data';

const Credentials = () => (
  <>
    <Subheadline text="Nur zufriedene Kunden" />
    <div className="u-margin-top-bottom--large">
      <TextBlock>
        <p>
          Ein Auzug aus dem, was die Firma so erbracht hat. Von 2011 bis heute:
        </p>
      </TextBlock>
    </div>
    <div className="customers">
      {
        customers.map((customer) => <Customer key={nanoid()} customer={customer} />)
      }
    </div>
  </>
);

export default Credentials;
