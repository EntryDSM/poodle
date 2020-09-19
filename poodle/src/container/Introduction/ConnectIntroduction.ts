import { connect } from 'react-redux';
import Introduction from './Introduction';
import { RootState } from '@/core/redux/reducer';
import {
  setSelfIntoduction,
  setStudyPlan,
  getStudyPlanCall,
  studyPlanCall,
  getSelfIntroductionCall,
  selfIntroductionCall,
  pageMove,
  setSuccessDate,
} from '@/core/redux/actions/Introduction';

export const mapStateToProps = (state: RootState) => ({
  selfIntroduction: state.IntroductionState.selfIntroduction,
  studyPlan: state.IntroductionState.studyPlan,
  error: state.IntroductionState.error,
  successDate: state.IntroductionState.successDate,
  getSelfIntroductionError: state.IntroductionState.getSelfIntroductionError,
  setSelfIntroductionError: state.IntroductionState.setSelfIntroductionError,
  getStudyPlanError: state.IntroductionState.getStudyPlanError,
  setStudyPlanError: state.IntroductionState.setStudyPlanError,
  pageMove: state.IntroductionState.pageMove,
  status: state.Header.status.final_submit,
});

export const mapDispatchToProps = (dispatch: Function) => ({
  setSelfIntroduction: (selfIntroduction: string) =>
    dispatch(setSelfIntoduction({ selfIntroduction })),
  setStudyPlan: (studyPlan: string) => dispatch(setStudyPlan({ studyPlan })),
  getStudyPlanToServer: () => dispatch(getStudyPlanCall()),
  setStudyPlanToServer: (pageMove: boolean) =>
    dispatch(studyPlanCall({ pageMove })),
  setSelfIntroductionToServer: (pageMove: boolean) =>
    dispatch(selfIntroductionCall({ pageMove })),
  getSelfIntroductionToServer: () => dispatch(getSelfIntroductionCall()),
  pageMoveChange: (isPageMove: boolean) =>
    dispatch(pageMove({ pageMove: isPageMove })),
  setSuccessDate: (successDate: Date | null) =>
    dispatch(setSuccessDate({ successDate })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
