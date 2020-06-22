import React, {
  FC,
  useState,
  useCallback,
  useEffect,
} from 'react';
import { useDispatch } from 'react-redux';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router';
import {
  GradeDiv,
  GradeMain,
} from '../../styles/Grade';
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
import {
  mapDispatchToProps,
  mapStateToProps,
} from './ConnectionGrade';
import {
  Popup,
} from '../../components/default/Popup';
import { isTextAble } from '../../lib/utils/function';
import {
  GRADESEMESTERLIST,
} from '../../components/Grade/constance';
import {
  SubjectType,
  ScoreType,
  GradeType,
  setGrade,
} from '../../core/redux/actions/Grade';

type Props = ReturnType<typeof mapStateToProps> &
ReturnType<typeof mapDispatchToProps> &
RouteComponentProps;

type MapStateToProps = ReturnType<typeof mapStateToProps>

const Grade: FC<Props> = (props: Props) => {
  const isQualification = false;
  const dispatch = useDispatch();
  const [isError, errorChange] = useState<boolean>(false);
  const [errorModal, errorModalChange] = useState<boolean>(false);
  const isStateAble = useCallback(({
    serviceTime,
    leaveLateDay,
    perceptionDay,
    cutClassDay,
    absentDay,
    score,
  }:MapStateToProps) => {
    if (isQualification) {
      return isTextAble(score);
    }
    return (
      isTextAble(serviceTime)
            && isTextAble(leaveLateDay)
            && isTextAble(absentDay)
            && isTextAble(cutClassDay)
            && isTextAble(perceptionDay)
    );
  }, []);
  const errorModalStateChangeLater = useCallback((state) => {
    setTimeout(() => {
      errorModalChange(state);
    }, 5000);
  }, []);
  const goNextPage = useCallback((
    state: MapStateToProps,
  ) => {
    const isAble = isStateAble(state);
    if (!isAble) {
      errorChange(!isAble);
      errorModalChange(!isAble);
      errorModalStateChangeLater(isAble);
    } else {
      moveNextPage();
    }
  }, []);
  const moveCurrentPage = useCallback(() => {
    props.history.push('/info');
  }, []);
  const moveNextPage = useCallback(() => {
    props.history.push('/introduction');
  }, []);
  const convertStringToArray = useCallback((gradeString: string) => {
    const splitedStringArray: ScoreType[] = gradeString.split('') as ScoreType[];
    return splitedStringArray;
  }, []);
  const stringArrayToGradeArray = useCallback((splitedStringArray: string[], subject: SubjectType) => {
    const buf = [];
    for (let i = 0; i < splitedStringArray.length; i++) {
      const { grade, semester } = GRADESEMESTERLIST[i];
      const typeChangeScore = splitedStringArray[i] as ScoreType;
      const newGrade = {
        grade,
        semester,
        score: typeChangeScore,
        subject,
      };
      buf.push(newGrade);
    }
    return buf;
  }, []);
  const objectToString = useCallback((obj: Object) => {
    const entriedObj = Object.entries(obj);
    return entriedObj;
  }, []);
  const dispatchGrade = (grade: GradeType[]) => {
    const action = setGrade({ grade });
    dispatch(action);
  };
  const setGradeFirst = () => {
    const response = getGradeTest();
    const entriedObj = objectToString(response);
    let grade: GradeType[] = [];
    entriedObj.map(([key, value]) => {
      const typeChangeKey = key as SubjectType;
      const stringToArray = convertStringToArray(value);
      const newGrade = stringArrayToGradeArray(stringToArray, typeChangeKey);
      grade = [...grade, ...newGrade];
    });
    dispatchGrade(grade);
  };
  const getGradeTest = () => {
    const testObj = {
      math: 'XXXXX',
      korean: 'XXXXX',
      english: 'XXXXX',
      science: 'XXXXX',
      society: 'XXXXX',
      tech: 'XXXXX',
      history: 'XXXXX',
    };
    return testObj;
  };
  const gradeArrayToString = (gradeList: GradeType[], subject: SubjectType): string => {
    const filteredGradeList = gradeList.filter((grade) => grade.subject === subject);
    const sortedGradeList = gradeSort(filteredGradeList);
    const stringedGradeList = sortedGradeList.reduce(
      (str: string, grade: GradeType) => str + grade.score, '',
    );
    return stringedGradeList;
  };
  const gradeSortCompareFunc = (current: GradeType, next:GradeType) => {
    if (current.grade < next.grade) {
      return -1;
    } if (current.grade > next.grade) {
      return 1;
    } if (current.semester < next.semester) {
      return -1;
    }
    return 1;
  };
  const gradeSort = (gradeList: GradeType[]) => {
    const buf = gradeList.sort(gradeSortCompareFunc);
    return buf;
  };
  useEffect(() => {
    setGradeFirst();
  }, []);
  return (
    <GradeDiv>
      <Popup isError={errorModal} />
      <GradeMain>
        <Title margin="100px">성적 입력</Title>
        {
                    isQualification
                      ? (
                        <QualificationScore
                          {...props}
                          isError={isError}
                        />
                      )
                      : (
                        <>
                          <VolanteerWorkTimeAttend {...props} isError={isError} />
                          <NonTransferSemester {...props} />
                          <GradeInput {...props} />
                        </>
                      )
                }
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
