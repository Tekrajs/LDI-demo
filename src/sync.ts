import {schedule} from 'node-cron'
import https from 'https'
import fs from 'fs'
import logger from './utilities/logger'

async function init(){

    const options = {
        hostname: 'ldt-tech-test.herokuapp.com',
        port: 443,
        path:'/api/startlistentries',
        method: 'GET'
    }
        
    return new Promise( (resolve, reject) => {

        let data = ''

        const req = https.request(options, res => {
            res.on('data', d => {
                data += d
            })

            res.on('end', () => {
                fs.writeFileSync('./src/startlistentries.json', data, 'utf8')
                resolve(true)
            })

        })

        req.on('error', error => {
            reject(error)
        })

        req.end()

    } )

}

init().then( ()=>{
}).catch( e => logger.error(e) )

/**
 * Schedule can be used to udpate the json file
 * considering the data will be updated
 */

// schedule('*/5 * * * *', async () => {
//     console.log('running cron')
//     await init()
// })

