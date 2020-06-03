import React, { FC } from 'react';
import { VolanteerWorkTimeRow } from '../../../../styles/Grade';
import { Input } from '../../../default/ApplicationFormDefault/Input';

const VolanteerWorkTime: FC = () => {
    return (
        <VolanteerWorkTimeRow>
            <td className="header">
                봉사시간
            </td>
            <td className="element">
                <div>
                    <Input 
                        width="76px" 
                        height="36px"
                        valueChangeHandler={()=>{}} 
                        isEmpty={false}
                        isCenter={true}
                        type="number"
                    />시간
                </div>
            </td>
            <td className="element"/>
        </VolanteerWorkTimeRow>
    )
}


export default VolanteerWorkTime;