import { connect } from 'react-redux';
import Info from './Info';
import { RootState } from '../../core/redux/reducer';
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
} from '../../core/redux/actions/Info';

export const mapStateToProps = (state: RootState) => ({
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
});

export const mapDispatchToProps = (dispatch:Function) => ({
    setAddress: (
        address: string,
    ) => dispatch(setAddress({ address })),
    setBirthday: (
        birthday: string,
    ) => dispatch(setBirthday({ birthday })),
    setGender: (
        gender: string,
    ) => dispatch(setGender({ gender })),
    setName: (
        name: string,
    ) => dispatch(setName({ name })),
    setNumber: (
        number: string,
    ) => dispatch(setNumber({ number })),
    setPicture: (
        picture: File,
    ) => dispatch(setPicture({ picture })),
    setMiddleSchool: (
        schoolName: string,
    ) => dispatch(setMiddleSchool({ schoolName })),
    setSchoolPhoneNum: (
        schoolPhoneNum: string,
    ) => dispatch(setSchoolPhoneNum({ schoolPhoneNum })),
    setProtectorPhoneNum: (
        protectorPhoneNum: string,
    ) => dispatch(setProtectorPhoneNum({ protectorPhoneNum })),
    setPhoneNum: (
        phoneNum: string,
    ) => dispatch(setPhoneNum({ phoneNum })),
    setProtectorName: (
        protectorName: string,
    ) => dispatch(setProtectorName({ protectorName })),
    setDetailAddress: (
        detailAddress: string,
    ) => dispatch(setDetailAddress({ detailAddress })),
    setPostNum: (
        postNum: string,
    ) => dispatch(setPostNum({ postNum })),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Info);