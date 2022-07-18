import express from 'express'
import { Application, Request, Response } from 'express'
import { MainRouter } from './routes'
import {API_VERSION} from './config/app'
import cors from 'cors'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(`/api`, MainRouter)

app.use(function(err: any, req: Request, res: Response,next:any) {
    res.status(err.status || 500)
    res.json({erros:{
        message: err.message,
        error :err
    }})
})

export default app