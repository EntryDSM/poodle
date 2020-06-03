import React, { 
    FC,
    useCallback,
    useState,
    useEffect,
} from 'react';
import { DefaultRowWithPicture } from '../';
import { Input, DefaultButton } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';

interface Props {
    valueChangeHandler:(value: string) => void,
    middleSchool: string,
    isError: boolean,
}

const UserMiddleSchool: FC<Props> = ({
    valueChangeHandler,
    middleSchool,
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
        if(isError && isEmptyCheck(middleSchool)){
            emptyChange(true);
        } else {
            emptyChange(false);
        }
    },[isError, middleSchool])
    return (
        <DefaultRowWithPicture title="중학교명">
            <InfoElementContent>
                <div>
                    <Input
                        valueChangeHandler={valueChangeHandler} 
                        width="250px"
                        isEmpty={isEmpty}
                        value={middleSchool}
                    />
                    <DefaultButton>검색</DefaultButton>
                </div>
            </InfoElementContent>
        </DefaultRowWithPicture>
    )
}

export default UserMiddleSchool;