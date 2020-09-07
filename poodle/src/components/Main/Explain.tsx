import React, { FC } from 'react';
import * as S from '@/styles/Main';
import { Schedule } from '@/core/redux/actions/Main';
import { Progress } from './ProgressBar/ProgressBar';
import {
  getDate,
  getDifferenceDate,
  getDateObject,
} from '@/lib/utils/function';

interface Props {
  schedule: Schedule;
  isProgressing: boolean;
}

const Eplain: FC<Props> = ({ schedule, isProgressing }) => {
  const isApplication = schedule.id === 'application';
  const [year, month, date, hours, minutes] = getDate(schedule.start_date);
  return (
    <>
      <S.Article>
        <S.StepPeriod>
          {isProgressing ? '지금' : '다음'}은{' '}
          <S.EmphasizeLetters>{Progress[schedule.id]}</S.EmphasizeLetters>{' '}
          기간입니다.
        </S.StepPeriod>
        <S.DetailedPeriod>
          <S.EmphasizeLetters>{Progress[schedule.id]}</S.EmphasizeLetters>은
          <S.WhiteSpace> </S.WhiteSpace>
          <S.EmphasizeLetters>
            {year.slice(2)}년<S.WhiteSpace> </S.WhiteSpace>
            {month}월<S.WhiteSpace> </S.WhiteSpace>
            {date}일<S.WhiteSpace> </S.WhiteSpace>
            {hours}:{minutes}
          </S.EmphasizeLetters>
          부터이며
          {'\r\n'}
          {isProgressing ? '마감일' : '시작일'}까지
          <S.WhiteSpace> </S.WhiteSpace>
          <S.EmphasizeLetters>
            {getDifferenceDate(
              getDateObject(
                isProgressing ? schedule.end_date : schedule.start_date,
              ),
              getDateObject(),
            )}
            일
          </S.EmphasizeLetters>
          <S.WhiteSpace> </S.WhiteSpace>
          남았습니다.
        </S.DetailedPeriod>
      </S.Article>
      <S.Footer isAble={isApplication ? isProgressing : true}>
        <S.StepLink
          to={
            isApplication && isProgressing
              ? '/type'
              : !isApplication
              ? `/schedules?type=${schedule.id}`
              : ''
          }
        >
          <S.StepTitle>{Progress[schedule.id]} 페이지로 이동</S.StepTitle>
          <S.RightArrow />
        </S.StepLink>
      </S.Footer>
    </>
  );
};

export default Eplain;
