import React, { useState, useEffect } from 'react';
import FormRow from 'components/dashboard/editor/FormRow';

const DataArea = ({ data, onDataChanged }) => {

  // const [rows, setRows] = useState();

  // useEffect(() => {
  //   if (data) {
  //     setRows(data)
  //   }
  // }, []);

  if (data) {
    return data.map((row, index) => (
      <FormRow key={index}>
        {
          (row) => row.map((cell, index) => (
            <input key={index} value={cell}/>
          ))
        }
      </FormRow>
    ));
  }
  return <p>loading</p>;
}

export default DataArea;
