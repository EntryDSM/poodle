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
    describe: string,
    valueChangeHandler:(value: string) => void,
    phoneNum: string,
    isError: boolean,
}

const UserPhoneNumRow: FC<Props> = ({
    describe,
    valueChangeHandler,
    phoneNum,
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
        if(isError && isEmptyCheck(phoneNum)){
            emptyChange(true);
        } else {
            emptyChange(false);
        }
    },[isError, phoneNum])
    return (
        <DefaultRow title="본인 연락처">
            <InfoElementContent>
                <Input 
                    valueChangeHandler={valueChangeHandler}
                    width="250px"
                    isEmpty={isEmpty}
                />
                <div>
                    <p>{describe}</p>
                </div>
            </InfoElementContent>
        </DefaultRow>
    )
}

export default UserPhoneNumRow;