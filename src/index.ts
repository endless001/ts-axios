import {AxiosRequestConfig, AxiosPromise, AxiosResponse} from './types'
import xhr from './xhr'
import { buildURL } from './helpers/url'
import { transformRequest, transformResponse } from './helpers/data'
import { processHeaders } from './helpers/headers'


function axios(config:AxiosRequestConfig):AxiosPromise{
     processConfig(config)
     return xhr(config).then(res => {
          return transformResponseData(res)
        })
 }

function processConfig(config:AxiosRequestConfig):void{
     config.url = transformURL(config)
     config.headers = transfromHeaders(config)
     config.data = transformRequestData(config)
}

function transformURL(config:AxiosRequestConfig):string{
     const{url,params} = config
     return buildURL(url,params)
}
function transfromHeaders(config:AxiosRequestConfig){
     const {headers = {},data} = config
     return processHeaders(Headers,data)
}
function transformRequestData(config:AxiosRequestConfig):any{
     return transformRequest(config)
}
function transformResponseData(res:AxiosResponse):AxiosResponse{
     res.data = transformResponse(res.data)
     return res
}

export default axios
