import React, { FC, useEffect, useState } from 'react';
import {
  GradeTable,
  GradeSubTitle,
  QualificationScoreRow,
} from '../../../styles/Grade';
import {
  mapStateToProps,
  mapDispatchToProps,
} from '../../../container/Grade/ConnectionGrade';
import { Input } from '../../default/ApplicationFormDefault';
import { isEmptyCheck } from '../../../lib/utils/function';

type defaultProps = {
  isError: boolean;
};
type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  defaultProps;

const QualificationScorePage: FC<Props> = ({ score, setScore, isError }) => {
  const [isEmpty, emptyChange] = useState<boolean>(false);
  useEffect(() => {
    if (isError && isEmptyCheck(score)) {
      emptyChange(true);
    } else {
      emptyChange(false);
    }
  }, [isError, score]);
  return (
    <>
      <GradeSubTitle>성적 입력</GradeSubTitle>
      <GradeTable>
        <tbody>
          <QualificationScoreRow>
            <td className='subject'>총점</td>
            <td className='grade'>
              <Input
                width='76px'
                valueChangeHandler={setScore}
                isEmpty={isEmpty}
                value={score}
                isCenter
                type='number'
              />
              점
            </td>
          </QualificationScoreRow>
        </tbody>
      </GradeTable>
    </>
  );
};

export default QualificationScorePage;
