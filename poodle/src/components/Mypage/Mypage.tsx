import React, { FC, useEffect, useMemo } from 'react';
import * as S from '@/styles/Mypage';
import ContentHeader from '@/components/default/common/ContentHeader';
import ProgressBar from './ProgressBar/ProgressBar';
import { useHistory } from 'react-router-dom';
import { Process } from '@/core/redux/actions/Mypage';
import ErrorType from '@/lib/utils/type';
import { useReGenerateTokenAndDoCallback, useUser } from '@/lib/utils/function';
import { UserStatus } from '@/lib/api/mypage';
import queryString from 'query-string';
import DocumentContainer from '@/container/MypageContainer/DocumentContainer/DocumentContainer';

enum Sex {
  'FEMALE' = '여자',
  'MALE' = '남자',
}

interface Props {
  process: {
    data: Process;
    error: ErrorType;
    loading: boolean;
  };
  getProcess: () => void;
  getUserStatus: () => void;
  userStatus: UserStatus;
  userStatusError: ErrorType;
  resetMypage: () => void;
}

const Mypage: FC<Props> = ({
  process,
  getProcess,
  getUserStatus,
  userStatus,
  userStatusError,
  resetMypage,
}) => {
  const { document } = queryString.parse(window.location.search);
  const { grade_type } = useUser();
  const history = useHistory();
  const reGenerateTokenAndDoCallback = useReGenerateTokenAndDoCallback(
    getProcess,
  );
  const goSubmitDocumentPageHandler = () => {
    if (userStatus.final_submit) {
      history.push('/mypage?document=true');
    } else {
      alert('최종 제출하지 않으셨습니다.');
    }
  };

  const myInfos = useMemo(() => {
    const { name, sex, final_submit, paid, passed_first_apply } = userStatus;
    const infos = [
      { label: '이름', value: name },
      { label: '성별', value: Sex[sex] },
      {
        label: '최종제출',
        value: final_submit ? '완료' : '미완료',
        endAdornment: (
          <S.SubmitDocument
            isSubmited={final_submit}
            onClick={goSubmitDocumentPageHandler}
          >
            제출서류
          </S.SubmitDocument>
        ),
      },
      {
        label: '전형료 납부',
        value: userStatus.paid ? '납부 완료' : '납부 전',
      },
      {
        label: '우편물 수령',
        value: userStatus.passed_first_apply ? '수령 완료' : '수령 전',
      },
    ];
    if (grade_type === 'GED') {
      infos.push({
        label: '특기사항',
        value: '검정고시',
      });
    }
    return infos;
  }, [userStatus, grade_type]);

  useEffect(() => {
    getProcess();
    getUserStatus();

    return () => {
      resetMypage();
    };
  }, []);

  useEffect(() => {
    if (process.error.status === 401) {
      reGenerateTokenAndDoCallback();
    }
  }, [process.error]);

  useEffect(() => {
    if (userStatusError.status) {
      alert(
        `Error code: ${userStatusError.status} 유저 상태를 불러오지 못했습니다.`,
      );
    }
  }, [userStatusError]);

  return (
    <S.Wrapper>
      {document === 'true' ? (
        <DocumentContainer />
      ) : (
        <S.Container>
          <ContentHeader
            padding='100px 0 70px'
            subTitle='2021 입학원서 작성'
            title='마이페이지'
            underLineLength={153}
            titleFontSize={36}
          />
          <S.MyInfoWrapper>
            {myInfos.map(props => (
              <MyInfoItem key={props.label} {...props} />
            ))}
          </S.MyInfoWrapper>
          <S.ExplainSentence>
            단계를 누르면 해당 페이지로 이동합니다
          </S.ExplainSentence>
          <ProgressBar process={process} />
        </S.Container>
      )}
    </S.Wrapper>
  );
};

export default Mypage;

interface MyInfoItemProps {
  label: string;
  value: string;
  endAdornment?: React.ReactNode;
}

const MyInfoItem: React.FC<MyInfoItemProps> = ({
  label,
  value,
  endAdornment,
}) => (
  <S.MyInfoBox>
    <S.MyInfoContent>
      <S.MyInfoTitle>{label}</S.MyInfoTitle>
      <S.MyInfoValue>{value}</S.MyInfoValue>
    </S.MyInfoContent>
    {endAdornment}
  </S.MyInfoBox>
);
