const JsonHelper = function() {

}

JsonHelper.prototype.makeRequest = function(url, object, header) {
  const request = new XMLHttpRequest()
  request.open("GET", url)
  if(header !== undefined){
    request.setRequestHeader("X-Api-Key", header)
  }
  if(url.includes('bbc-news')){
    url + `apiKey=${newsKey}`
  }
  request.addEventListener('load', this.convertJsonToJs.bind(request, object))

  request.send()
}

JsonHelper.prototype.convertJsonToJs = function(object) {
  if(this.status !== 200) return
  const jsonString  = this.responseText
  const result      = JSON.parse(jsonString)
  object.onUpdate(result)
}
