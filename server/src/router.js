import wocaoRouter from './lib/wocao/router'
import userRouter from './lib/user/router'
import postRouter from './lib/post/router'

const router = (app) => {
    app.use(wocaoRouter)
    
    app.use('/api/user', userRouter)

    app.use('/api/post', postRouter)
}

export default router