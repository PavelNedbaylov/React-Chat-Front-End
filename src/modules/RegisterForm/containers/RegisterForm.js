import { withFormik } from 'formik';
import store from 'redux/store'

import validation from 'utils/validations'
import RegisterForm from '../components/RegisterForm';
import { userActions } from 'redux/actions'

export default withFormik({
  mapPropsToValues: () => ({}),

  validate: values => validation(values, 'registration'),

  handleSubmit: (values, { setErrors, setSubmitting, props }) => {
    store.dispatch(userActions.fetchUserRegister(values))
      .then(() => {
        setTimeout(()=>{
          props.history.push('/')
        },100)
      })
      .catch(error => {
        if (error && error.response)
          setErrors({ server: error.response.data.message })
      })
      .finally(() => setSubmitting(false))
  },

  displayName: 'RegisterForm',
})(RegisterForm);