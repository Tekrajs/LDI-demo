import ListData from '../startlistentries.json'
import _Lists from '../interfaces/lists'
import fs from 'fs'

export const getLists = (offset:any, limit:any, filters:_Lists) => {
    
    let _listData = Object.assign([],ListData)

    let _currentData = []

    if(Object.keys(filters).length){
        console.log("inside filter")

        _listData = _listData.filter( (d:any) => {

            for(const [key, value] of Object.entries(filters)){

                if(value && ! (d[key]?.toLowerCase().includes(value.toLowerCase()))){
                    return false
                }
                return true
            }
        })

    }

    if(offset && limit){
        console.log(_listData.slice(Number(offset),Number(limit)))
        if(_listData.length > Number(offset)){
            _currentData = _listData.slice(Number(offset),Number(offset) + Number(limit))
        }else{
            _currentData = _listData.slice(0, Number(limit))
        }
    }
    console.log(_currentData.length)
    return _currentData

}

export const addLists = (newData:_Lists) => {
    let data:_Lists[] = Object.assign([],ListData)
    data.push(newData)
    fs.writeFileSync('./src/startlistentries.json', JSON.stringify(data), 'utf8')
    return newData
}