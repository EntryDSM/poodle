import { connect } from 'react-redux';
import Info from './Info';
import { RootState } from '@/core/redux/reducer';
import {
  setAddress,
  setBirthday,
  setGender,
  setName,
  setNumber,
  setPicture,
  setMiddleSchool,
  setSchoolPhoneNum,
  setProtectorPhoneNum,
  setPhoneNum,
  setProtectorName,
  setDetailAddress,
  setPostNum,
  setAll,
  setClassNumber,
  setGradeNumber,
  getInfoCall,
  infoCall,
  pageMove,
  setHomePhoneNumber,
} from '@/core/redux/actions/Info';

export const mapStateToProps = (state: RootState) => ({
  gradeType: state.InfoState.gradeType,
  address: state.InfoState.address,
  birthday: state.InfoState.birthday,
  gender: state.InfoState.gender,
  name: state.InfoState.name,
  number: state.InfoState.number,
  picture: state.InfoState.picture,
  middleSchool: state.InfoState.middleSchool,
  schoolPhoneNum: state.InfoState.schoolPhoneNum,
  protectorPhoneNum: state.InfoState.protectorPhoneNum,
  phoneNum: state.InfoState.phoneNum,
  protectorName: state.InfoState.protectorName,
  detailAddress: state.InfoState.detailAddress,
  postNum: state.InfoState.postNum,
  gradeNumber: state.InfoState.gradeNumber,
  classNumber: state.InfoState.classNumber,
  error: state.InfoState.error,
  successTime: state.InfoState.successDate,
  setInfoError: state.InfoState.setInfoError,
  getInfoError: state.InfoState.getInfoError,
  pageMove: state.InfoState.pageMove,
  setImgError: state.InfoState.setImgError,
  homePhoneNumber: state.InfoState.homePhoneNumber,
  pictureUrl: state.InfoState.pictureUrl,
  status: state.Header.status.final_submit,
});

export const mapDispatchToProps = (dispatch: Function) => ({
  setAddress: (address: string) => dispatch(setAddress({ address })),
  setBirthday: (birthday: string) => dispatch(setBirthday({ birthday })),
  setGender: (gender: string) => dispatch(setGender({ gender })),
  setName: (name: string) => dispatch(setName({ name })),
  setNumber: (number: string) => dispatch(setNumber({ number })),
  setPicture: (picture: string) => dispatch(setPicture({ picture })),
  setMiddleSchool: (schoolName: string) =>
    dispatch(setMiddleSchool({ schoolName })),
  setSchoolPhoneNum: (schoolPhoneNum: string) =>
    dispatch(setSchoolPhoneNum({ schoolPhoneNum })),
  setProtectorPhoneNum: (protectorPhoneNum: string) =>
    dispatch(setProtectorPhoneNum({ protectorPhoneNum })),
  setPhoneNum: (phoneNum: string) => dispatch(setPhoneNum({ phoneNum })),
  setProtectorName: (protectorName: string) =>
    dispatch(setProtectorName({ protectorName })),
  setDetailAddress: (detailAddress: string) =>
    dispatch(setDetailAddress({ detailAddress })),
  setPostNum: (postNum: string) => dispatch(setPostNum({ postNum })),
  setAll: (all: RootState['InfoState']) => dispatch(setAll({ all })),
  setGradeNumber: (gradeNumber: string) =>
    dispatch(setGradeNumber({ gradeNumber })),
  setClassNumber: (classNumber: string) =>
    dispatch(setClassNumber({ classNumber })),
  getInfoToServer: () => dispatch(getInfoCall()),
  setInfoToServer: (pageMove: boolean) => dispatch(infoCall({ pageMove })),
  pageMoveChange: (isPageMove: boolean) =>
    dispatch(pageMove({ pageMove: isPageMove })),
  setHomePhoneNumber: (homePhoneNumber: string) =>
    dispatch(setHomePhoneNumber({ homePhoneNumber })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Info);
