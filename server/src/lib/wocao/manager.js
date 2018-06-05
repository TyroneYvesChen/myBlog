import Model from './model'

const insert = async (options = {}) => {
    const result = await Model.create(options)
    console.log(result, 'result.....................')
    return result
}

export default {
    insert
}