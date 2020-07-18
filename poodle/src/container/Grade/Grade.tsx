import React, { FC, useState, useCallback, useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';
import { GradeDiv, GradeMain } from '../../styles/Grade';
import {
  Title,
  DefaultlNavigation,
} from '../../components/default/ApplicationFormDefault';
import {
  VolanteerWorkTimeAttend,
  NonTransferSemester,
  GradeInput,
  QualificationScore,
} from '../../components/Grade';
import { mapDispatchToProps, mapStateToProps } from './ConnectionGrade';
import { isEmptyCheck } from '../../lib/utils/function';
import {
  gradeStateToRequest,
  gradeStateToGedRequest,
  setDataToServer,
} from '../../lib/api/ApplicationApplyApi';
import { gradeServerType, gedGradeServerType } from '@/lib/api/ApiType';
import { GRADE_URL } from '@/lib/api/ServerUrl';
import ErrorType from '@/lib/utils/type/ErrorType';

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const Grade: FC<Props> = props => {
  const [isError, errorChange] = useState<boolean>(false);
  const isStateAble = useCallback(
    ({
      serviceTime,
      leaveLateDay,
      perceptionDay,
      cutClassDay,
      absentDay,
      score,
    }: MapStateToProps) => {
      if (props.isQualification) {
        return isEmptyCheck(score);
      }
      return (
        isEmptyCheck(serviceTime) &&
        isEmptyCheck(leaveLateDay) &&
        isEmptyCheck(absentDay) &&
        isEmptyCheck(cutClassDay) &&
        isEmptyCheck(perceptionDay)
      );
    },
    [],
  );
  const goNextPage = useCallback(
    async (state: MapStateToProps) => {
      const isAble = isStateAble(state);
      if (!isAble) {
        errorChange(!isAble);
      } else {
        try {
          await setGrade(props);
          moveNextPage();
        } catch (errorResponse) {
          const error: ErrorType = {
            message: '',
            response: {
              status: errorResponse.response.status,
            },
          };
          props.setGradeFailure(error);
        }
      }
    },
    [props],
  );
  const setGrade = useCallback(async (props: any) => {
    if (props.isQualification) {
      const request = gradeStateToGedRequest(props);
      return await setDataToServer<gedGradeServerType>(GRADE_URL, request);
    }
    const request = gradeStateToRequest(props);
    return await setDataToServer<gradeServerType>(GRADE_URL, request);
  }, []);
  const moveCurrentPage = useCallback(() => {
    props.history.push('/info');
  }, []);
  const moveNextPage = useCallback(() => {
    props.history.push('/introduction');
  }, []);
  useEffect(() => {
    props.getGrade();
  }, []);
  return (
    <GradeDiv>
      <GradeMain>
        <Title margin='100px'>성적 입력</Title>
        {props.isQualification ? (
          <QualificationScore {...props} isError={isError} />
        ) : (
          <>
            <VolanteerWorkTimeAttend {...props} isError={isError} />
            <NonTransferSemester {...props} />
            <GradeInput {...props} />
          </>
        )}
        <DefaultlNavigation
          page='grade'
          currentPageClickHandler={moveCurrentPage}
          nextPageClickHandler={() => goNextPage(props)}
        />
      </GradeMain>
    </GradeDiv>
  );
};

export default withRouter(Grade);
