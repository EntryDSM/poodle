import React, { 
    createContext, 
    FC,
} from "react";

interface ContextValue {
    onChange: Function,
    name: string,
}

interface Props {
    onChange: Function,
    children: React.ReactNode,
    name: string,
}

const contextValue: ContextValue = {
    onChange: ()=>{},
    name: "",
}

const RadioGroupContext = createContext(contextValue);

const RadioGroupProvider: FC<Props> = ({
    children,
    onChange,
    name,
}) => {
    const contextValue = {
        onChange: onChange,
        name: name,
    }
    return (
        <RadioGroupContext.Provider value={contextValue}>
            {children}
        </RadioGroupContext.Provider>
    )
}

export default RadioGroupContext;
export { RadioGroupProvider }