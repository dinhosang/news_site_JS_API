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

NewsHolder.prototype.populateNewsCategoryHead = function(helper, category) {
  const url = `${this.urlHeadlines}category=${category}`
  helper.makeRequest(url, this, this.header)
}

NewsHolder.prototype.populateNewsSourceHead = function(helper, source) {
  const url = `${this.urlHeadlines}sources=${source}`
  console.log(url);
  helper.makeRequest(url, this, this.header)
}

NewsHolder.prototype.getSources = function(helper, dropdown) {
  helper.makeRequest(this.urlSources, dropdown, this.header)
}
