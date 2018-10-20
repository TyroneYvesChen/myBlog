import Model from './model'
import { formatResult, errorResult } from '../../middleware/formatter'

const insert = async (options = {}) => {
    const result = await Model.create(options)
    console.log(result, '新建一篇文章')
    return result
}

const findOneById = async (id) => {
    // const result = await Model.findOne({ _id: id })
    const result = await Model.findById(id)
    console.log(result, '根据id查找对应文章')
    return result
}

const updateOne = async (data) => {
    // const result = await Model.findOne({ _id: id })
    const conditions = { _id: data._id } // 查询条件
    const options = { 
        // upsert: true // 如果没有则会插入一条新的
     } 
    const result = await Model.update(conditions, data, options)

    console.log(result, '根据id更新文章')
    return result
}

export default {
    insert,
    findOneById,
    updateOne
}