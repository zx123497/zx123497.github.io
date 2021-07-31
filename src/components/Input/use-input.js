import { useState } from 'react';

const useInput = ({initVal='', validators}) => {
    const [enteredValue, setEnteredValue] = useState(initVal);
    const [isTouched, setIsTouched] = useState(false);

    const valueChangeHandler = (inputID, value) => {
        setEnteredValue(value);
        setIsTouched(true);
    };

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    };
    
    const checkVaildity = (newValue, validators) => {
        let isValid = true;
        if(validators){
            for (const validator of validators) {
                isValid = isValid && validator(newValue);
            }
        }
        return isValid;
    }
    const valueIsValid = checkVaildity(enteredValue, validators);
    const hasError = !valueIsValid && isTouched;
    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;