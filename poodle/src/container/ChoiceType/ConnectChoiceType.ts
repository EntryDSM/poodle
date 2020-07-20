import { connect } from 'react-redux';
import { setQualification } from '@/core/redux/actions/Qualification';
import { AdditionalType } from '@/core/redux/actions/ChoiceType';
import ChoiceType from './ChoiceType';
import { RootState } from '@/core/redux/reducer';
import { State } from '@/core/redux/reducer/ChoiceType';
import {
  setApplyType,
  setDistrict,
  setGraduationStatus,
  setGraduationYear,
  setAdditionalType,
  setAll,
} from '@/core/redux/actions/ChoiceType';
import { GraduationStatusType } from '@/core/redux/actions/ChoiceType';

export const mapStateToProps = (state: RootState) => ({
  qualificationExam: state.QualificationState.isQualification,
  applyType: state.ChoiceTypeState.applyType,
  district: state.ChoiceTypeState.district,
  graduationStatus: state.ChoiceTypeState.graduationStatus,
  graduationYear: state.ChoiceTypeState.graduationYear,
  additionalType: state.ChoiceTypeState.additionalType,
});

export const mapDispatchToProps = (dispatch: Function) => ({
  setQualification: (isQualification: boolean) =>
    dispatch(setQualification({ isQualification })),
  setApplyType: (type: string) => dispatch(setApplyType({ type })),
  setDistrict: (district: string) => dispatch(setDistrict({ district })),
  setGraduationStatus: (status: GraduationStatusType) =>
    dispatch(setGraduationStatus({ status })),
  setGraduationYear: (year: string) => dispatch(setGraduationYear({ year })),
  setAdditionalType: (additionalType: AdditionalType) =>
    dispatch(setAdditionalType({ additionalType })),
  setAll: (all: State) => dispatch(setAll({ all })),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceType);
