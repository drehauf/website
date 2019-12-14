import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({options, returnFunction}) => {
  const dropdownMenu = useRef(null);
  const [show, setShow] = useState(false);

  const toggleMenu = () => {
    setShow(!show);
  }

 
  function handleClickOutside(event) {
    if (dropdownMenu.current && !dropdownMenu.current.contains(event.target)) {
      setShow(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const setValue = (event) => {
    console.log(event);
    toggleMenu();
  }

  const getOptions = (value) => {
    let options = [];
    for(let i = 1; i <= value; i++) {
      options.push(i);
    }
    return options;
  }

  const parsedOptions = getOptions(options);

  return(
    <div className="dropdown" ref={dropdownMenu}>
      <div className="dropdown_header" onClick={toggleMenu}>
        Select
      </div>
      {show ? 
      <div className="dropdown_card">
        {parsedOptions.map((value, index) => {
          return (
            <div key={index} className="dropdown_card_item" onClick={() => setValue(value)}>{value}</div>
          );
        })}
      </div>
       : ""}
    </div>
  )
}

export default Dropdown;