const JsonHelper = function() {

}

JsonHelper.prototype.makeRequest = function(url, object) {
  const request = new XMLHttpRequest()
  request.open("GET", url)

  request.addEventListener('load', this.convertJsonToJs.bind(request, object))

  request.send()
}

JsonHelper.prototype.convertJsonToJs = function(object) {
  if(this.status !== 200) return
  const jsonString  = this.responseText
  const result      = JSON.parse(jsonString)
  object.onUpdate(result)
}
