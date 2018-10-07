import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';

class MarkdownEditor extends React.Component {
    state = {
    };
    componentDidMount() {
        // setTimeout(_ => this.setState({ data: data }), 300)
    }

    render() {
        

        return 
    }
}

MarkdownEditor.propTypes = {
    // router: PropTypes.object.isRequired
};


const mapStateToProps = ({ user }) => ({ user })

// export default connect()(Login);
export default connect(mapStateToProps)(MarkdownEditor)
