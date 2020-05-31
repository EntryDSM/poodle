export const QUALIFACATION_EXAM = "ChoiceType/QUALIFACATION_EXAM";
export const APPLYTYPE = "ChoiceType/APPLYTYPE";
export const DISTRICT = "ChoiceType/DISTRICT";
export const GRADUATION_YEAR = "ChoiceType/GRADUATIONSTATUS_YEAR";
export const GRADUATION_STATUS = "ChoiceType/GRADUATION_STATUS";
export const NATIONAL_MERIT = "ChoiceType/NATIONAL_MERIT";
export const SPECIAL_ADMISSION = "ChoiceType/SPECIAL_ADMISSION";

export interface SetQualifacationExam {
    type: typeof QUALIFACATION_EXAM,
    payload: boolean,
}

export interface SetApplyType {
    type: typeof APPLYTYPE,
    payload: string,
}

export interface SetDistrict {
    type: typeof DISTRICT,
    payload: string,
}

export interface SetGraduationStatus {
    type: typeof GRADUATION_STATUS,
    payload: string,
}

export interface SetGraduationYear {
    type: typeof GRADUATION_YEAR,
    payload: string,
}

export interface SetNationalMerit {
    type: typeof NATIONAL_MERIT,
    payload: boolean,
}

export interface SetSpecialAdmission {
    type: typeof SPECIAL_ADMISSION,
    payload: boolean,
}

export type ChoiceTypeActionType = 
    | SetQualifacationExam
    | SetApplyType
    | SetDistrict
    | SetGraduationStatus
    | SetGraduationYear
    | SetNationalMerit
    | SetSpecialAdmission;

export const setQualifacationExam = (
    isQualifacationExam:boolean
):ChoiceTypeActionType => ({ 
    type: QUALIFACATION_EXAM , 
    payload: isQualifacationExam 
});
export const setApplyType = (
    type:string
):ChoiceTypeActionType => ({ 
    type: APPLYTYPE,  
    payload: type 
});
export const setDistrict = (
    district:string
):ChoiceTypeActionType => ({ 
    type: DISTRICT, 
    payload: district 
});
export const setGraduationStatus = (
    status:string
):ChoiceTypeActionType => ({ 
    type: GRADUATION_STATUS,
    payload: status 
});
export const setGraduationYear = (
    year:string
):ChoiceTypeActionType => ({ 
    type: GRADUATION_YEAR, 
    payload: year });
export const setNationalMerit = (
    isNationalMerit: boolean
):ChoiceTypeActionType => ({     
    type: NATIONAL_MERIT,
    payload: isNationalMerit, 
});
export const setSpecialAdmission = (
    isSpecialAdmission: boolean,
) => ({
    type: SPECIAL_ADMISSION,
    payload: isSpecialAdmission,
})