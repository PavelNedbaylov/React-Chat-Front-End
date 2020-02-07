import LoginForm from '../components/LoginForm';
import { withFormik } from 'formik';

import validation from 'utils/validations'

export default withFormik({
  mapPropsToValues: () => ({}),

  validate: values => validation(values,'login'),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'LoginForm',
})(LoginForm);