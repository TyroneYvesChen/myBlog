/**
 * 
 * @param {*} result 
 * @param {code} 
 * user
 * 100000 默认 
 * 100001 注册失败
 * 100002 登陆失败
 * 
 * post
 * 200001 文章添加失败
 * 200002 文章查询失败
 * 200003 文章修改失败
 */
const handlerCustomError = (message, code = 100000) => {
    const error = new Error(message)
    error.status = 400
    error.code = code
    return error
}

export {
    handlerCustomError
}