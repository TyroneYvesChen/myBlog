import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
// import { withRouter } from 'dva/router';

import { Button } from 'antd';
import Post from 'components/post';
import MarkdownEditor from 'components/markdownEditor';

class postPage extends React.Component {
    state = {
        isBtnLoading: false, // 提交按钮loading动画
    };


    // 获取子组件的数据
    saveData = () => {
        console.log(this.childPost)
        console.log(this.childMD)
        const childMDData = this.childPost.handleSubmit()
        const childPostData = this.childMD.state.previewContent
    }

    render() {
        const { isBtnLoading } = this.state
        return (
            <div>
                <Post onRef={ref => this.childPost = ref} key="Post"></Post>
                <MarkdownEditor onRef={ref => this.childMD = ref} key="MarkdownEditor"></MarkdownEditor>
                <div className={styles['botton__group']}>
                    <Button
                        type="primary"
                        className={styles['botton__group--submit']}
                        loading={isBtnLoading}
                        onClick={this.saveData}>
                        提交
                    </Button>
                    <Button type="danger">取消</Button>
                </div>
            </div>
        )
    }
}

postPage.propTypes = {
};

export default connect()(postPage)
