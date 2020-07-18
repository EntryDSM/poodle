import { connect } from 'react-redux';
import { setQualification } from '@/core/redux/actions/Qualification';
import { AdditionalType, getType } from '@/core/redux/actions/ChoiceType';
import ChoiceType from './ChoiceType';
import { RootState } from '../../core/redux/reducer';
import ErrorType from '@/lib/utils/type/ErrorType';
import {
  setApplyType,
  setDistrict,
  setGraduationStatus,
  setGraduationYear,
  setAdditionalType,
  setAll,
  typeFailure,
  typeSuccess,
} from '../../core/redux/actions/ChoiceType';
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
  setAll: (all: RootState['ChoiceTypeState']) => dispatch(setAll({ all })),
  setTypeFailure: (error: ErrorType) => dispatch(typeFailure({ error })),
  setTypeSuccess: () => dispatch(typeSuccess()),
  getType: () => dispatch(getType()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceType);
