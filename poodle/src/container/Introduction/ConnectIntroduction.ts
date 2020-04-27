import { connect } from 'react-redux';
import Introduction from './Introduction';
import { RootState } from '../../core/redux/reducer';
import {
    setSelfIntoduction,
    setStudyPlan,
} from '../../core/redux/actions/Introduction';

export const mapStateToProps = (state: RootState) => ({
    selfIntroduction: state.IntroductionState.selfIntroduction,
    studyPlan: state.IntroductionState.studyPlan,
})

export const mapDispatchToProps = (dispatch:Function) => ({
    setSelfIntroduction: (
        selfIntroduction: string,
    ) => dispatch(setSelfIntoduction(selfIntroduction)),
    setStudyPlan: (
        studyPlan: string,
    ) => dispatch(setStudyPlan(studyPlan)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Introduction);