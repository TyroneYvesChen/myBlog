import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
// import '../../styles/index.scss';

import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            console.log(err)
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={`vetically ${styles.login__form}`}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: false,    // 表单域的值
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className={styles['login__form--forgot']} href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className={styles['login__form--button']}>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
        );
    }
}
const Login = Form.create()(LoginForm);

Login.propTypes = {
};

export default connect()(Login);
