import React, { 
    FC, 
    useCallback,
    useState,
    useEffect,
} from 'react';
import { DefaultRowWithPicture } from '../';
import { Input } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';

interface Props {
    valueChangeHandler:(value: string) => void
    name: string,
    isError: boolean,
}   

const UserNameRow: FC<Props> = ({
    valueChangeHandler,
    name,
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
        if(isError && isEmptyCheck(name)){
            emptyChange(true);
        } else {
            emptyChange(false);
        }
    },[isError, name])
    return (
        <DefaultRowWithPicture title="이름">
            <InfoElementContent>
                <Input 
                    width="160px"
                    valueChangeHandler={valueChangeHandler}
                    isEmpty={isEmpty}
                />
            </InfoElementContent>
        </DefaultRowWithPicture>
    )
}

export default React.memo(UserNameRow);