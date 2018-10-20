/**
 * 
 * @param {*} result 
 * @param {*} code 
 * 100 正常 
 */
const formatResult = (result, code = 100) => {
    return {
        code,
        message: 'success',
        result
    }
}

/**
 * 
 * @param {*} result 
 * @param {code} 
 * user
 * 101 用户名为空 
 * 102 密码为空 
 * 103 该账户已存在 
 * 104 账号为空 
 * 105 密码错误
 * 
 * post
 * 201 _id不能为空
 * 202 文章不存在
 * 203 _id格式不正确
 * 204 没有id所对应的文章
 * 205 查询到文章但是未修改成功，不应该出现这情况请及时修复
 * 206 未知错误
 */
const errorResult = (result, code = 0) => {
    return {
        code,
        message: 'failed',
        result
    }
}

export {
    formatResult,
    errorResult
}