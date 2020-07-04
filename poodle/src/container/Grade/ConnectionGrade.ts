import { connect } from 'react-redux';
import { RootState } from '../../core/redux/reducer';
import {
  setAbsentDay,
  setCutClassDay,
  setPerceptionDay,
  setServiceTime,
  setLeaveLateDay,
  setGrade,
  setScore,
  GradeType,
} from '../../core/redux/actions/Grade';
import Grade from './Grade';

export const mapStateToProps = (state: RootState) => ({
  serviceTime: state.GradeState.serviceTime,
  absentDay: state.GradeState.absentDay,
  cutClassDay: state.GradeState.cutclassDay,
  perceptionDay: state.GradeState.perceptionDay,
  leaveLateDay: state.GradeState.leaveLateDay,
  grade: state.GradeState.grade,
  score: state.GradeState.score,
});

export const mapDispatchToProps = (dispatch:Function) => ({
  setAbsentDay: (
    absentDay : string,
  ) => dispatch(setAbsentDay({ absentDay })),
  setCutClassDay: (
    cutClassDay : string,
  ) => dispatch(setCutClassDay({ cutClassDay })),
  setLeaveLateDay: (
    leaveLateDay : string,
  ) => dispatch(setLeaveLateDay({ leaveLateDay })),
  setPerceptionDay: (
    perceptionDay : string,
  ) => dispatch(setPerceptionDay({ perceptionDay })),
  setServiceTime: (
    serviceTime : string,
  ) => dispatch(setServiceTime({ serviceTime })),
  setGrade: (
    grade : GradeType[],
  ) => dispatch(setGrade({ grade })),
  setScore: (
    score: string,
  ) => dispatch(setScore({ score })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Grade);