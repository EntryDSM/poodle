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
    schoolPhoneNum: string,
    isError: boolean,
}

const UserSchoolPhoneNumRow: FC<Props> = ({
    describe,
    valueChangeHandler,
    schoolPhoneNum,
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
        if(isError && isEmptyCheck(schoolPhoneNum)){
            emptyChange(true);
        } else {
            emptyChange(false);
        }
    },[isError, schoolPhoneNum])
    return (
        <DefaultRow title="학교 연락처">
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

export default UserSchoolPhoneNumRow;