import React, { FC } from 'react';
import { 
    GradeColumn,
    SubjectColumn,
} from './column';
import { 
    GradeScoreRow 
} from '../../../../styles/Grade';
import { SubjectType } from '@/core/redux/actions/Grade';

interface Props {
    subject: SubjectType,
}

const GradeRow: FC<Props> = ({
    children,
    subject,
}) => {
    return (
        <GradeScoreRow>
            <SubjectColumn>
                {children}
            </SubjectColumn>
            <GradeColumn 
                onChange={()=>{}}
                subject={subject}
                semester={1}
                grade={1}
            />
            <GradeColumn 
                onChange={()=>{}}
                subject={subject}
                semester={2}
                grade={1}
            />
            <GradeColumn 
                onChange={()=>{}}
                subject={subject}
                semester={1}
                grade={2}
            />
            <GradeColumn 
                onChange={()=>{}}
                subject={subject}
                semester={2}
                grade={2}
            />
            <GradeColumn 
                onChange={()=>{}}
                subject={subject}
                semester={1}
                grade={3}
            />
        </GradeScoreRow>
    )
}

export default GradeRow;