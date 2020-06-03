export const NAME = "Info/NAME";
export const GENDER = "Info/GENDER";
export const BIRTHDAY = "Info/BIRTHDAY";
export const NUMBER = "Info/NUMBER";
export const MIDDLESCHOOL = "Info/MIDDLESCHOOL";
export const PROTECTOR_NAME = "Info/PROTECTOR_NAME";
export const PICTURE = "Info/PICTURE";
export const SCHOOL_PHONE_NUM = "Info/SCHOOL_PHONE_NUM";
export const PROTECTOR_PHONE_NUM = "Info/SCHOOL_PHONE_NUM";
export const PHONE_NUM = "Info/PHONE_NUM";
export const ADDRESS = "Info/ADDRESS";

export interface SetName {
    type: typeof NAME,
    payload: string,
}

export interface SetGender {
    type: typeof GENDER,
    payload: string,
}

export interface SetBirthday {
    type: typeof BIRTHDAY,
    payload: string,
}

export interface SetNumber {
    type: typeof NUMBER,
    payload: string,
}

export interface SetMiddleSchool {
    type: typeof MIDDLESCHOOL,
    payload: string,
}

export interface SetProtectorName {
    type: typeof PROTECTOR_NAME,
    payload: string,
}

export interface SetPicture {
    type: typeof PICTURE,
    payload: File,
}

export interface SetSchoolPhoneNum {
    type: typeof SCHOOL_PHONE_NUM,
    payload: string,
}

export interface SetProtectorPhoneNum {
    type: typeof PROTECTOR_PHONE_NUM,
    payload: string,
}

export interface SetPhoneNum {
    type: typeof PHONE_NUM,
    payload: string,
}

export interface SetAddress {
    type: typeof ADDRESS,
    payload: string,
}
export type InfoActionType = 
    | SetName
    | SetNumber
    | SetAddress
    | SetBirthday
    | SetGender
    | SetPhoneNum
    | SetSchoolPhoneNum
    | SetMiddleSchool
    | SetProtectorPhoneNum
    | SetProtectorName
    | SetPicture;

export const setName = (
    name: string,
): SetName => ({
    type: NAME,
    payload: name
});

export const setNumber = (
    number: string,
): SetNumber => ({
    type: NUMBER,
    payload: number,
})

export const setAddress = (
    address: string,
): SetAddress => ({
    type: ADDRESS,
    payload: address,
});

export const setBirthday = (
    birthday: string,
): SetBirthday => ({
    type: BIRTHDAY,
    payload: birthday
});

export const setGender = (
    gender: string,
): SetGender => ({
    type: GENDER,
    payload: gender,
});

export const setPhoneNum = (
    phonenumber: string,
): SetPhoneNum => ({
    type: PHONE_NUM,
    payload: phonenumber,
});

export const setSchoolPhoneNum = (
    schoolPhoneNum : string,
): SetSchoolPhoneNum => ({
    type: SCHOOL_PHONE_NUM,
    payload: schoolPhoneNum,
});

export const setMiddleSchool = (
    schoolName: string,
): SetMiddleSchool => ({
    type: MIDDLESCHOOL,
    payload: schoolName,
});

export const setProtectorPhoneNum = (
    protectorPhonenum: string,
): SetProtectorPhoneNum => ({
    type: PROTECTOR_PHONE_NUM,
    payload: protectorPhonenum,
});

export const setProtectorName = (
    protectorName: string,
): SetProtectorName => ({
    type: PROTECTOR_NAME,
    payload: protectorName,
});

export const setPicture = (
    picture: File,
): SetPicture => ({
    type: PICTURE,
    payload: picture,
})