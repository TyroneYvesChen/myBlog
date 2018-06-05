import mongoose from 'mongoose'
import { MONGO_URL, MONGO_DB } from '../config'

mongoose.connect(`${MONGO_URL}${MONGO_DB}`)

//获取connection实例
const conn = mongoose.connection;
//创建Schema
const Schema = mongoose.Schema;
//使用Connetion监听连接状态

conn.on('connected', function (err) {
    if (err) {
        console.log('连接数据库失败：' + err);
    } else {
        console.log('连接数据库成功！');
    }
});

conn.on('error', (error) => {
    console.error('连接错误:', error)
})

export {
    mongoose,
    conn,
    Schema
}