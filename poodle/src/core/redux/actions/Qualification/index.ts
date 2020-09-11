export const QUALIFICATION = 'QUALIFICATION/QUALIFICATION' as const;

export interface SetQualification {
  type: typeof QUALIFICATION;
  payload: { isQualification: boolean };
}

export type QualificationType = SetQualification;

export const setQualification = (payload: {
  isQualification: boolean;
}): QualificationType => ({
  type: QUALIFICATION,
  payload,
});
