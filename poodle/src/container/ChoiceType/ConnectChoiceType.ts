import { connect } from 'react-redux';
import ChoiceType from './ChoiceType';
import { RootState } from '../../core/redux/reducer';
import { 
    setQualifacationExam, 
    setApplyType,
    setDistrict,
    setGraduationStatus,
    setGraduationYear,
    setNationalMerit,
    setSpecialAdmission,
} from '../../core/redux/actions/ChoiceType';

export const mapStateToProps = (state: RootState) => ({
    qualifacationExam: state.ChoiceTypeState.qualifacationExam,
    applyType: state.ChoiceTypeState.applyType,
    district: state.ChoiceTypeState.district,
    graduationStatus: state.ChoiceTypeState.graduationStatus,
    graduationYear: state.ChoiceTypeState.graduationYear,
    nationalMerit: state.ChoiceTypeState.isNationalMerit,
    specialAdmission: state.ChoiceTypeState.isSpecialAdminssion,
});

export const mapDispatchToProps = (dispatch:Function) => ({
    setQualifacationExam: (
        isQualifacationExam: boolean,
    ) => dispatch(setQualifacationExam(isQualifacationExam)),
    setApplyType: (
        type: string,
    ) => dispatch(setApplyType(type)),
    setDistrict: (
        district:string,
    ) => dispatch(setDistrict(district)),
    setGraduationStatus: (
        status: string,
    ) => dispatch(setGraduationStatus(status)),
    setGraduationYear: (
        year: string,
    ) => dispatch(setGraduationYear(year)),
    setNationalMerit: (
        isNationalMerit: boolean,   
    ) => dispatch(setNationalMerit(isNationalMerit)),
    setSpecialAdmission: (
        isSpecialAdmission: boolean,
    ) => dispatch(setSpecialAdmission(isSpecialAdmission)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ChoiceType);