import React, { FC } from 'react';
import * as S from '@/styles/Main/ProgressBar';
import { Link } from 'react-router-dom';
import { progressInfo } from './DummyData';

const ProgressBar: React.FC<{}> = () => {
    
    return (
        <S.ProgressBarWrapper>
            <S.ProgressBox>
                {
                    progressInfo.map(data => <ProgressItem key={data.id} data={data} />)
                }
            </S.ProgressBox>
        </S.ProgressBarWrapper>
    );
};

export default ProgressBar;

const ProgressItem: React.FC<{ data: { id: number; title: string; ing: boolean } }> = ({ data }) => {
    return (
        <>
            <S.ProgressItemWrapper>
                <Link to='원서작성'>
                    <S.ProgressTitle ing={data.ing}>
                        {data.title}
                    </S.ProgressTitle>
                </Link>
                <Link to='원서작성'>
                    <S.StatusImage ing={data.ing} />
                </Link>
            </S.ProgressItemWrapper>
            {data.id !== 5 && <S.VerticalLine />}
        </>
    );
};