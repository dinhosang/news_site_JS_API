const express = require('express')
const app     = express()
const path    = require('path')
const request = require('request')

let newsKey
if(!process.env.newsKey){
  newsKey   = require('./serverSide/keys/newsKey')
} else {
  console.log(process.env.newsKey);
  console.log(process.env);
}

const port  = process.env.PORT || 3000

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/public/html/index.html'))
})

app.get('/api/countries', (req, clientRes) => {
  const url     = req.query.url
  const options = {
    url: url
  }

  const sendResponseToClient = (err, serverRes, body) => {
    if(err){
      console.log(`Error with api Request:`, err)
      clientRes.status(500)
      clientRes.send()
    }

    if(serverRes.statusCode !== 200){
      clientRes.status(serverRes.statusCode)
      clientRes.send()
    }

    clientRes.send(body)
  }

  request(options, sendResponseToClient)
})

app.get('/api/news', (req, clientRes) => {
  let apiUrl = ""
  const apiKey  = process.env.newsKey || newsKey
  const queries = Object.keys(req.query)
  queries.forEach(query => {

    if(query === "url"){
      apiUrl += req.query[query]
    } else {
      apiUrl += `&${query}=${req.query[query]}`
    }
  })

  let url
  let options

  if(apiUrl.includes('bbc-news')){
    url = `${apiUrl}apiKey=${apiKey}`
  } else {
    url = apiUrl
    options = {
      headers: {
        "X-Api-Key": apiKey
      }
    }
  }

  const sendResponseToClient = (err, serverRes, body) => {
    if(err){
      console.log(`Error with api Request:`, err)
      clientRes.status(500)
      clientRes.send()
    }

    if(serverRes.statusCode !== 200){
      clientRes.status(serverRes.statusCode)
      clientRes.send()
    }

    clientRes.send(body)
  }

  request(url, options, sendResponseToClient)
})

app.use(express.static('public'))

const server = app.listen(port, function() {
  const host = server.address().address
  const port = server.address().port

  console.log('News app listening at http://%s:%s', host, port)
})
