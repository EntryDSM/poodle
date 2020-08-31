import { connect } from 'react-redux';
import { setQualification } from '@/core/redux/actions/Qualification';
import ChoiceType from './ChoiceType';
import { RootState } from '@/core/redux/reducer';
import { State } from '@/core/redux/reducer/ChoiceType';
import {
  AdditionalType,
  setApplyType,
  setDistrict,
  setGraduationStatus,
  setGraduationYear,
  setAdditionalType,
  setGEDSuccessMonth,
  setGEDSuccessYear,
  setGraduationMonth,
  setAll,
  getTypeCall,
  typeCall,
} from '@/core/redux/actions/ChoiceType';
import { GraduationStatusType } from '@/core/redux/actions/ChoiceType';

export const mapStateToProps = (state: RootState) => ({
  qualificationExam: state.QualificationState.isQualification,
  applyType: state.ChoiceTypeState.applyType,
  district: state.ChoiceTypeState.district,
  graduationStatus: state.ChoiceTypeState.graduationStatus,
  graduationYear: state.ChoiceTypeState.graduationYear,
  graduationMonth: state.ChoiceTypeState.graduationMonth,
  additionalType: state.ChoiceTypeState.additionalType,
  error: state.ChoiceTypeState.error,
  page: state.PageState.page,
  gedSuccessMonth: state.ChoiceTypeState.gedSuccessMonth,
  gedSuccessYear: state.ChoiceTypeState.gedSuccessYear,
});

export const mapDispatchToProps = (dispatch: Function) => ({
  setQualification: (isQualification: boolean) =>
    dispatch(setQualification({ isQualification })),
  setApplyType: (type: string) => dispatch(setApplyType({ type })),
  setDistrict: (district: string) => dispatch(setDistrict({ district })),
  setGraduationStatus: (status: GraduationStatusType) =>
    dispatch(setGraduationStatus({ status })),
  setGraduationYear: (year: string) => dispatch(setGraduationYear({ year })),
  setGraduationMonth: (month: string) =>
    dispatch(setGraduationMonth({ month })),
  setAdditionalType: (additionalType: AdditionalType) =>
    dispatch(setAdditionalType({ additionalType })),
  setAll: (all: State) => dispatch(setAll({ all })),
  getTypeToServer: () => dispatch(getTypeCall()),
  setTypeToServer: (state: State) => dispatch(typeCall({ state })),
  setGEDSuccessMonth: (month: string) =>
    dispatch(setGEDSuccessMonth({ month })),
  setGEDSuccessYear: (year: string) => dispatch(setGEDSuccessYear({ year })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceType);
