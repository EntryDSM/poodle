import React, { FC } from 'react';
import { Checkbox } from '../../../default/ApplicationFormDefault/Checkbox';

interface Props {
    children: string,
}

const GradeColumn: FC<Props> = ({
    children,
}) => {
    return (
        <td 
            className="semester"
            colSpan={1}
        >
            <div>
                <Checkbox
                    onChange={()=>{}}
                    checked={false}
                >
                    {children}
                </Checkbox>
            </div>
        </td>
    )
}

export default GradeColumn;