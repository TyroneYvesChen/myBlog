/**
 * 
 * @param {*} result 
 * @param {code} 
 * 100000 默认 
 * 100001 注册失败
 * 100002 登陆失败
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