import React, { FC, useCallback } from 'react';
import { DropdownDiv, DropdownElement, DropdownCurrentElement } from '../../../../styles/ApplicationFormDefault';

interface menuList {
    VALUE: string, 
    isChecked: boolean,
}

interface Props {
    width?: string,
    menuList: menuList[],
    isAble?: boolean,
    setList: (list: menuList[]) => void,
    valueChangeHandler: (value: string) => void,
}

const Dropdown: FC<Props> = ({ 
    menuList, 
    isAble= true, 
    setList, 
    width = "160px",
    valueChangeHandler,
    children
}) => {
    const getCheckedMenu = useCallback((
        menuList:menuList[]
    ): menuList => {
        const checkedMenu = menuList.filter(menu => menu.isChecked);
        return checkedMenu[0];
    },[])
    const getUncheckedMenu = useCallback((
        menuList:menuList[]
    ): menuList[] => {
        const unCheckedMenu = menuList.filter(menu => !menu.isChecked);
        return unCheckedMenu;
    },[])
    const updateCheckedMenu = useCallback((
        menuList:menuList[],
        clickedValue:string
    ):menuList[] => {
        const copyList = menuList.slice();
        copyList.map((menu:menuList)=> {
            if(menu.VALUE === clickedValue){
                menu.isChecked = true;
                valueChangeHandler(menu.VALUE);
            } else {
                menu.isChecked = false;
            }
            return menu;
        })
        return copyList;
    },[valueChangeHandler])
    const elementClickHandler = useCallback((
        menuList:menuList[],
        clickedMenu:menuList,
    ) => {
        const updatedMenu = updateCheckedMenu(menuList,clickedMenu.VALUE);
        setList(updatedMenu);
    },[setList, updateCheckedMenu])
    return (
        <DropdownDiv width={width} isAble={!isAble}>
            <label>
                {isAble ? <input type="checkbox"/> : ""}
                <DropdownCurrentElement isAble={!isAble}>{getCheckedMenu(menuList).VALUE}</DropdownCurrentElement>
                <div className="DropdownWrapper">
                    {
                        getUncheckedMenu(menuList)
                        .map((menu:menuList)=> {
                            return (
                                <DropdownElement onClick={()=> elementClickHandler(menuList,menu)}>
                                    <p>
                                        {menu.VALUE}
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