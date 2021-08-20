
const fs = require('fs')
const path = require('path')
const http = require('http')
const server = http.createServer((req, res)=>{
  fs.readFile(path.join(__dirname,'index.html'),(err,data)=>{
    if(err){
      throw err
    } else {
      res.end(data)
    }
  })

})
server.listen(3000,()=>{
  console.log('server is started')
})