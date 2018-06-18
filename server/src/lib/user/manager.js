import Model from './model'
import { formatResult, errorResult } from '../../middleware/formatter'

const insert = async (options = {}) => {
    const result = await Model.create(options)
    console.log(result, '注册')
    return result
}

const findOneByAccount = async (account) => {
    const result = await Model.findOne({ account })
    console.log(result, '根据账号查找是否已注册')
    return result
}


const addUser = async (options, res) => {
    let result = await findOneByAccount(options.account)
    // next(handlerCustomError(10101, 'wocao'))
    if (!result) {
        const insertResult = await insert(options)
        return res.json(formatResult('注册成功'))
    }
    else {
        return res.json(errorResult('该账户已存在', 103))
    }
}

export default {
    insert,
    findOneByAccount,
    addUser
}