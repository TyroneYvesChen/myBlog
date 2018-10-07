import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';

const ReactMarkdown = require('react-markdown')
const htmlParser = require('react-markdown/plugins/html-parser')

const parseHtml = htmlParser({
    isValidNode: node => node.type !== 'script',
    processingInstructions: [/* ... */]
  })
  

class MarkdownEditor extends React.Component {
    state = {
    };
    componentDidMount() {
        // setTimeout(_ => this.setState({ data: data }), 300)
    }

    render() {
        const input = '# This is a header\n\nAnd this is a paragraph'
        console.log(window.CodeMirror)
        

        return (
            <div className={styles['react__markdown']}>
            <ReactMarkdown source={input} className="wocao"/>
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
