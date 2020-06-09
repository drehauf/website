import React, { useState, useEffect } from 'react';
import api from 'components/utils/API';

const CreateUser = () => {

  const [data, setData] = useState();

  useEffect(() => {
    if (!data) {
      api.getUsers((response) => {
        setData(response);
      });
    }
  });

  if (data) {
    return data.map((item, index) => {
      return (
      <div key={index}>
        <p>{item.username}</p>
      </div>
      );
    });
  }
  return <p>loading</p>

};

export default CreateUser;