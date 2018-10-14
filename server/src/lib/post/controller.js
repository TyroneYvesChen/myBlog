import postManager from './manager'
import { formatResult, errorResult } from '../../middleware/formatter'

const createPost = async (req, res, next) => {
    console.log('register')
    let options = req.body

    try {
        postManager.insert(options, res)
    }
    catch (e) {
        next(handlerCustomError('我擦'), 100001)
    }
}


export default {
    createPost
}