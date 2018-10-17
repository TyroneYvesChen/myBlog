import { Router } from 'express'
import postController from './controller'

const router = new Router()

router.post('/createPost', postController.createPost)
router.post('/findPostById', postController.findPostById)
router.post('/updatePost', postController.updatePost)

export default router