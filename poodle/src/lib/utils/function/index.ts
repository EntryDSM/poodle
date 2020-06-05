import { useHistory } from "react-router-dom";
import { useCallback } from 'react';

export const useRedirect = () => {
    const history = useHistory();
    const redirectToLink = (link: string) => {
        history.push(link);
    };
    return redirectToLink;
}
export const isEmptyCheck = (text: string)=> {
    if(text.length > 0){
        return false;
    }
    return true;
}