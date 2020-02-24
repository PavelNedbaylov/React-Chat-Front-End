export default function validation(values,event){
    const errors = {}
    
    // email
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    // password
    if (!values.password) {
        errors.password = 'Required';
    } else if (event==='registration' && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(values.password)) {
        errors.password = 'Weak password';
    } else if (event==='login' && values.password.length < 6) {
        errors.password = 'Password must contain at least 6 characters';
    }

    // confirm password
    if (event==='registration' && !values.conf_password) {
        errors.conf_password = 'Required';
    } else if (event==='registration' && values.conf_password!==values.password) {
        errors.conf_password = 'passwords don\'t match';
    }

    return errors
}