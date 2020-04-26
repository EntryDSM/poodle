import { useHistory } from "react-router-dom";

export const useRedirect = () => {
    const history = useHistory();
    const redirectToLink = (link: string) => {
        history.push(link);
    };
    return redirectToLink;
}