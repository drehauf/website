import React from 'react';
import { nanoid } from 'nanoid';
import TextBlock from '../simple/TextBlock';
import Subheadline from '../simple/Subheadline';
import Customer from '../customers/Customer';
import Customers from '../customers/Customers';

const Credentials = () => {
  const createCustomers = () => Customers.map((customer) => (
    <Customer key={nanoid()} data={customer} />
  ));

  return (
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
        {createCustomers()}
      </div>
    </>
  );
};

export default Credentials;
