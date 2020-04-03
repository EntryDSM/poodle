export const MODALON = 'modal/ON' as const;
export const MODALOFF = 'modal/OFF' as const;
export const MODALCLEAR = 'modal/MODALCLEAR' as const;

export const LOGINMODAL = 'modal/LOGINMODAL' as const;
export const RESETMODAL = 'modal/RESETMODAL' as const;

export const YELLOWCHECKMODAL = 'modal/YELLOWCHECKMODAL' as const;
export const BLUECHECKMODAL = 'modal/BLUECHECKMODAL' as const;
export const REDERRORMODAL = 'modal/REDERRORMODAL' as const;
export const WARNINGMODAL = 'modal/WARNINGMODAL' as const;

export const modalOn = (payload: string) => ({ type: MODALON, payload });
export const modalOff = (payload: string) => ({ type: MODALOFF, payload });
export const modalClear = () => ({ type: MODALCLEAR });


export type ModalAction =
    | ReturnType<typeof modalOn>
    | ReturnType<typeof modalOff>
    | ReturnType<typeof modalClear>;