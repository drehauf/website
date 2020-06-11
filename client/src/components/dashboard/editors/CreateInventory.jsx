import React, { useState, useEffect } from 'react';
import FormArea from 'components/dashboard/editor/FormArea';

import api from 'components/utils/API';

const CreateInventory = () => {

  const [data, setData] = useState();

  // const [name, setName] = useState();
  // const [commonName, setCommonName] = useState();
  // const [storageLocation, setStorageLocation] = useState();
  // const [exactLocation, setExactLocation] = useState();
  // const [serialNumber, setSerialNumber] = useState();
  // const [status, setStatus] = useState();
  // const [purchaseDate, setPurchaseDate] = useState();
  // const [pricePerUnit, setPricePerUnit] = useState();
  // const [priceTotal, setPriceTotal] = useState();
  // const [amount, setAmount] = useState();

  // const { name, bindName } = useInput(data.name);
  // const { commonName, bindCommonName } = useInput(data.commonName);
  // const { storageLocation, bindStorageLocation } = useInput(data.storageLocation);
  // const { exactLocation, bindExactLocation } = useInput(data.exactLocation);
  // const { serialNumber, bindSerialNumber } = useInput(data.serialNumber);
  // const { status, bindStatus } = useInput(data.status);
  // const { purchaseDate, bindPurchaseDate } = useInput(data.purchaseDate);
  // const { pricePerUnit, bindPricePerUnit } = useInput(data.pricePerUnit);
  // const { priceTotal, bindPriceTotal } = useInput(data.priceTotal);
  // const { amount, bindAmount } = useInput(data.amount);

  useEffect(() => {
    if (!data) {
      api.getEquipment((response) => {
        setData(response);
      });
    }
  });

  if (data) {
    return data.map((item, index) => {
      return (
      <div key={index}>
        <p>{item.name}</p>
      </div>
      );
    });
  }
  return <p>loading</p>

  // if (data) {
  //   return <FormArea data={data}/>;
  //   return data.map((item, index) => {
  //     return <p>hallo</p>//(
        // <Row options={{ movable: true, deletable: true, modifiable: true }}>
        //   <input type="text" value={name} {...bindName} />
        //   <input type="text" value={commonName} {...bindCommonName} />
        //   <input type="text" value={storageLocation} {...bindStorageLocation} />
        //   <input type="text" value={exactLocation} {...bindExactLocation} />
        //   <input type="text" value={serialNumber} {...bindSerialNumber} />
        //   <input type="text" value={status} {...bindStatus} />
        //   <input type="text" value={purchaseDate} {...bindPurchaseDate} />
        //   <input type="text" value={pricePerUnit} {...bindPricePerUnit} />
        //   <input type="text" value={priceTotal} {...bindPriceTotal} />
        //   <input type="text" value={amount} {...bindAmount} />
        // </Row>
      //   <div key={index}>
      //     <input 
      //       type='text' 
      //       value={item.name} 
      //       placeholder='Name'
      //       // onChange={onChangeName}
      //     />
      //     <input 
      //       type='text' 
      //       value={item.commonName} 
      //       placeholder='Trivialname'
      //       // onChange={onChangeCommonName}
      //     />
      //     <input 
      //       type='text' 
      //       value={item.storageLocation} 
      //       placeholder='Lagerort'
      //       // onChange={onChangeLocation}
      //     />
      //     <input 
      //       type='text' 
      //       value={item.exactLocation} 
      //       placeholder='Genauer Lagerort'
      //       // onChange={onChangeExactLocation}
      //     />
      //     <input 
      //       type='text' 
      //       value={item.serialNumber} 
      //       placeholder='Seriennummer'
      //       // onChange={onChangeSerialNumber}
      //     />
      //     <input 
      //       type='text' 
      //       value={item.status} 
      //       placeholder='Status'
      //       // onChange={onChangeStatus}
      //     />
      //     <input 
      //       type='date' 
      //       value={item.purchaseDate} 
      //       placeholder='Kaufdatum'
      //       // onChange={onChangePurchaseDate}
      //     />
      //     <input 
      //       type='number' 
      //       value={item.pricePerUnit} 
      //       placeholder='Einzelpreis'
      //       // onChange={onChangePricePerUnit}
      //     />
      //     <input 
      //       type='number' 
      //       value={item.priceTotal} 
      //       placeholder='Gesamtpreis'
      //       // onChange={onChangePriceTotal}
      //     />
      //     <input 
      //       type='number' 
      //       value={item.rentalRate} 
      //       placeholder='Mietsatz'
      //       // onChange={onChangeRentalRate}
      //     />
      //     <input 
      //       type='number' 
      //       value={item.amount} 
      //       placeholder='Anzahl'
      //       // onChange={onChangeAmount}
      //     />
      //     <hr/>
      //   </div>


      // ); 
    // });
  // }
  // return <p>loading</p>

};

export default CreateInventory;