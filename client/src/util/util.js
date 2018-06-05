//null undefined 0 NaN 返回 false
export const isEmpty = n => n || n === !!n || n === n + n && ![~n][n]

