import express from 'express'
import db from './middleware/db'
import router from './lib/wocao/router'
import { PORT } from './config'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.all('/*', (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers && req.headers.origin ? req.headers.origin : '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie, Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true)
    console.log(req.body)
    console.log('卧槽！插入了！')
    if (req.method === 'OPTIONS') {
        res.send(200)
    } else {
        next()
    }
})

app.use('/', router)
// app.use('/', (req, res) => {
//     res.send('hello world~~~!!!')
// })
app.use('/ceshi', (req, res) => {
    res.json({
        result: 0
    })
})
app.listen(PORT, () => {
    console.log(`服务器已启动 端口号 [${PORT}]`)
})