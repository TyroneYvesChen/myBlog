/**
 * 扁平化树状结构 
 * IN： [{a:1,children:[{a:2}]}]
 * OUT： [{a:1},{a:2}]
 * 调用： flatten(a, ['a'])
 */
export function flatten(data, keys, level = 0) {
    return data.reduce((arr, x) => [
        ...arr,
        keys.reduce((o, k) => (o[k] = x[k], o), { level }),
        ...flatten(x.children || [], keys, level + 1),
    ], [])
}