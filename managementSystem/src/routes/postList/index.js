import React from 'react';
import { connect } from 'dva';
import styles from './index.scss';
import {
  NavLink,
  BrowserRouter as Router,
  Route,
} from "dva/router";

import { Table, Button, Input, InputNumber, Popconfirm, Form } from 'antd';

const FormItem = Form.Item;
const EditableContext = React.createContext();

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
  }, {
    title: '所属分类',
    dataIndex: 'category',
  }, {
    title: '图片路径',
    dataIndex: 'images',
  }, {
    title: '标签',
    dataIndex: 'tag',
  }, {
    title: '是否允许评论',
    dataIndex: 'allowComment',
  }, {
    title: '文章被点击的次数',
    dataIndex: 'hits',
  }, {
    title: '是否置顶',
    dataIndex: 'isTop',
  }, {
    title: '是否可用',
    dataIndex: 'isAvailable',
  }, {
    title: '创建时间',
    dataIndex: 'createdAt',
  }, {
    title: '最后修改时间',
    dataIndex: 'updatedAt',
  }
];

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: `萌汤圆${i}级帅！！！`,
    title: `Edward King ${i}`,
    category: 32,
    images: `London, Park Lane no. ${i}`,
  });
}

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  getInput = () => {
    if (this.props.inputType === 'number') {
      return <InputNumber />;
    }
    return <Input />;
  };

  render() {
    console.log(this.props)
    const {
      editing,
      dataIndex,
      title,
      inputType,
      record,
      index,
      ...restProps
    } = this.props;
    return (
      <EditableContext.Consumer>
        {(form) => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [{
                      required: true,
                      message: `Please Input ${title}!`,
                    }],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : restProps.children}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data, editingKey: '' };
    this.columns = columns.map(v => {
      v. editable = true
      return v
    })
    this.columns.push({
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        const editable = this.isEditing(record);
        return (
          <div>
            {editable ? (
              <span>
                <EditableContext.Consumer>
                  {form => (
                    <a
                      href="javascript:;"
                      onClick={() => this.save(form, record.key)}
                      style={{ marginRight: 8 }}
                    >
                      Save
                    </a>
                  )}
                </EditableContext.Consumer>
                <Popconfirm
                  title="Sure to cancel?"
                  onConfirm={() => this.cancel(record.key)}
                >
                  <a>Cancel</a>
                </Popconfirm>
              </span>
            ) : (
                <a onClick={() => this.edit(record.key)}>Edit</a>
              )}
          </div>
        );
      },
    })
  }

  isEditing = (record) => {
    return record.key === this.state.editingKey;
  };

  edit(key) {
    this.setState({ editingKey: key });
  }

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          inputType: col.dataIndex === 'age' ? 'number' : 'text',
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    return (
      <Table
        components={components}
        bordered
        dataSource={this.state.data}
        columns={columns}
        rowClassName="editable-row"
      />
    );
  }
}





class PostList extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
    data: []
  };

  deleteFn = () => {
    this.setState({ loading: true });
    const { selectedRowKeys, data } = this.state;
    console.log(selectedRowKeys)
    const arr = data.filter(v => {
      return !selectedRowKeys.some(val => {
        return val === v.key
      })
    })
    console.log(arr)
    // ajax request after empty completing
    setTimeout(() => {
      this.setState({
        selectedRowKeys: [],
        loading: false,
        data: arr
      });
    }, 1000);
  }

  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }

  componentWillMount() {
    this.setState({ data: data });
  }


  render() {
    const { loading, selectedRowKeys, data } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.deleteFn}
            disabled={!hasSelected}
            loading={loading}
          >
            Delete
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={data}
          expandedRowRender={record => <p style={{ margin: 0 }}>{record.title}</p>}
          loading={loading} />
      </div>
    );
  }
}

PostList.propTypes = {
};

export default connect()(EditableTable);
