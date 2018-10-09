import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';

import Editor from './editor';


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
                <Editor></Editor>
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
