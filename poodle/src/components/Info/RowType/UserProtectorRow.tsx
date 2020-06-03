import React, { 
    FC,
    useCallback,
    useState,
    useEffect,
} from 'react';
import { DefaultRow } from '..';
import { Input } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';

interface Props {
    valueChangeHandler:(value: string) => void,
    protectorName: string,
    isError: boolean,
}

const UserProtectorRow: FC<Props> = ({
    valueChangeHandler,
    protectorName,
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
        if(isError && isEmptyCheck(protectorName)){
            emptyChange(true);
        } else {
            emptyChange(false);
        }
    },[isError, protectorName])
    return (
        <DefaultRow title="보호자 이름">
            <InfoElementContent>
                <Input 
                    valueChangeHandler={valueChangeHandler}
                    width="160px"
                    isEmpty={isEmpty}
                />
            </InfoElementContent>
        </DefaultRow>
    )
}

export default UserProtectorRow;