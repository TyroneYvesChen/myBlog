import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import hah from './index.scss';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
        <li>wocao</li>
      </ul>
      <div className={hah.wocao}>
        <div className={hah.item}>我就测试一下信不信</div>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
