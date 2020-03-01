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
        isSubmitting
    } = props;
    return (
        <Block>
            <div className="auth__top">
                <h2>Log in</h2>
                <p>Please, sign in to your account</p>
            </div>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item
                    hasFeedback
                    validateStatus={values.email ? errors.email || errors.user ? 'error' : 'success' : ''}
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
                <Form.Item
                    validateStatus={errors.user ? 'error' : 'success'}
                    help={errors.password || errors.user}
                >
                    <Input
                        size="large"
                        type="password"
                        placeholder="Параль"
                        name="password"
                        onChange={handleChange}
                    />
                    {errors.server ? (<div className="server__error">{errors.server}</div>) : null}
                </Form.Item>
                <Form.Item>
                    <Button onClick={handleSubmit} disabled={isSubmitting} type="primary" htmlType="submit" size="large" className="login-form-button">
                        Log in
                    </Button>
                    <Link to="/signup">register now!</Link>
                </Form.Item>
            </Form>
        </Block>
    )
}
