import postManager from './manager'
import { handlerCustomError } from '../../middleware/error'
import { formatResult, errorResult } from '../../middleware/formatter'
import { isObjectId } from '../../middleware/util'

const createPost = async (req, res, next) => {
    console.log('createPost')

    try {
        postManager.insert(options, res)
        res.json(formatResult('文章添加成功'))
    }
    catch (e) {
        next(handlerCustomError(`文章添加失败${e.message}`), 200001)
    }
}

const findPostById = async (req, res, next) => {
    console.log('findPostById')
    const options = req.body
    const { _id } = options

    if (!_id) {
        return res.json(errorResult('_id不能为空', 201))
    }
    else if (!isObjectId(_id)){
        return res.json(errorResult('_id格式不正确', 203))
    }
    

    try {
        const result = await postManager.findOneById(_id)
        if (!result) {
            return res.json(errorResult('文章不存在', 202))
        }
        else {
            return res.json(formatResult(result))
        }
    }
    catch (e) {
        next(handlerCustomError(`文章查询失败：${e.message}`, 200002))
    }
}

const updatePost = async (req, res, next) => {
    console.log('updatePost')
    const options = req.body
    const { _id } = options

    if (!_id) {
        return res.json(errorResult('_id不能为空', 201))
    }
    else if (!isObjectId(_id)){
        return res.json(errorResult('_id格式不正确', 203))
    }

    try {
        const result = await postManager.updateOne(options)
        const {n, nModified, ok} = result
        if (n === 0){
            return res.json(errorResult('_id未查询到对应的文章', 204))
        }
        else if (nModified === 0){
            return res.json(errorResult('查询到文章但是未修改成功，不应该出现这情况请及时修复', 205))
        }
        else if (n === 1 && nModified === 1 && ok === 1) {
            return res.json(formatResult('文章修改成功'))
        }
        else {
            return res.json(errorResult('未知错误', 206))
        }
    }
    catch (e) {
        next(handlerCustomError(`文章修改失败：${e.message}`, 200003))
    }
    
}


export default {
    createPost,
    findPostById,
    updatePost
}