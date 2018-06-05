import manager from './manager'

const test = async (req, res, next) => {
    // console.log(req)
    // console.log(res)
    manager.insert({
        papapa: 'suck my dick!!!',
        msg: 'kiss my ass!!!'
    })
    res.send('进来啦！')
    // next()
}

export default {
    test
}