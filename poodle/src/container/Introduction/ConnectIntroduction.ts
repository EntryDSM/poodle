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
import { PageType, pageMove } from '@/core/redux/actions/Page';

export const mapStateToProps = (state: RootState) => ({
  selfIntroduction: state.IntroductionState.selfIntroduction,
  studyPlan: state.IntroductionState.studyPlan,
  error: state.IntroductionState.error,
  page: state.PageState.page,
  successDate: state.IntroductionState.successDate,
  getSelfIntroductionError: state.IntroductionState.getSelfIntroductionError,
  setSelfIntroductionError: state.IntroductionState.setSelfIntroductionError,
  getStudyPlanError: state.IntroductionState.getStudyPlanError,
  setStudyPlanError: state.IntroductionState.setStudyPlanError,
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
  pageMove: (page: PageType) => dispatch(pageMove({ page })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
