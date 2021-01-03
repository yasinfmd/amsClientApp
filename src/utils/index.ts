/* eslint-disable no-useless-escape */
import { reactEnv } from '../statics/ApplicationConst'
import {  notification } from 'antd';
const ApplicationUtils = {
  createFloorCount: () => {
    let floorCountArray = []
    for (let i = 1; i <= 50; i++) {
      floorCountArray.push(i)
    }
    return floorCountArray
  },

  openNotification:(type:string,title:string,content:any,options?:object)=>{  
    switch(type){
      case "info":
      notification["info"]({
        message:title,
        description:content,
        ...options
      })
      return;
      case "success":
        notification["success"]({
          message:title,
          description:content,
          ...options
        })
        return
        case "error":
          notification["error"]({
            message:title,
            description:content,
            ...options
          })
          return
          case "warning":
            notification["warning"]({
              message:title,
              description:content,
              ...options
            })
            return
    }
  },
  parseJwt: (token: string) => {
    let base64Url = token.split('.')[1]
    let base64 = decodeURIComponent(
      atob(base64Url)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        })
        .join('')
    )
    return JSON.parse(base64)
  },
  imageValidator: (file: any) => {
    let accepted = ['jpg', 'jpeg', 'png']
    for (let i = 0; i < file.length; i++) {
      let index = file[i].name.lastIndexOf('.')
      let ext = file[i].name.slice(index + 1, file[i].name.length)
      let found = accepted.find((item) => {
        return item === ext
      })
      if (!found) {
        return false
      }
    }
  },
  getEnvironmentVariable: (key: string): any => {
    return process.env[reactEnv + key]
  },
  emailValidator: (email: string) => {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
  },
  readFileBase64: (file: any) => {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader()
      reader.onload = function (e: any) {
        var binaryFile = ''
        var base64File
        if (typeof reader.readAsBinaryString === 'undefined') {
          var bytes = new Uint8Array(e.target.result)
          for (var i = 0; i < bytes.byteLength; i++) {
            binaryFile += String.fromCharCode(bytes[i])
          }
          base64File = btoa(binaryFile)
        } else {
          base64File = btoa(e.target.result)
        }
        var data = {
          name: file.name,
          type: file.type != null ? file.type : file.name.split('.').pop(),
          size: file.size.toString(),
          base64: base64File
        }
        resolve(data)
      }
      if (typeof reader.readAsBinaryString !== 'undefined') {
        reader.readAsBinaryString(file)
      } else {
        reader.readAsArrayBuffer(file)
      }
    })
  }
}

export { ApplicationUtils }
