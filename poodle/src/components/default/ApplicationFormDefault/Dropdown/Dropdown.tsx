import React, { useCallback, useState, useEffect } from 'react';
import {
  DropdownDiv,
  DropdownElement,
  DropdownCurrentElement,
} from '@/styles/ApplicationFormDefault';

interface options<T> {
  VALUE: T;
  LABEL: string;
}

interface Props<T> {
  width?: string;
  options: options<T>[];
  isAble?: boolean;
  onChange: (value: T) => void;
  value: T;
  children?: React.ReactNode;
  dropdownChange?: (value: T) => void;
}

function Dropdown<T>({
  width = '160px',
  options,
  isAble = true,
  value,
  children,
  onChange,
  dropdownChange,
}: Props<T>) {
  const [checkedMenu, checkedMenuChange] = useState(options[0]);
  useEffect(() => {
    const savedData = getSavedData(value);
    checkedMenuChange(savedData);
    if (dropdownChange) {
      dropdownChange(savedData.VALUE);
    }
  }, [value]);
  const getUncheckedMenu = useCallback(
    (options: options<T>[], checkedMenu: options<T>): options<T>[] => {
      const unCheckedMenu = options.filter(
        menu => menu.LABEL != checkedMenu.LABEL,
      );
      return unCheckedMenu;
    },
    [],
  );
  const getSavedData = useCallback(value => {
    const savedMenu = options.filter(menu => menu.VALUE === value);
    if (savedMenu.length <= 0) {
      return options[0];
    }
    return savedMenu[0];
  }, []);
  const elementClickHandler = useCallback((clickedMenu: options<T>) => {
    checkedMenuChange(clickedMenu);
    onChange(clickedMenu.VALUE);
    if (dropdownChange) {
      dropdownChange(clickedMenu.VALUE);
    }
  }, []);
  return (
    <DropdownDiv width={width} isAble={!isAble}>
      <label>
        {isAble ? <input type='checkbox' /> : ''}
        <DropdownCurrentElement isAble={!isAble}>
          {checkedMenu.LABEL}
        </DropdownCurrentElement>
        <div className='DropdownWrapper'>
          {getUncheckedMenu(options, checkedMenu).map((menu: options<T>) => (
            <DropdownElement
              onClick={() => elementClickHandler(menu)}
              key={menu.LABEL}
            >
              <p>{menu.LABEL}</p>
            </DropdownElement>
          ))}
        </div>
      </label>
      {children}
    </DropdownDiv>
  );
}

export default Dropdown;
