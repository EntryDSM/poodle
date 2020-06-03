import React, { 
    FC, 
    useState, 
    useEffect,
    useCallback,
} from 'react';
import { DefaultRowWithPicture } from '..';
import { Input } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';

interface Props {
    valueChangeHandler:(value: string) => void,
    userNumber: string,
    isError: boolean,
}

const UserNumberRow: FC<Props> = ({
    valueChangeHandler,
    userNumber,
    isError,
}) => {
    const [grade, gradeChange] = useState<Number>();
    const [classNum, classChange] = useState<Number>();
    const [number, numberChange] = useState<Number>();
    const [isEmpty, emptyChange] = useState<boolean>(false);
    useEffect(()=> {
        if(grade && classNum && number){
            const value = `${grade}${classNum}${number}`;
            valueChangeHandler(value);
        }
    },[grade, classNum, number, valueChangeHandler])
    const isEmptyCheck = 
    useCallback((text: string)=> {
        if(text.length > 0){
            return false;
        }
        return true;
    },[])
    useEffect(()=> {
        if(isError && isEmptyCheck(userNumber)){
            emptyChange(true);
        } else {
            emptyChange(false);
        }
    },[isError, userNumber])
    return (
        <DefaultRowWithPicture title="학번">
            <InfoElementContent>
                <div>
                    <Input 
                        width="60px"
                        placeholder=""
                        isCenter={true}
                        type="number"
                        valueChangeHandler={gradeChange}
                        isEmpty={isEmpty}
                    />
                    <span>학년</span>
                    <Input
                        width="60px"
                        placeholder=""
                        isCenter={true}
                        type="number"
                        valueChangeHandler={classChange}
                        isEmpty={isEmpty}
                    />
                    <span>반</span>
                    <Input
                        width="60px"
                        placeholder=""
                        isCenter={true}
                        type="number"
                        valueChangeHandler={numberChange}
                        isEmpty={isEmpty}
                    />
                    <span>번</span>
                </div>
            </InfoElementContent>
        </DefaultRowWithPicture>
    )
}

export default UserNumberRow;