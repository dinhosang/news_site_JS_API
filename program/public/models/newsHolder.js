const NewsHolder = function(helper) {
  this.header = newsKey
  this.urlSources     = "https://newsapi.org/v2/sources?"
  this.urlEverything  = "https://newsapi.org/v2/everything?"
  this.urlHeadlines   = "https://newsapi.org/v2/top-headlines?"
  this.news = []
  this.onUpdate = null
  this.helper = helper
  this.updateCurrentlyViewing = null;
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
  helper.makeRequest(url, this, this.header)
}

NewsHolder.prototype.getSources = function(helper, dropdown) {
  helper.makeRequest(this.urlSources, dropdown, this.header)
}

NewsHolder.prototype.searchAllBy = function() {
  const searchField = document.getElementById('search-field')
  const searchText = searchField.value
  const arrayOfSplitText = searchText.trim().split(' ')
  const urlEncodedSearchText = arrayOfSplitText.join('%20')
  const url = `${this.urlEverything}q=${urlEncodedSearchText}`
  this.helper.makeRequest(url, this, this.header)
}

NewsHolder.prototype.searchHeadlineByNonSource = function (searchArea) {
  const countryDropdown   = searchArea.headlineCountrySelect.dropdown
  const categoryDropdown  = searchArea.headlineCategorySelect.dropdown

  const categorySought    = categoryDropdown.value

  const countrySoughtCode   = countryDropdown.value
  const countrySoughtName   = countryDropdown.selectedOptions[0].text

  const categorySoughtCapit = categorySought.charAt(0).toUpperCase() + categorySought.slice(1)

  const updateHash      = {headline: true}

  if(countrySoughtCode === 'default' && categorySought === 'default') {
    return
  }

  let url = this.urlHeadlines

  if(countrySoughtCode !== 'default' && categorySought !== 'default') {

    updateHash['country']   = countrySoughtName
    updateHash['category']  = categorySoughtCapit
    url += `country=${countrySoughtCode}&category=${categorySought}`
  } else if (countrySoughtCode !== 'default'){

    updateHash['country'] = countrySoughtName
    url += `country=${countrySoughtCode}`
  } else {

    updateHash['category']  = categorySoughtCapit
    url += `category=${categorySought}`
  }

  this.updateCurrentlyViewing(updateHash)
  searchArea.searchMade(updateHash)

  this.helper.makeRequest(url, this, this.header)
}

NewsHolder.prototype.setupUpdateCurrentlyViewing = function (currentlyViewing) {
  this.updateCurrentlyViewing = function(infoHash) {
    currentlyViewing.update(infoHash)
  }
}
