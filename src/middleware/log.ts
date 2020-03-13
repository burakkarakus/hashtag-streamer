import { Request, Response } from 'express'

const logMiddleware = (req: Request, resp: Response, next) => {

    console.log('Request logged:', req.method, req.path)
    next()
}

export default logMiddleware