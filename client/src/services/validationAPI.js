export const KEYBOARD = {
    ENTER: 13
};

export const userNameValidation = (e) => {
    const {value} = e.target;
    return /^[A-Za-z0-9]{3,}$/.test(value);
};

export const passwordValidation = (e) => {
    const {value} = e.target;
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,}$/.test(value);
};
