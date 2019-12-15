import React, {useState, useEffect, useRef} from 'react';

const Dropdown = ({ options, returnFunction, isDisabled }) => {
  const dropdownMenu = useRef(null);
  const [show, setShow] = useState(false);
  const [currentValue, setCurrentValue] = useState(1);

  const toggleMenu = () => {
    if(!isDisabled) {
      setShow(!show);
    }
  }

  const style = {
    "--disabled": isDisabled ? 'lightGray' : 'black',
  };

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

  const setValue = (value) => {
    returnFunction(value);
    setCurrentValue(value);
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
      <div
        className="dropdown_header"
        onClick={toggleMenu}
        style={style}
      >
        {currentValue}
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