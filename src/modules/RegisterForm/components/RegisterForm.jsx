import React from 'react'

import { Button, Block } from 'components'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'

export default function RegisterForm(props) {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting
    } = props;
    const success = false
    return (
        <div>
            <div className="auth__top">
                <h2>Registration</h2>
                <p>Для входа в чат, вам нужно зарегистрироваться</p>
            </div>
            <Block>
                {!success ? <Form className="login-form" onSubmit={handleSubmit}>
                    <Form.Item
                        hasFeedback
                        validateStatus={values.email ? errors.email ? 'error' : 'success' : ''}
                        help={errors.email}
                    >
                        <Input
                            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            placeholder="E-Mail"
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        validateStatus={values.fullname ? errors.fullname ? 'error' : 'success' : ''}
                        help={errors.fullname}
                    >
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            type="text"
                            placeholder="Ваше имя"
                            name="fullname"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        validateStatus={values.password ? errors.password ? 'error' : 'success' : ''}
                        help={errors.password}
                    >
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            type="password"
                            placeholder="Пароль"
                            name="password"
                            onChange={handleChange}
                        />
                    </Form.Item>
                    <Form.Item
                        hasFeedback
                        validateStatus={values.conf_password ? errors.conf_password ? 'error' : 'success' : ''}
                        help={errors.conf_password}
                    >
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            type="password"
                            placeholder="Повторите параль"
                            name="conf_password"
                            onChange={handleChange}
                        />
                        {errors.server ? (<div className="server__error">{errors.server}</div>) : null}
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={handleSubmit} disabled={isSubmitting} type="primary" htmlType="submit" size="large" className="login-form-button">
                            Зарегистрироваться
                            </Button>
                        <Link to="/signin">Войти в аккаунт</Link>
                    </Form.Item>
                </Form> : (
                        <div className="auth__success-block">
                            <Icon style={{ fontSize: '50px' }} type="info-circle" theme="twoTone" />
                            <h3>Подтвердите свой аккаунт</h3>
                            <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта</p>
                        </div>
                    )}
            </Block>
        </div>
    )
}
