export const NAME = "Info/NAME" as const;
export const GENDER = "Info/GENDER" as const;
export const BIRTHDAY = "Info/BIRTHDAY" as const;
export const NUMBER = "Info/NUMBER" as const;
export const MIDDLESCHOOL = "Info/MIDDLESCHOOL" as const;
export const PROTECTOR_NAME = "Info/PROTECTOR_NAME" as const;
export const PICTURE = "Info/PICTURE" as const;
export const SCHOOL_PHONE_NUM = "Info/SCHOOL_PHONE_NUM" as const;
export const PROTECTOR_PHONE_NUM = "Info/PROTECTOR_PHONE_NUM" as const;
export const PHONE_NUM = "Info/PHONE_NUM" as const;
export const ADDRESS = "Info/ADDRESS" as const;

export interface SetName {
    type: typeof NAME,
    payload: { name : string },
}

export interface SetGender {
    type: typeof GENDER,
    payload: { gender : string },
}

export interface SetBirthday {
    type: typeof BIRTHDAY,
    payload: { birthday: string },
}

export interface SetNumber {
    type: typeof NUMBER,
    payload: { number: string },
}

export interface SetMiddleSchool {
    type: typeof MIDDLESCHOOL,
    payload: { schoolName : string },
}

export interface SetProtectorName {
    type: typeof PROTECTOR_NAME,
    payload: { protectorName: string },
}

export interface SetPicture {
    type: typeof PICTURE,
    payload: { picture: File },
}

export interface SetSchoolPhoneNum {
    type: typeof SCHOOL_PHONE_NUM,
    payload: { schoolPhoneNum: string},
}

export interface SetProtectorPhoneNum {
    type: typeof PROTECTOR_PHONE_NUM,
    payload: { protectorPhoneNum: string },
}

export interface SetPhoneNum {
    type: typeof PHONE_NUM,
    payload: { phoneNum : string },
}

export interface SetAddress {
    type: typeof ADDRESS,
    payload: { address: string },
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
    payload :{ name: string },
): InfoActionType => ({
    type: NAME,
    payload,
});

export const setNumber = (
    payload : { number: string, }
): InfoActionType => ({
    type: NUMBER,
    payload,
})

export const setAddress = (
    payload : { address: string, }
): InfoActionType => ({
    type: ADDRESS,
    payload,
});

export const setBirthday = (
    payload : { birthday: string, }
): InfoActionType => ({
    type: BIRTHDAY,
    payload,
});

export const setGender = (
    payload : { gender: string, }
): InfoActionType => ({
    type: GENDER,
    payload,
});

export const setPhoneNum = (
    payload : { phoneNum: string, }
): InfoActionType => ({
    type: PHONE_NUM,
    payload,
});

export const setSchoolPhoneNum = (
    payload : { schoolPhoneNum : string, }
): InfoActionType => ({
    type: SCHOOL_PHONE_NUM,
    payload,
});

export const setMiddleSchool = (
    payload : { schoolName: string, }
): InfoActionType => ({
    type: MIDDLESCHOOL,
    payload,
});

export const setProtectorPhoneNum = (
    payload : { protectorPhoneNum: string, }
): InfoActionType => ({
    type: PROTECTOR_PHONE_NUM,
    payload,
});

export const setProtectorName = (
    payload : { protectorName: string, }
): InfoActionType => ({
    type: PROTECTOR_NAME,
    payload,
});

export const setPicture = (
    payload : { picture: File, }
): InfoActionType => ({
    type: PICTURE,
    payload,
})