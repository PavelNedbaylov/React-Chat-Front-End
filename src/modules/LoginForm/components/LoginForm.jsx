import React from 'react'

import { Button, Block } from 'components'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'

export default function LoginForm(props) {
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        isSubmitting,
    } = props;

    return (
        <Block>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item
                    hasFeedback
                    validateStatus={values.email ? errors.email ? 'error' : 'success' : ''}
                    help={errors.email}
                    >
                    <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        size="large"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item help={errors.password}>
                    <Input
                        size="large"
                        type="password"
                        placeholder="Повторите параль"
                        name="password"
                        onChange={handleChange}
                    />
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleSubmit} disabled={isSubmitting} type="primary" htmlType="submit" size="large" className="login-form-button">
                        Log in
                    </Button>
                    <Link to="/register">register now!</Link>
                </Form.Item>
            </Form>
        </Block>
    )
}
