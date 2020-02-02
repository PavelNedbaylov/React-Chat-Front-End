import React from 'react'

import { Button, Block } from 'components'
import { Form, Icon, Input } from 'antd'
import { Link } from 'react-router-dom'

function LoginForm(props) {
    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    const { getFieldDecorator } = props.form

    return (
        <Block>
            <div className="auth__top">
                <h2>Войти в аккаунт</h2>
                <p>Пожалуйста, войдите в свой аккаунт</p>
            </div>
            <Form onSubmit={handleSubmit} className="login-form">
                <Form.Item validateStatus="success">
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item validateStatus="success">
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">
                        Log in
                            </Button>
                    <Link to="/register">register now!</Link>
                </Form.Item>
            </Form>
        </Block>
    )
}

export default Form.create({ name: 'LoginForm' })(LoginForm);
