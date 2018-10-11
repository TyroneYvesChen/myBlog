import React from 'react';
import { connect } from 'dva';
// import styles from './index.scss';
// import { withRouter } from 'dva/router';

import { Button } from 'antd';
import Post from 'components/post';
import MarkdownEditor from 'components/markdownEditor';

class postPage extends React.Component {



    // 获取子组件的数据
    saveData = () => {
        console.log(this.childPost)
        console.log(this.childMD)
        const childMDData = this.childPost.handleSubmit()
        const childPostData = this.childMD.state.previewContent
    }

    render() {
        return (
            <div>
                <Post onRef={ref => this.childPost = ref} key="Post"></Post>
                <MarkdownEditor onRef={ref => this.childMD = ref} key="MarkdownEditor"></MarkdownEditor>
                <Button type="primary" onClick={this.saveData}>
                    Log in
                </Button>
            </div>
        )
    }
}

postPage.propTypes = {
};

export default connect()(postPage)
