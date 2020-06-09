import React, { useState, useEffect } from 'react';

const Row = ({ children }) => {

  console.log('row children', children);
  
  return (
    <div>
      {children}
    </div>
  );

}

export default Row;
