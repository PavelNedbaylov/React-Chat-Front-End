import LoginForm from '../components/LoginForm';
import { withFormik } from 'formik';

import validation from 'utils/validations'
import { userActions } from 'redux/actions'

import store from 'redux/store'

// const LoginFormConected = connect(state=>state, userActions)(LoginForm)

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),

  validate: values => validation(values, 'login'),

  handleSubmit: (values, { setErrors, setSubmitting, props }) => {
    store.dispatch(userActions.fetchUserSignin(values))
      .then(()=>{
        setTimeout(()=>props.history.push('/'),100)
      })
      .catch(error => {
        if (error.response.data.status === 'error') {
          setErrors({ [error.response.data.type]: error.response.data.message })
        }
        else {
          setErrors({ user: 'Something went wrong. Try again later' })
        }
      })
      .finally(() => setSubmitting(false))
  },

  displayName: 'LoginForm',
})(LoginForm);

