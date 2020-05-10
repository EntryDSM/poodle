import React, { FC } from 'react';
import * as S from '@/styles/Mypage/ProgressBar'

const dummyData = {
    '전형구분': false,
    '인적사항': false,
    '성적입력': false,
    '자기소개서': true,
}

const ProgressBar: React.FC<{}> = () => {

    return (
        <S.ProgressBarWrapper>
            <S.ProgressBox>
                {
                    Object.entries(dummyData).map((data, index) => (
                        <ProgressItem 
                            key={index}
                            title={data[0]}
                            isfinished={data[1]}
                        />
                    ))
                }
            </S.ProgressBox>
        </S.ProgressBarWrapper>
    );
};

export default ProgressBar;

const ProgressItem: React.FC<{ title: string, isfinished: boolean }> = ({ title, isfinished }) => {

    return (
        <>
            <S.ProgressItemBox>
                <S.ProgressImageLink to={{ pathname: "전형구분", state: { isfinished: isfinished } }} />
                <S.ProgressTitleLink to="전형구분">
                    {title}
                </S.ProgressTitleLink>
            </S.ProgressItemBox>
            {title !== '자기소개서' && <S.Line />}
        </>
    );
};
