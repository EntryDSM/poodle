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
} from '@/core/redux/actions/Introduction';

export const mapStateToProps = (state: RootState) => ({
  selfIntroduction: state.IntroductionState.selfIntroduction,
  studyPlan: state.IntroductionState.studyPlan,
  error: state.IntroductionState.error,
  page: state.PageState.page,
});

export const mapDispatchToProps = (dispatch: Function) => ({
  setSelfIntroduction: (selfIntroduction: string) =>
    dispatch(setSelfIntoduction({ selfIntroduction })),
  setStudyPlan: (studyPlan: string) => dispatch(setStudyPlan({ studyPlan })),
  getStudyPlanToServer: () => dispatch(getStudyPlanCall()),
  setStudyPlanToServer: () => dispatch(studyPlanCall()),
  setSelfIntroductionToServer: () => dispatch(selfIntroductionCall()),
  getSelfIntroductionToServer: () => dispatch(getSelfIntroductionCall()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
