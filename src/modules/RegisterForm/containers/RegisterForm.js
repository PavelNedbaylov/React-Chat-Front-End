import RegisterForm from '../components/RegisterForm';
import { withFormik } from 'formik';

import validation from 'utils/validations'

export default withFormik({
  mapPropsToValues: () => ({}),

  validate: values => validation(values,'registration'),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RegisterForm',
})(RegisterForm);