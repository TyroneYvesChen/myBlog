import userManager from './manager'
import { handlerCustomError } from '../../middleware/error'
import { formatResult, errorResult } from '../../middleware/formatter'

const register = async (req, res, next) => {
    console.log('register')
    let options = req.body,
        { username, password } = options

    if (!username) {
        return res.json(errorResult('用户名为空', 101))
    }
    else if (!password) {
        return res.json(errorResult('密码为空', 102))
    }

    try {
        userManager.createUser(options, res)
    }
    catch (e) {
        next(handlerCustomError('注册失败'), 100001)
    }
}

const login = async (req, res, next) => {
    console.log('login')
    let options = req.body,
        { account, password } = options

    if (!account) {
        return res.json(errorResult('账号为空', 104))
    }
    else if (!password) {
        return res.json(errorResult('密码为空', 102))
    }

    try {
        const result = await userManager.findOneByAccount(account)
        if (result.password !== password) {
            return res.json(errorResult('密码错误', 105))
        }
        else {
            return res.json(formatResult('登陆成功'))
        }
    }
    catch (e) {
        next(handlerCustomError('登陆失败', 100002))
    }
}


export default {
    register,
    login
}