import React, {
  FC as Component, useState, useEffect, useRef, CSSProperties,
} from 'react';
import { nanoid } from 'nanoid';

interface Props {
  maxQuantity: number;
  quantity: number;
  returnFunction: (value: number) => void;
  isDisabled: boolean;
}

const Dropdown: Component<Props> = ({
  maxQuantity, quantity, returnFunction, isDisabled,
}: Props) => {
  const menu = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState<boolean>(false);

  const toggleMenu = () => {
    if (!isDisabled) {
      setShow(!show);
    }
  };

  const style = {
    '--disabled': isDisabled ? 'lightGray' : 'black',
  };

  function handleClickOutside(event: MouseEvent) {
    const target = event.target as Node;
    if (menu.current && !menu.current.contains(target)) {
      setShow(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const setValue = (value: number) => {
    returnFunction(value);
    toggleMenu();
  };

  const getOptions = (value: number) => {
    const options = [];
    for (let i = 1; i <= value; i++) {
      options.push(i);
    }
    return options;
  };

  const parsedOptions = getOptions(maxQuantity);

  return (
    <div className="dropdown" ref={menu}>
      <div
        className="dropdown_header"
        onClick={toggleMenu}
        style={style as CSSProperties}
      >
        {quantity}
      </div>
      {
        show ? (
          <div className="dropdown_card">
            {
              parsedOptions.map((value) => (
                <div key={nanoid()} className="dropdown_card_item" onClick={() => setValue(value)}>
                  {value}
                </div>
              ))
            }
          </div>
        ) : ''
      }
    </div>
  );
};

export default Dropdown;
