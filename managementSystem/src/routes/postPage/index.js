import React from 'react';
import { connect } from 'dva';
// import styles from './index.scss';
// import { withRouter } from 'dva/router';
import Post from 'components/post';
import MarkdownEditor from 'components/markdownEditor';

class postPage extends React.Component {
    
    render() {
        return [<Post key="Post"></Post>,<MarkdownEditor key="MarkdownEditor"></MarkdownEditor>]
    }
}

postPage.propTypes = {
};

export default connect()(postPage)
