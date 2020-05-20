import React, { 
    createContext,
    useContext,
} from "react";
import crypto from 'crypto';

interface ContextValue<T> {
    onChange: (value: T) => void,
    name: string,
    savedValue: T,
}

interface Props<T> {
    onChange: (value: T) => void,
    children: React.ReactNode,
    value: string,
}

function getHashName(name: string){
    const hashName = crypto.createHash('sha1').update(name).digest('hex');
    return hashName;
}

const RadioGroupContext = createContext<ContextValue<any> | null>(null);

function useRadioGroupContext<T>() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw Error
  }
  return context as ContextValue<T>
}

function getRandomString(){
    return Math.random().toString().substr(2, 5);
}

function RadioGroupProvider<T>({
    children,
    onChange,
    value,
}: Props<T>){
    const hashedName = getHashName(getRandomString());
    const contextValue = {
        onChange: onChange,
        name: hashedName,
        savedValue: value,
    }
    return (
        <RadioGroupContext.Provider value={contextValue}>
            {children}
        </RadioGroupContext.Provider>
    )
}

export default useRadioGroupContext;
export { RadioGroupProvider }