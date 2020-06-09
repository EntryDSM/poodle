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
    addressSearchModalAbleChange: (value: boolean) => void,
    detailAddress: string,
    postNum: string,
}

const UserAddressRow: FC<Props> = ({
        valueChangeHandler,
        address,
        isError,
        addressSearchModalAbleChange,
        detailAddress,
        postNum,
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
                            value={postNum}
                            disable={true}
                        />
                        
                        <Input 
                            width="301px"
                            valueChangeHandler={()=>{}}    
                            isEmpty={isEmpty} 
                            value={address}
                            disable={true}
                        />
                        <DefaultButton onClick={()=> addressSearchModalAbleChange(true)}>검색</DefaultButton>
                    </div>
                    <div>
                        <Input 
                            width="580px"
                            valueChangeHandler={valueChangeHandler}    
                            isEmpty={isEmpty} 
                            value={detailAddress}
                        />
                    </div>
                </InfoAddressRowContent>
            </InfoElementContent>
        </DefaultRow>
    )
}

export default UserAddressRow;