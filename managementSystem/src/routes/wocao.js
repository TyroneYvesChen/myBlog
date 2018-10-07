import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';

import MarkdownEditor from 'components/markdownEditor';


function wocao() {
    return <MarkdownEditor></MarkdownEditor>
}

export default connect()(wocao);