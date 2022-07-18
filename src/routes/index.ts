import { Router } from 'express'
import { startList } from './startlist/index'

const router: Router = Router();

router.use('/startlist', startList)

router.use('/', async (req, res) => {
    res.end("Lets Do It Demo")
})

export const MainRouter: Router = router