
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
var opn = require('opn');

// opens the url in the default browser
opn('http://localhost:3000?startwith=УПРАЖНЕНИЯ НА ШЕЮ&externalcall=НА_____ЗАПЛАНИРОВАНА ТРЕНИРОВКА', {app: 'chrome'});
//opn('http://sindresorhus.com');