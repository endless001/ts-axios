import {AxiosRequestConfig} from './types'
import xhr from './xhr'

async function axios(config:AxiosRequestConfig){
    await xhr(config)
}

export default axios
