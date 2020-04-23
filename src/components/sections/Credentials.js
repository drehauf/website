import React, { Fragment } from 'react';
import TextBlock from 'components/simple/TextBlock';
import Subheadline from 'components/simple/Subheadline';
import Customer from 'components/customers/Customer';
import Customers from 'components/customers/Customers';

const Credentials = () => {

  const createCustomers = () => {
    return Customers.map((customer, index) => (
      <Customer key={index} data={customer}/>
    ));
  }

  return(
    <Fragment>
      <Subheadline text='Nur zufriedene Kunden'/>
      <div className='u-margin-top-bottom--large'>
        <TextBlock>
          <p>
            Ein Auzug aus dem, was die Firma so erbracht hat. Von 2011 bis heute:
          </p>
        </TextBlock>
      </div>
      <div className='customers'>
        {createCustomers()}
      </div>
    </Fragment>
  );

}

export default Credentials;