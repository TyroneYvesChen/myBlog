import request from '../util/request'

export function wocao(data) {
    return request({
        url: '/api/user/register',
        method: 'post',
        data: data
    })
}

export function login(data) {
    return request({
        url: '/api/user/login',
        method: 'post',
        data: data
    })
}