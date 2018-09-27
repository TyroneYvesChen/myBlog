import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import {
  NavLink,
  // BrowserRouter as Router,
  HashRouter as Router,
  // Link,
  Route,
  Redirect,
  Switch
} from "dva/router";

import { flatten } from 'utils';

import wocao from '../wocao';
import postList from '../postList';
import login from '../login';

import { Layout, Menu, Icon } from 'antd';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const routersList = [
  // {
  //   path: '/login',
  //   component: login
  // },
  {
    title: '文章管理',
    iconType: 'file-text',
    children: [{
      path: '/home/postList',
      component: postList,
      title: '文章列表',
      iconType: 'user',
    }, {
      path: '/home/wocao',
      component: wocao,
      title: 'wocao',
      iconType: 'video-camera',
    }, {
      path: '/home/hhh',
      component: wocao,
      title: 'wocao',
      iconType: 'upload',
    },]
  },
]

class IndexLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  renderMenu(data) {
    return data.map(v => {
      const { title, iconType, component, path, children } = v
      return children ? (
        <SubMenu
          title={
            <span><Icon type={iconType} /><span>
            </span>{title}</span>
          }
          key={title}>
          {
            this.renderMenu(children)
          }
        </SubMenu>
      )
        : (
          <Menu.Item key={path}>
            <NavLink to={path} replace>
              <Icon type={iconType} />
              <span>{title}</span>
            </NavLink>
          </Menu.Item>
        )

    })
  }

  renderRoute() {
    const keys = ['title', 'iconType', 'path', 'component']
    const routeDom = flatten(routersList, keys).filter(v => v.path)
    console.log(routeDom, 'routeDom.........')
    return routeDom.map(v =>
      <Route
        path={v.path}
        component={v.component}
        key={v.path} />
    )
  }

  render() {
    const { dispatch, user } = this.props
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
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[]}>
              <Menu.Item key="1">
                <NavLink to="/login" replace>
                  <Icon type="user" />
                  <span>登陆</span>
                </NavLink>
              </Menu.Item>
              {
                this.renderMenu(routersList)
              }
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
              <Switch>
                {/* <Route path='/login' component={login} />
              <Route path='/home/wocao' component={wocao} />
              <Route path='/home/postList' component={postList} /> */}
                <Route path='/login' component={login} />
                {
                  // 判断user中的token有没有，没有的话就重定向
                  // user.token ?
                  1 ?
                    this.renderRoute()
                    : <Redirect
                      to={{
                        pathname: "/login",
                        state: { from: this.props.location }
                      }}
                    />
                }
              </Switch>

            </Content>

          </Layout>
        </Layout>
      </Router>
    );
  }
}

IndexLayout.propTypes = {
};

const mapStateToProps = ({ user }) => ({ user })

export default connect(mapStateToProps)(IndexLayout);
