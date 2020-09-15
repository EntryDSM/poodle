import { connect } from 'react-redux';
import { RootState } from '@/core/redux/reducer';
import {
  setAbsentDay,
  setCutClassDay,
  setPerceptionDay,
  setServiceTime,
  setLeaveLateDay,
  setAll,
  setGrade,
  setScore,
  GradeType,
  getGradeCall,
  gradeCall,
  pageMove,
} from '@/core/redux/actions/Grade';
import { State } from '@/core/redux/reducer/Grade';
import Grade from './Grade';

export const mapStateToProps = (state: RootState) => ({
  serviceTime: state.GradeState.serviceTime,
  absentDay: state.GradeState.absentDay,
  cutClassDay: state.GradeState.cutClassDay,
  perceptionDay: state.GradeState.perceptionDay,
  leaveLateDay: state.GradeState.leaveLateDay,
  grade: state.GradeState.grade,
  score: state.GradeState.score,
  gradeType: state.GradeState.gradeType,
  error: state.GradeState.error,
  successTime: state.GradeState.successTime,
  setGradeError: state.GradeState.setGradeError,
  getGradeError: state.GradeState.getGradeError,
  pageMove: state.GradeState.pageMove,
  status: state.Header.status.final_submit,
  isGradeFirst: state.GradeState.isGradeFirst,
});

export const mapDispatchToProps = (dispatch: Function) => ({
  setAbsentDay: (absentDay: string) => dispatch(setAbsentDay({ absentDay })),
  setCutClassDay: (cutClassDay: string) =>
    dispatch(setCutClassDay({ cutClassDay })),
  setLeaveLateDay: (leaveLateDay: string) =>
    dispatch(setLeaveLateDay({ leaveLateDay })),
  setPerceptionDay: (perceptionDay: string) =>
    dispatch(setPerceptionDay({ perceptionDay })),
  setServiceTime: (serviceTime: string) =>
    dispatch(setServiceTime({ serviceTime })),
  setGrade: (grade: GradeType[]) => dispatch(setGrade({ grade })),
  setScore: (score: string) => dispatch(setScore({ score })),
  setAll: (all: State) => dispatch(setAll({ all })),
  getGradeToServer: () => dispatch(getGradeCall()),
  setGradeToServer: (pageMove: boolean) => dispatch(gradeCall({ pageMove })),
  pageMoveChange: (isPageMove: boolean) =>
    dispatch(pageMove({ pageMove: isPageMove })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Grade);
