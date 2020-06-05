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
            <GradeColumn 
                onChange={()=>{}}
                key={1}
            />
            <GradeColumn 
                onChange={()=>{}}
                key={2}
            />
            <GradeColumn 
                onChange={()=>{}}
                key={3}
            />
            <GradeColumn 
                onChange={()=>{}}
                key={4}
            />
            <GradeColumn 
                onChange={()=>{}}
                key={5}
            />
        </GradeScoreRow>
    )
}

export default GradeRow;