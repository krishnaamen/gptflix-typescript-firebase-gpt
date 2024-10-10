type ValidateType = {
    email: string,
    password: string,
    name?: string
}

export const checkVaidata = (data: ValidateType) => {
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(data.email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(data.password);

    if (!isEmailValid) {
        return 'Invalid email';
    }   
    if (!isPasswordValid) {
        return 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number';
    }

}