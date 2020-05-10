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
                    [
                        { label: "전형구분", isfinished: false, endAdornment: <S.Line /> },
                        { label: "인적사항", isfinished: false, endAdornment: <S.Line /> },
                        { label: "성적입력", isfinished: false, endAdornment: <S.Line /> },
                        { label: "자기소개서", isfinished: true },
                    ].map((props) => <ProgressItem key={props.label} {...props} />)
                }
            </S.ProgressBox>
        </S.ProgressBarWrapper>
    );
};

export default ProgressBar;

const ProgressItem: React.FC<{ label: string, isfinished: boolean, endAdornment?: React.ReactNode }> = ({ label, isfinished, endAdornment }) => {
    return (
        <>
            <S.ProgressItemBox>
                <S.ProgressImageLink className={isfinished ? 'finished' : ''} to="전형구분" />
                <S.ProgressTitleLink to="전형구분">
                    {label}
                </S.ProgressTitleLink>
            </S.ProgressItemBox>
            {endAdornment}
        </>
    );
};
