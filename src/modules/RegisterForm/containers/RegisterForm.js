import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

export default withFormik({
    mapPropsToValues: () => ({}),
  
    // Custom sync validation
    validate: values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
          } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(values.password)) {
            errors.password = 'Weak password';
          }
        return errors;
      },
  
    handleSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'BasicForm',
  })(RegisterForm);