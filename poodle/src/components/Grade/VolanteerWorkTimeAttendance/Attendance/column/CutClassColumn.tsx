import React, { FC } from 'react';
import { Input } from '../../../../default/ApplicationFormDefault/Input';

const CutClassColumn: FC = () => {
    return (
        <div>
            전체 무단(미인정) 결과 일수
            <div>
                <Input 
                    width="76px" 
                    height="36px" 
                    valueChangeHandler={()=>{}} 
                    isEmpty={false}
                    isCenter={true}
                    type="number"
                />일
            </div>
        </div>
    )
}

export default CutClassColumn;