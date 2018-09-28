import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { withRouter } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

const FormItem = Form.Item;

class PostForm extends React.Component {
    state = {
        formData: {
            userName: {
                value: null,    // 值
                name: 'wocao',  // 中文名
                type: ''        // 组件类型
            }
        }
    };
    componentDidMount() {
        // setTimeout(_ => this.setState({ data: data }), 300)
    }
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
            <Form onSubmit={this.handleSubmit} layout="inline">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Username 不能为空！' }],
                        initialValue: 111
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
                    <Button type="primary" htmlType="submit">
                        Log in
                    </Button>
                </FormItem>
            </Form>
        );
    }
}
const Post = Form.create()(PostForm);

Post.propTypes = {
    // router: PropTypes.object.isRequired
};


const mapStateToProps = ({ user }) => ({ user })

// export default connect()(Login);
export default withRouter(connect(mapStateToProps)(Post))
