import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { withRouter } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox, Switch } from 'antd';

const FormItem = Form.Item;

class PostForm extends React.Component {
    state = {
        formData: {
            title: '',
            markdown: '',
            images: [],
            tags: [],
            category: '',
            allowComment: true,
            hits: 0,
            isTop: false,
            isAvailable: true,
            createdByID: ''
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
            console.log(this.state)

            // dispatch({
            //     type: 'user/fetchToken',
            //     payload: values,
            // })
            // .then( _ => {
            //     console.log(user)
            //     this.props.history.push('/')
            // });
        });
    }

    render() {
        console.log(this.state)
        const { getFieldDecorator } = this.props.form
        const { formData } = this.state

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 8 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
          };

          const formItemLayoutWithOutLabel = {
            wrapperCol: {
              xs: { span: 24, offset: 0 },
              sm: { span: 16, offset: 8 },
            },
          };

        return (
            <Form onSubmit={this.handleSubmit}>
                <FormItem label='文章标题' {...formItemLayout}>
                    {getFieldDecorator('title', {
                        rules: [{
                            required: true,
                            message: 'title 不能为空！'
                        }],
                        initialValue: formData.title
                    })(
                        <Input prefix={<Icon type="user"
                            className={styles['input__icon--color']} />}
                            className={styles['input__width']}
                            placeholder="Username" />
                    )}
                </FormItem>
                <FormItem label="是否允许评论" {...formItemLayout}>
                    {getFieldDecorator('allowComment', { 
                        valuePropName: 'checked' ,
                        initialValue: formData.allowComment
                    })(
                        <Switch
                        checkedChildren="是" unCheckedChildren="否"/>
                    )}
                </FormItem>
                <FormItem label="是否置顶" {...formItemLayout}>
                    {getFieldDecorator('isTop', { 
                        valuePropName: 'checked' ,
                        initialValue: formData.isTop
                    })(
                        <Switch
                        checkedChildren="是" unCheckedChildren="否"/>
                    )}
                </FormItem>
                <FormItem label="是否可用" {...formItemLayout}>
                    {getFieldDecorator('isAvailable', { 
                        valuePropName: 'checked' ,
                        initialValue: formData.isAvailable
                    })(
                        <Switch
                        checkedChildren="可用" unCheckedChildren="不可用"/>
                    )}
                </FormItem>
                <FormItem {...formItemLayoutWithOutLabel}>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Password 不能为空！' }],
                    })(
                        <Input 
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" 
                        className={styles['input__width']} 
                        placeholder="Password" />
                    )}
                </FormItem>
                <FormItem {...formItemLayoutWithOutLabel}>
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
