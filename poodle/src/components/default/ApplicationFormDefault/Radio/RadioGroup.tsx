import React, { 
    createContext,
} from "react";
import crypto from 'crypto';

interface ContextValue {
    onChange: Function,
    name: string,
}

interface Props<T> {
    onChange: (value: T) => void,
    children: React.ReactNode,
}

const defaultContext = {
    onChange: ()=>{},
    name: "",
}


const RadioGroupContext = createContext<ContextValue>(defaultContext);

function getHashName(name: string){
    const hashName = crypto.createHash('sha1').update(name).digest('hex');
    return hashName;
}

function getRandomString(){
    return Math.random().toString().substr(2, 5);
}

function RadioGroupProvider<T>({
    children,
    onChange,
}: Props<T>){
    const hashedName = getHashName(getRandomString());
    const contextValue = {
        onChange: onChange,
        name: hashedName,
    }
    return (
        <RadioGroupContext.Provider value={contextValue}>
            {children}
        </RadioGroupContext.Provider>
    )
}

export default RadioGroupContext;
export { RadioGroupProvider }