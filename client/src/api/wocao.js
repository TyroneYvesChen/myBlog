import request from '../util/request'

export function wocao(data) {
    return request({
        url: '/ceshi',
        method: 'post',
        data: data
    })
}