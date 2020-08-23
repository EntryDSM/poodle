import React, { FC, useEffect } from 'react';
import * as S from '@/styles/Mypage';
import ContentHeader from '@/components/default/common/ContentHeader';
import ProgressBar from './ProgressBar/ProgressBar';
import { useHistory } from 'react-router-dom';
import { Process } from '@/core/redux/actions/Mypage';
import ErrorType from '@/lib/utils/type';

enum MyInfoTitle {
  이름,
  성별,
  최종제출,
  '전형료 납부',
  '우편물 수령',
  특기사항,
}

const dummyData = {
  name: '김해건',
  gender: '남',
  finallySubmit: '미완료',
  payMoney: '납부 전',
  recieveEmail: '수령 전',
  specialThing: '검정고시',
};

interface Props {
  process: {
    data: Process;
    error: ErrorType;
    loading: boolean;
  };
  getProcess: () => void;
}

const Mypage: FC<Props> = ({ process, getProcess }) => {
  const history = useHistory();
  useEffect(() => {
    getProcess();
  }, []);
  console.log(process);
  return (
    <S.Wrapper>
      <S.Container>
        <ContentHeader
          padding='100px 0 70px'
          subTitle='2021 입학원서 작성'
          title='마이페이지'
          underLineLength={153}
          titleFontSize={36}
        />
        <S.MyInfoWrapper>
          {[
            { label: '이름', value: dummyData.name },
            { label: '성별', value: dummyData.gender },
            {
              label: '최종제출',
              value: dummyData.finallySubmit,
              endAdornment: (
                <S.SubmitDocument
                  onClick={() => history.push('/mypage/document')}
                >
                  제출서류
                </S.SubmitDocument>
              ),
            },
            { label: '전형료 납부', value: dummyData.payMoney },
            { label: '우편물 수령', value: dummyData.recieveEmail },
            { label: '특기사항', value: dummyData.specialThing },
          ].map(props => (
            <MyInfoItem key={props.label} {...props} />
          ))}
        </S.MyInfoWrapper>
        <S.ExplainSentence>
          단계를 누르면 해당 페이지로 이동합니다
        </S.ExplainSentence>
        <ProgressBar process={process} />
      </S.Container>
    </S.Wrapper>
  );
};

export default Mypage;

const MyInfoItem: React.FC<{
  label: string;
  value: string;
  endAdornment?: React.ReactNode;
}> = ({ label, value, endAdornment }) => (
  <S.MyInfoBox>
    <S.MyInfoContent>
      <S.MyInfoTitle>{label}</S.MyInfoTitle>
      <S.MyInfoValue>{value}</S.MyInfoValue>
    </S.MyInfoContent>
    {endAdornment}
  </S.MyInfoBox>
);
