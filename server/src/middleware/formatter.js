/**
 * 
 * @param {*} result 
 * @param {code} 
 * 100 正常 
 * 101 用户名为空 
 * 102 密码为空 
 * 103 该账户已存在 
 * 104 账号为空 
 * 105 密码错误
 */
const formatResult = (result, code = 100) => {
    return {
        status: {
            code,
            message: 'success'
        },
        result
    }
}

const errorResult = (result, code = 0) => {
    return {
        status: {
            code,
            message: 'failed'
        },
        result
    }
}

export {
    formatResult,
    errorResult
}