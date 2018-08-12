import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import {
  NavLink,
  BrowserRouter as Router,
  Route,
} from "dva/router";

import wocao from '../wocao';
import postList from '../postList';

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

class IndexLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Router>
        <Layout className={styles.wrap}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className={styles.logo} />
            {/* 左侧导航栏 */}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <SubMenu title={<span><Icon type="file-text" /><span>文章管理</span></span>}>
                <Menu.Item key="1">
                  <NavLink to="/home/postList">
                  <Icon type="user" />
                  <span>文章列表</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/home/wocao">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                  </NavLink>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </SubMenu>
              <SubMenu title="测试">
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>测试</span>
                </Menu.Item>
              </SubMenu>
            </Menu>

          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className={styles.trigger}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
            </Header>
            {/* 右侧子路由 */}
            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <Route path='/home/wocao' component={wocao} />
              <Route path='/home/postList' component={postList} />
              Content
            </Content>

          </Layout>
        </Layout>
      </Router>
    );
  }
}

IndexLayout.propTypes = {
};

export default connect()(IndexLayout);
