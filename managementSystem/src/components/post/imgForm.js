import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import { Form, Input, Icon, Button } from 'antd';

const FormItem = Form.Item;


let uuid = 0;

class ImgForm extends React.Component {
    remove = (k) => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('imagesKeys');
        // We need at least one passenger
        if (keys.length === 1) {
            return;
        }

        // can use data-binding to set
        form.setFieldsValue({
            imagesKeys: keys.filter(key => key !== k),
        });
    }

    add = () => {
        const { form } = this.props;
        // can use data-binding to get
        const keys = form.getFieldValue('imagesKeys');
        const nextKeys = keys.concat(uuid);
        uuid++;
        // can use data-binding to set
        // important! notify form to detect changes
        form.setFieldsValue({
            imagesKeys: nextKeys,
        });
    }

    render() {
        const { getFieldDecorator, getFieldValue } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 20 },
            },
        };
        const formItemLayoutWithOutLabel = {
            wrapperCol: {
                xs: { span: 24, offset: 0 },
                sm: { span: 20, offset: 4 },
            },
        };
        getFieldDecorator('imagesKeys', { initialValue: [] });
        const keys = getFieldValue('imagesKeys');
        const formItems = keys.map((k, index) => {
            return (
                <FormItem
                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                    label={index === 0 ? '图片URL' : ''}
                    required={false}
                    key={k}
                >
                    {getFieldDecorator(`images[${k}]`, {
                        validateTrigger: ['onChange', 'onBlur'],
                        rules: [{
                            required: true,
                            whitespace: true,
                            message: "请输入正确的图片路径",
                        }],
                    })(
                        <Input placeholder="passenger images URL" style={{ width: '60%', marginRight: 8 }} />
                    )}
                    {keys.length > 1 ? (
                        <Icon
                            className={styles['dynamic__delete--button']}
                            type="minus-circle-o"
                            disabled={keys.length === 1}
                            onClick={() => this.remove(k)}
                        />
                    ) : null}
                </FormItem>
            );
        });

        return (
            <div>
                {formItems}
                <FormItem 
                {...(formItems.length === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                label={formItems.length === 0 ? '图片URL' : ''}>
                    <Button type="dashed" onClick={this.add} style={{ width: '60%' }}>
                        <Icon type="plus" /> Add field
                    </Button>
                </FormItem>
            </div>
        );
    }
}

// const Post = Form.create()(PostForm);

ImgForm.propTypes = {
    // router: PropTypes.object.isRequired
};


const mapStateToProps = ({ user }) => ({ user })

// export default connect()(Login);
export default connect(mapStateToProps)(ImgForm)
