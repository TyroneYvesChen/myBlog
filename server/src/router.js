import wocaoRouter from './lib/wocao/router'
import userRouter from './lib/user/router'

const router = (app) => {
    app.use(wocaoRouter)
    app.use('/api/user', userRouter)
}

export default router