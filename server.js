const express = require('express')
const app     = express()
const path    = require('path')

const port = process.env.PORT || 3000

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.use(express.static('public'))

const server = app.listen(port, function() {
  const host = server.address().address
  const port = server.address().port

  console.log('News app listening at http://%s:%s', host, port)
})
