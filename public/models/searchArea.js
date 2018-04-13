const SearchArea = function(fields, newsGetter, articlesContainer, helper) {

  this.requestSearchHeadlines = document.getElementById(fields.buttonByHeadline)

  this.searchByHeadlines = document.getElementById(fields.headlineSearchSection)

  this.jsonHelper       = helper
  this.articlesContainer = articlesContainer


  this.countries  = new CountriesHolder()
  this.news       = newsGetter


  this.headlineCountrySelect  = new SelectView(fields.country, this.jsonHelper)
  this.headlineCategorySelect = new SelectView(fields.category, this.jsonHelper)
  this.headlineSearchButton   = document.getElementById(fields.searchButton)
  this.resetHeadlineSearchButton = document.getElementById(fields.resetButton)

  this.currentlyViewing = new CurrentlyViewing(fields.currentlyViewing)

  this.headlineSource = new SelectView(fields.source, this.jsonHelper)
  this.headlineSource.dropdown.addEventListener('change', this.searchMade.bind(this, {source: true}))

  this.prepareSearchByButtons()
  this.prepareCurrentlyViewing()
  this.prepareSelectViews()
  this.prepareHeadlineButton()
}

SearchArea.prototype.prepareSearchByButtons = function () {
  this.requestSearchHeadlines.addEventListener('click', this.searchRequested.bind(this, this.requestSearchHeadlines))
}

SearchArea.prototype.prepareSelectViews = function () {

  this.countries.setupUpdate(this.headlineCountrySelect, this.news)
  this.countries.populateCountries(this.jsonHelper)

  this.headlineCategorySelect.populateCategoryView(HEADLINE_CATEGORIES)

  this.headlineSource.setupUpdate(this.news, this.articlesContainer)
  this.headlineSource.setupInformSearchArea(this)
}

SearchArea.prototype.prepareHeadlineButton = function () {

  this.headlineSearchButton.addEventListener('click', this.news.searchHeadlineByNonSource.bind(this.news, this))

  this.resetHeadlineSearchButton.addEventListener('click', this.resetHeadlineSearches.bind(this))
}

SearchArea.prototype.prepareCurrentlyViewing = function () {

  this.headlineCountrySelect.setupUpdateCurrentlyViewing(this.currentlyViewing)
  this.headlineSource.setupUpdateCurrentlyViewing(this.currentlyViewing)
  this.news.setupUpdateCurrentlyViewing(this.currentlyViewing)
}

SearchArea.prototype.searchRequested = function (type) {
  if(type.value === "headline") {
    this.toggleHeadlineSearch()
  }
}

SearchArea.prototype.searchMade = function (infoHash) {

  if(infoHash.headline) {

    this.toggleHeadlineSearch()
  } else if (infoHash.source) {

    this.toggleHeadlineSearch()
  }

}

SearchArea.prototype.toggleHeadlineSearch = function () {

  if(this.searchByHeadlines.style.display === 'flex') {
    this.searchByHeadlines.style.display = 'none'
  } else {
    this.searchByHeadlines.style.display = 'flex'
  }
}

SearchArea.prototype.resetHeadlineSearches = function() {

  this.headlineCountrySelect.dropdown.options[0].selected = true
  this.headlineCategorySelect.dropdown.options[0].selected = true
  this.headlineSource.dropdown.options[0].selected = true
}
