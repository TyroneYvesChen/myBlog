import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
// import '../../styles/index.scss';
// import PropTypes from 'prop-types'
import { withRouter } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class LoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch, user } = this.props
        console.log(dispatch)
        console.log(user)
        this.props.form.validateFields((err, values) => {
            console.log(err, 'err')
            if (err) return
            console.log(values)
            dispatch({
                type: 'user/fetchToken',
                payload: values,
            })
            // .then( _ => {
            //     console.log(user)
            //     this.props.history.push('/')
            // });
        });
    }

    render() {
        // console.log(this.props.form)
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className={`vetically ${styles.login__form}`}>
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Username 不能为空！' }],
                    })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Password 不能为空！' }],
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
const TLogin = Form.create()(LoginForm);

TLogin.propTypes = {
    // router: PropTypes.object.isRequired
};


const mapStateToProps = ({ user }) =>({ user })

const Login = withRouter(connect(mapStateToProps)(TLogin))

// export default connect()(Login);
export default Login
