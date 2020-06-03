import React , { 
    FC,
    useCallback,
    useState,
    useEffect,
} from 'react';
import { DefaultRow } from '..';
import { Input, DefaultButton } from '../../default/ApplicationFormDefault';
import { 
    InfoElementContent, 
    InfoAddressRowContent 
} from '../../../styles/Info';

interface Props {
    valueChangeHandler:(value: string) => void,
    address: string,
    isError: boolean,
}

const UserAddressRow: FC<Props> = ({
        valueChangeHandler,
        address,
        isError,
}) => {
    const [isEmpty, emptyChange] = useState<boolean>(false);
    const isEmptyCheck = 
    useCallback((text: string)=> {
        if(text.length > 0){
            return false;
        }
        return true;
    },[])
    useEffect(()=> {
        if(isError && isEmptyCheck(address)){
            emptyChange(true);
        } else {
            emptyChange(false);
        }
    },[isError, address])
    return (
        <DefaultRow title="주소">
            <InfoElementContent>
                <InfoAddressRowContent>
                    <div>
                        <Input 
                            width="160px"
                            valueChangeHandler={()=>{}}  
                            isEmpty={isEmpty}  
                        />
                        
                        <Input 
                            width="301px"
                            valueChangeHandler={()=>{}}    
                            isEmpty={isEmpty} 
                        />
                        <DefaultButton>검색</DefaultButton>
                    </div>
                    <div>
                        <Input 
                            width="580px"
                            valueChangeHandler={()=>{}}    
                            isEmpty={isEmpty} 
                        />
                    </div>
                </InfoAddressRowContent>
            </InfoElementContent>
        </DefaultRow>
    )
}

export default UserAddressRow;