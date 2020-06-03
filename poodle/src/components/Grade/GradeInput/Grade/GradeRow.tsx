import React, { FC } from 'react';
import { 
    GradeColumn,
    SubjectColumn,
} from './column';
import { 
    GradeScoreRow 
} from '../../../../styles/Grade';
const GradeRow: FC = ({
    children,
}) => {
    return (
        <GradeScoreRow>
            <SubjectColumn>
                {children}
            </SubjectColumn>
            <GradeColumn onChange={()=>{}}/>
            <GradeColumn onChange={()=>{}}/>
            <GradeColumn onChange={()=>{}}/>
            <GradeColumn onChange={()=>{}}/>
            <GradeColumn onChange={()=>{}}/>
        </GradeScoreRow>
    )
}

export default GradeRow;