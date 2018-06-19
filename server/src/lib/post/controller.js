import postManager from './manager'
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
        userManager.addUser(options, res)
    }
    catch (e) {
        next(e)
    }
}


export default {
}