import {Router, Request, Response} from 'express'
import {validate} from '../../helpers/validate'
import ListController from '../../controllers/ListController'

const router: Router = Router()

router.get('/', async(req:Request, res:Response, next)=>{
    let {limit, offset} = req.query
    let {filters} = req.body
    const lists = new ListController()
    return res.status(200).json({
        success:true,
        data: await lists.index(offset, limit, filters)
    })
})

router.post('/', async(req:Request, res:Response, next)=>{
    if(validate(req.body)){
        const lists = new ListController()
        return res.status(200).json({
            success: true,
            data: await lists.store(req.body)
        })
    }
})

export const startList: Router  = router