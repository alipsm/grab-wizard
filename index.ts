import DiContainer from "./lib/scripts/di/module";
const axios = require('axios');
const {string} = require("flatted")
const util = require('util');
const {grabPath,grabValue} = DiContainer




async function getData() {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    // const stringified = JSON.stringify(response, getCircularReplacer());
    const data = response
    console.time("start")
    // console.log('data', data)
    
    // استفاده از flatted.parse برای حذف Circular references
    // const removeCircule = flatted.string(data, { circularAsUndefined: true });
    
    // const removeCircule = removeCircularReferences(data)s
    
    // console.log('convertToJson',(data.request.agent._sessionCache.map["jsonplaceholder.typicode.com:443:::::::::::::::::::::"].data));



    const myObj={
      data1:grabValue(data, "request._consuming"),
      data2:grabValue(data, "_requestBodyBuffers"),
      data3:grabValue(data, "request._options"),
      4:grabPath(data, "_options"),
      5:grabValue(data, "_currentRequest"),
      6:grabValue(data, "_writableState"),
      7:grabValue(data, "_redirects"),
      8:grabValue(data, "_redirectCount"),
      9:grabValue(data, "_redirectable._redirectCount"),
      10:grabValue(data, "_sessionCache"),
      11:grabValue(data, "statusMessage"),
      12:grabValue(data, "_dumped"),
      13:grabValue(data, "defaultPort"),
      14:grabValue(data, "allowHalfOpen"),
      15:grabValue(data, "_closeAfterHandlingError"),
      16:grabValue(data, "timeout"),
      17:grabValue(data, "servername"),
      18:grabValue(data, "_hasBody"),
      19:grabValue(data, "writable"),
      20:grabValue(data, "url"),
      21:grabValue(data, "xsrfHeaderName"),
      22:grabValue(data, "xsrfHeaderName"),
      nested:{
        data1:grabValue(data, "request._consuming"),
        data2:grabValue(data, "_requestBodyBuffers"),
        data3:grabValue(data, "request._options"),
        4:grabPath(data, "_options"),
        5:grabValue(data, "_currentRequest"),
        6:grabValue(data, "_writableState"),
        7:grabValue(data, "_redirects"),
        8:grabValue(data, "_redirectCount"),
        9:grabValue(data, "_redirectable._redirectCount"),
        10:grabValue(data, "_sessionCache"),
        11:grabValue(data, "statusMessage"),
        12:grabValue(data, "_dumped"),
        13:grabValue(data, "defaultPort"),
        14:grabValue(data, "allowHalfOpen"),
        15:grabValue(data, "_closeAfterHandlingError"),
        16:grabValue(data, "timeout"),
        17:grabValue(data, "servername"),
        18:grabValue(data, "_hasBody"),
        19:grabValue(data, "writable"),
        20:grabValue(data, "url"),
        21:grabValue(data, "xsrfHeaderName"),
        22:grabValue(data, "xsrfHeaderName"),
      }
    }
    console.log('myObj', myObj)
  // console.log("Grab Value is: ", grabValue(data, "request._consuming")) 
  // console.log("Grab Value is: ", grabValue(data, "_requestBodyBuffers"))
  // console.log("Grab Value is: ", grabValue(data, "request._options")) 
  // console.log("Grab Value is: ", grabPath(data, "_options")) 
  // console.log("Grab Value is: ", grabValue(data, "_currentRequest"))
  // console.log("Grab Value is: ", grabValue(data, "_writableState"))
  // console.log("Grab Value is: ", grabValue(data, "_redirects"))
  // console.log("Grab Value is: ", grabValue(data, "_redirectCount"))
  // console.log("Grab Value is: ", grabValue(data, "_redirectable._redirectCount"))
  // console.log("Grab Value is: ", grabValue(data, "_sessionCache"))
  // console.log("Grab Value is: ", grabValue(data, "statusMessage")) // BUG: long time
  // console.log("Grab Value is: ", grabValue(data, "_dumped"))
  // console.log("Path is: ", grabValue(data, "defaultPort"))
  // console.log("Path is: ", grabValue(data, "allowHalfOpen"))
  // console.log("Path is: ", grabValue(data, "_closeAfterHandlingError"))
  // console.log("Path is: ", grabValue(data, "timeout"))
  // console.log("Path is: ", grabValue(data, "servername"))
  // console.log("Path is: ", grabValue(data, "_hasBody"))
  // console.log("Path is: ", grabValue(data, "writable"))
  // console.log("Path is: ", grabValue(data, "url"))
  // console.log("Path is: ", grabValue(data, "xsrfHeaderName"))
  // console.log("Path is: ", grabValue(data, "adapter"))





    console.timeEnd("start");
  } catch (error) {
    console.error(error.message);
    console.error(error.stack);
  }
}

getData()

export {
  grabPath,
  grabValue
}








// const ignored= ["freeSockets","_sessionCache"] Buffer props

  // console.log("Grab Value is: ", grabValue(data, "_requestBodyBuffers"))
  // console.log("Grab Value is: ", grabValue(data, "request._consuming")) 
  // console.log("Grab Value is: ", grabValue(data, "request._options")) 
  // console.log("Grab Value is: ", grabPath(data, "_options")) 
  // console.log("Grab Value is: ", grabValue(data, "_currentRequest"))
  // console.log("Grab Value is: ", grabValue(data, "_writableState"))
  // console.log("Grab Value is: ", grabValue(data, "_redirects"))
  // console.log("Grab Value is: ", grabValue(data, "_redirectCount"))
  // console.log("Grab Value is: ", grabValue(data, "_redirectable._redirectCount"))


  // console.log("Grab Value is: ", grabValue(data, "_sessionCache"))
  // console.log("Grab Value is: ", grabValue(data, "statusMessage")) // BUG: long time
  // console.log("Grab Value is: ", grabValue(data, "_dumped"))
  // console.log("Path is: ", grabValue(data, "defaultPort"))
  // console.log("Path is: ", grabValue(data, "allowHalfOpen"))
  // console.log("Path is: ", grabValue(data, "_closeAfterHandlingError"))
  // console.log("Path is: ", grabValue(data, "timeout"))
  // console.log("Path is: ", grabValue(data, "servername"))
  // console.log("Path is: ", grabValue(data, "_hasBody"))
  // console.log("Path is: ", grabValue(data, "writable"))
  // console.log("Path is: ", grabValue(data, "url"))
  // console.log("Path is: ", grabValue(data, "xsrfHeaderName"))
  // console.log("Path is: ", grabValue(data, "adapter"))