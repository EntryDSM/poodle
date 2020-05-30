import React, { 
    createContext,
    useContext,
    useMemo,
} from "react";

interface ContextValue<T> {
    onChange: (value: T) => void,
    name: string,
    savedValue: T,
}

interface Props<T> {
    onChange: (value: T) => void,
    children: React.ReactNode,
    value: T,
}

let name = 0;

const getName = () => {
    name++;
    return name.toString();
}

const RadioGroupContext = createContext<ContextValue<any> | null>(null);

function useRadioGroupContext<T>() {
  const context = useContext(RadioGroupContext);
  if (!context) {
    throw new Error("radio group context must be provided");
  }
  return context as ContextValue<T>
}

function RadioGroupProvider<T>({
    children,
    onChange,
    value,
}: Props<T>){
    const hashedName = useMemo(()=> getName(),[]);
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