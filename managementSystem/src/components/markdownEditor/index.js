import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';

import Editor from './editor';

const ReactMarkdown = require('react-markdown')
const htmlParser = require('react-markdown/plugins/html-parser')


const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [/* ... */]
})


class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props)
        this.editorOnChange = this.editorOnChange.bind(this)
        this.state = {
            markdownSrc: 'wocaohhhh'
        }
    }

    componentDidMount() {
        // setTimeout(_ => this.setState({ data: data }), 300)
    }

    editorOnChange = (evt) => {
        this.setState({ markdownSrc: evt.target.value })
        console.log(evt, 'Editor data')
    }

    render() {
        const input = '# This is a header\n\nAnd this is a paragraph'


        return (
            <div>
                <Editor onChange={this.editorOnChange} value={this.state.markdownSrc}></Editor>
                <ReactMarkdown source={this.state.markdownSrc} className={styles['react__markdown']}/>
            </div>
        )
    }
}

MarkdownEditor.propTypes = {
    // router: PropTypes.object.isRequired
};


const mapStateToProps = ({ user }) => ({ user })

// export default connect()(Login);
export default connect(mapStateToProps)(MarkdownEditor)
