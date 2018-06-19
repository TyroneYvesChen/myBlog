import axios from 'axios'
import store from '../../store/store'
import storage from '../storage'
import * as types from './config'


let qs = require('qs')

//超时拦截/报错 根据返回值判断/请求失败了 是否再次请求/超过5次 自动断掉


const baseURL = "http://localhost:8888"

let CancelToken = axios.CancelToken,
    source = CancelToken.source()


let httpServer = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    // 'Content-Type': 'application/form-data'
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Type': 'application/json',
    // 'Accept': 'application/json'
  },
  transformRequest: [function (data) {
    // return qs.stringify(data);
    return data;
  }],
  transformResponse: [function (data) {
    return data;
  }],
  cancelToken: source.token
});

httpServer.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  //需要在头部加一对键值{router:xxx}与对应router键值相同

  let params = config.data || config.params,  //传参
    router = params.router,                   //需要在响应头header加router字段及相应内容
    method = config.method                   //请求方式：post || get

  let methodObj = {
    "post": () => {
      params = qs.stringify(params)
      config.data = params
    },
    "get": () => {
      config.params = params
    }
  }

  console.log(config.data)

  params && router && (config.headers.router = router)

  //判断session中是否存在token，id等，并加在对应位置。
  Object.keys(types).forEach((key) => {
    let getKey = storage.session.get(types[key])
    getKey && (params[types[key]] = getKey)
  });

  methodObj[method]()


  //记录请求数 ++
  store.dispatch("httpCounts",true)

  return config;
}, function (error) {

  //记录请求数 --
  store.dispatch("httpCounts",false)
  return Promise.reject(error);
});

// 添加响应拦截器
httpServer.interceptors.response.use(function (response) {
  // 对响应数据做点什么

  let data = JSON.parse(response.data)

  //判断data中是否存在对应key，并加存入session。
  Object.keys(types).forEach((key) => {
    let dataKey = data[types[key]]
    dataKey && storage.session.set(types[key], dataKey)
  });

  response.data = data

  //记录请求数 --
  store.dispatch("httpCounts",false)

  return data;
}, function (error) {
  // 返回状态码不为200时候的错误处理

  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误'
        break

      case 401:
        error.message = '未授权，请登录'
        break

      case 403:
        error.message = '拒绝访问'
        break

      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`
        break

      case 408:
        error.message = '请求超时'
        break

      case 500:
        error.message = '服务器内部错误'
        break

      case 501:
        error.message = '服务未实现'
        break

      case 502:
        error.message = '网关错误'
        break

      case 503:
        error.message = '服务不可用'
        break

      case 504:
        error.message = '网关超时'
        break

      case 505:
        error.message = 'HTTP版本不受支持'
        break

      default:
    }
  }

  //记录请求数 --
  store.dispatch("httpCounts",false)
  return Promise.reject(error);
});



export default httpServer
