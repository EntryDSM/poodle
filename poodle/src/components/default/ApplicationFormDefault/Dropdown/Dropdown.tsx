import React, { 
    FC, 
    useCallback,
    useState, 
    useEffect,
} from 'react';
import {
    DropdownDiv, 
    DropdownElement, 
    DropdownCurrentElement 
} from '../../../../styles/ApplicationFormDefault';

interface menuList {
    VALUE: string, 
    LABEL: string,
}

interface Props {
    width?: string,
    menuList: menuList[],
    isAble?: boolean,
    onChange: (value: string) => void,
    savedValue?: string,
}

const Dropdown: FC<Props> = ({ 
    menuList, 
    isAble= true,
    width = "160px",
    onChange,
    children,
    savedValue,
}) => {
    const [checkedMenu, checkedMenuChange] = useState(menuList[0]);
    useEffect(()=> {
        checkedMenuChange(getSavedData(savedValue));
    },[savedValue])
    const getUncheckedMenu = useCallback((
        menuList:menuList[],
        checkedMenu: menuList,
    ): menuList[] => {
        const unCheckedMenu = menuList.filter(menu => menu.LABEL != checkedMenu.LABEL);
        return unCheckedMenu;
    },[])
    const getSavedData = useCallback((savedValue)=> {
        if(savedValue.length <= 0){   
            return menuList[0];
        }
        const savedMenu = menuList.filter(menu => menu.VALUE == savedValue);
        return savedMenu[0];
    },[])
    const elementClickHandler = useCallback((
        clickedMenu:menuList,
    ) => {
        checkedMenuChange(clickedMenu);
        onChange(clickedMenu.VALUE);
    },[])
    return (
        <DropdownDiv width={width} isAble={!isAble}>
            <label>
                {isAble ? <input type="checkbox"/> : ""}
                <DropdownCurrentElement isAble={!isAble}>{checkedMenu.LABEL}</DropdownCurrentElement>
                <div className="DropdownWrapper">
                    {
                        getUncheckedMenu(menuList,checkedMenu)
                        .map((menu:menuList)=> {
                            return (
                                <DropdownElement 
                                    onClick={()=> elementClickHandler(menu)}
                                    key={menu.VALUE}
                                >
                                    <p>
                                        {menu.LABEL}
                                    </p>
                                </DropdownElement>
                            )
                        })
                    }
                </div>
            </label>
            {children}
        </DropdownDiv>
    )
}

export default Dropdown;