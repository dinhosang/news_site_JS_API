const NewsHolder = function() {
  this.header = newsKey
  this.urlSources     = "https://newsapi.org/v2/sources?"
  this.urlEverything  = "https://newsapi.org/v2/everything?"
  this.urlHeadlines   = "https://newsapi.org/v2/top-headlines?"
  this.news = []
  this.onUpdate = null
}

NewsHolder.prototype.populateNewsCountryHead = function (helper, country) {
  const url = `${this.urlHeadlines}country=${country}`
  helper.makeRequest(url, this, this.header)
}

NewsHolder.prototype.setupUpdate = function(view) {
  this.onUpdate = function(result) {
    view.populateArticles(result.articles)
  }
}
