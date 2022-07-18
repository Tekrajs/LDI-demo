import _Lists from '../interfaces/lists'
import {PAGINATION_LIMIT} from '../config/app'
import {getLists, addLists} from '../models/Lists'

export default class ListControllers {
   
    lists:_Lists[]

    constructor(){

    }

    async index(offset:any, limit:any, filters:any){
        return getLists(offset || 0, limit || PAGINATION_LIMIT, filters)

    }

    async store(data:_Lists) {
        return addLists(data)
    }

    async update() {

    }

    async delete() {

    }

}