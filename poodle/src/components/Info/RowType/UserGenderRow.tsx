import React, { 
    FC, 
    useCallback,
} from 'react';
import { DefaultRowWithPicture } from '../';
import { Radio } from '../../default/ApplicationFormDefault';
import { InfoElementContent } from '../../../styles/Info';

interface Props {
    valueChangeHandler:(value: string) => void
}

const UserGenderRow: FC<Props> = ({
    valueChangeHandler
}) => {
    const radioClickHandler = 
    useCallback((value: string) => {
        valueChangeHandler(value);
    },[])
    return (
        <DefaultRowWithPicture title="성별">
            <InfoElementContent>
                <div>
                    <Radio 
                        value="female"
                    >남자</Radio>
                    <Radio 
                        value="male"
                    >여자</Radio>
                </div>
            </InfoElementContent>
        </DefaultRowWithPicture>
    )
}

export default UserGenderRow;