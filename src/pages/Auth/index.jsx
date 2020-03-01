import React from 'react'
import {LoginForm, RegisterForm} from 'modules'
import {Route} from 'react-router-dom'

import CheckInfo from './components/Checkinfo.jsx'

import './auth.scss'

export default function Auth() {
    return (
        <section className='auth'>
            <div className="auth__content">
                <Route exact path={['/','/signin']} component={LoginForm}/>
                <Route exact path="/signup" component={RegisterForm}/>
                <Route exact path="/signup/check" component={CheckInfo}/>
            </div>
        </section>
    )
}




