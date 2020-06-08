import React, { FC } from 'react';
import GradeRow from './GradeRow';

const GradeScore: FC = () => {
    return (
        <>
            <GradeRow uniqueKey="korean">국어</GradeRow>
            <GradeRow uniqueKey="ㄴociety">사회</GradeRow>
            <GradeRow uniqueKey="history">역사</GradeRow>
            <GradeRow uniqueKey="math">수학</GradeRow>
            <GradeRow uniqueKey="science">과학</GradeRow>
            <GradeRow uniqueKey="tech">기술가정</GradeRow>
            <GradeRow uniqueKey="english">영어</GradeRow>
        </>
    )
}

export default GradeScore;