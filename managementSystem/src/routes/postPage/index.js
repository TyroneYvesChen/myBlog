import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
// import { withRouter } from 'dva/router';
import Post from 'components/post';


class postPage extends React.Component {
    

    render() {
        return <Post></Post>
    }
}

postPage.propTypes = {
};


const mapStateToProps = ({ user }) =>({ user })

export default connect(mapStateToProps)(postPage)
