import validator from "validator";

export const emailValidator = (value: string) => {
    return validator.isEmail(value);
};

export const passwordValidator = (value: string) => {
    // Password must be at least 6 characters, contain at least one digit, and one alphabet character
    const regex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/;
    return regex.test(value);
};