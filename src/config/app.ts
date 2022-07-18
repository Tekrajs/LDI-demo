
import * as dotenv from 'dotenv'

dotenv.config({path:'./.env'})

export const API_VERSION = process.env.API_VERSION || 'v1'
export const APP_PORT = process.env.APP_PORT || 3000
export const ENVIRONMENT = process.env.NODE_ENV || 'dev'
export const IS_PRODUCTION = ENVIRONMENT === 'production'
export const LOG_DIRECTORY = process.env.LOG_DIRECTORY || './logs'
export const PAGINATION_LIMIT = process.env.PAGINATION_LIMIT || 10

