import React, { FC } from 'react';
import { 
    GradeColumn,
    SubjectColumn,
} from './column';
import { 
    GradeScoreRow 
} from '../../../../styles/Grade';

interface Props {
    uniqueKey: string,
}

const GradeRow: FC<Props> = ({
    children,
    uniqueKey,
}) => {
    return (
        <GradeScoreRow>
            <SubjectColumn>
                {children}
            </SubjectColumn>
            <GradeColumn 
                onChange={()=>{}}
                uniqueKey={`${uniqueKey}${1}`}
            />
            <GradeColumn 
                onChange={()=>{}}
                uniqueKey={`${uniqueKey}${2}`}
            />
            <GradeColumn 
                onChange={()=>{}}
                uniqueKey={`${uniqueKey}${3}`}
            />
            <GradeColumn 
                onChange={()=>{}}
                uniqueKey={`${uniqueKey}${4}`}
            />
            <GradeColumn 
                onChange={()=>{}}
                uniqueKey={`${uniqueKey}${5}`}
            />
        </GradeScoreRow>
    )
}

export default GradeRow;