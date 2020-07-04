import React, { FC, useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { GradeDiv, GradeMain } from "../../styles/Grade";
import {
  Title,
  DefaultlNavigation,
} from "../../components/default/ApplicationFormDefault";
import {
  VolanteerWorkTimeAttend,
  NonTransferSemester,
  GradeInput,
  QualificationScore,
} from "../../components/Grade";
import { mapDispatchToProps, mapStateToProps } from "./ConnectionGrade";
import { isTextAble } from "../../lib/utils/function";
import {
  gradeResponseToState,
  gradeStateToRequest,
  gradeStateToGedRequest,
  getFunc,
  setFunc,
  errorTypeCheck,
} from "../../lib/api/ApplicationApplyApi";
import { gradeServerType, gedGradeServerType } from "@/lib/api/ApiType";
import { GRADE_URL } from "@/lib/api/ServerUrl";

type Props = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> &
  RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>;

const Grade: FC<Props> = (props) => {
  const dispatch = useDispatch();
  const [isError, errorChange] = useState<boolean>(false);
  const [errorModal, errorModalChange] = useState<boolean>(false);
  const isStateAble = useCallback(
    ({
      serviceTime,
      leaveLateDay,
      perceptionDay,
      cutclassDay,
      absentDay,
      score,
    }: MapStateToProps) => {
      if (props.isQualification) {
        return isTextAble(score);
      }
      return (
        isTextAble(serviceTime) &&
        isTextAble(leaveLateDay) &&
        isTextAble(absentDay) &&
        isTextAble(cutclassDay) &&
        isTextAble(perceptionDay)
      );
    },
    []
  );
  const errorModalStateChangeLater = useCallback((state) => {
    setTimeout(() => {
      errorModalChange(state);
    }, 5000);
  }, []);
  const goNextPage = useCallback(
    async (state: MapStateToProps) => {
      const isAble = isStateAble(state);
      if (!isAble) {
        errorChange(!isAble);
        errorModalChange(!isAble);
        errorModalStateChangeLater(isAble);
      } else {
        try {
          await setGrade(props);
          moveNextPage();
        } catch (error) {
          errorTypeCheck(error);
        }
      }
    },
    [props]
  );
  const setGrade = useCallback(async (props: any) => {
    if (props.isQualification) {
      const request = gradeStateToGedRequest(props);
      return await setFunc<gedGradeServerType>(GRADE_URL, request);
    }
    console.log(props);
    const request = gradeStateToRequest(props);
    return await setFunc<gradeServerType>(GRADE_URL, request);
  }, []);
  const moveCurrentPage = useCallback(() => {
    props.history.push("/info");
  }, []);
  const moveNextPage = useCallback(() => {
    props.history.push("/introduction");
  }, []);
  const testServer = () => {
    const response: gradeServerType = {
      volanteer_time: 1,
      full_cut_count: 1,
      period_cut_count: 1,
      early_leave_count: 1,
      late_count: 1,
      korean: "AAAAA",
      social: "AAAAA",
      history: "AAAAA",
      math: "AAAAA",
      science: "AAAAA",
      tech_and_home: "AAAAA",
      english: "AAAAA",
      ged_average_score: 30,
    };
    return response;
  };
  useEffect(() => {
    const stateBuf = gradeResponseToState(testServer());
    dispatch(props.setAll(stateBuf));
  }, []);
  return (
    <GradeDiv>
      <GradeMain>
        <Title margin="100px">성적 입력</Title>
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
          page="grade"
          currentPageClickHandler={moveCurrentPage}
          nextPageClickHandler={() => goNextPage(props)}
        />
      </GradeMain>
    </GradeDiv>
  );
};

export default withRouter(Grade);
