import { Router } from 'express'
import wocao from './controller'

const router = new Router()

router.get('/wocao', wocao.test)

export default router