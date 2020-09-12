import { connect } from 'react-redux';
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
  setIsQualification,
  pageMove,
} from '@/core/redux/actions/ChoiceType';
import { NOTICE_MODAL, modalOn, modalOff } from '@/core/redux/actions/Modal';
import { GraduationStatusType } from '@/core/redux/actions/ChoiceType';
export const mapStateToProps = (state: RootState) => ({
  qualificationExam: state.ChoiceTypeState.qualificationExam,
  applyType: state.ChoiceTypeState.applyType,
  district: state.ChoiceTypeState.district,
  graduationStatus: state.ChoiceTypeState.graduationStatus,
  graduationYear: state.ChoiceTypeState.graduationYear,
  graduationMonth: state.ChoiceTypeState.graduationMonth,
  additionalType: state.ChoiceTypeState.additionalType,
  error: state.ChoiceTypeState.error,
  gedSuccessMonth: state.ChoiceTypeState.gedSuccessMonth,
  gedSuccessYear: state.ChoiceTypeState.gedSuccessYear,
  successTime: state.ChoiceTypeState.successTime,
  getTypeError: state.ChoiceTypeState.getTypeError,
  setTypeError: state.ChoiceTypeState.setTypeError,
  pageMove: state.ChoiceTypeState.pageMove,
  status: state.Header.status.final_submit,
});

export const mapDispatchToProps = (dispatch: Function) => ({
  setQualification: (qualification: boolean) =>
    dispatch(setIsQualification({ qualification })),
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
  setTypeToServer: (pageMove: boolean) => dispatch(typeCall({ pageMove })),
  setGEDSuccessMonth: (month: string) =>
    dispatch(setGEDSuccessMonth({ month })),
  setGEDSuccessYear: (year: string) => dispatch(setGEDSuccessYear({ year })),
  pageMoveChange: (isPageMove: boolean) =>
    dispatch(pageMove({ pageMove: isPageMove })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceType);
