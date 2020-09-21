import React, { FC } from 'react';
import * as S from '@/styles/Main';
import { useUser } from '@/lib/utils/function';

const AllFinishExplain: FC = () => {
  const { isLogin } = useUser();
  return (
    <>
      <S.Article>
        <S.StepPeriod>2020년도 신입생 모집이 종료되었습니다.</S.StepPeriod>
        <S.StepPeriod>지원해주셔서 감사드립니다.</S.StepPeriod>
        <S.StepPeriod>
          {!isLogin && '로그인 후 '}아래 버튼을 클릭하여 합격 여부를 확인해
          주세요.
        </S.StepPeriod>
        <S.DetailedPeriod />
      </S.Article>
      <S.Footer isAble={isLogin}>
        <S.StepLink to={isLogin ? '/schedules?type=notice' : '/'}>
          <S.StepTitle>합격 여부 확인하기</S.StepTitle>
          <S.RightArrow />
        </S.StepLink>
      </S.Footer>
    </>
  );
};

export default AllFinishExplain;
