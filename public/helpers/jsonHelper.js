const JsonHelper = function() {
  this.url = null
  if(process.env.PORT){
    this.url = "https://fierce-woodland-96129.herokuapp.com"
  } else {
    this.url = "http://localhost:3000"
  }

}

JsonHelper.prototype.makeRequest = function(url, object, header) {
  const request   = new XMLHttpRequest()
  const serverUrl = `${this.url}/api/${header}?url=${url}`

  request.open("GET", serverUrl)
  request.addEventListener('load', this.convertJsonToJs.bind(request, object))

  request.send()
}

JsonHelper.prototype.convertJsonToJs = function(object) {
  if(this.status !== 200) return
  const jsonString  = this.responseText
  const result      = JSON.parse(jsonString)
  object.onUpdate(result)
}
