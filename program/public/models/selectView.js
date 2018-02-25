const SelectView = function(elementId, helper) {
  this.items    = []
  this.dropdown = document.getElementById(elementId)
  this.jsonHelper = helper
  this.onUpdate   = null
  this.updateCurrentlyViewing = null
}

SelectView.prototype.populateCountryView = function(countries, news) {
  this.items = countries
  this.createAllCountryOptions(news)
}

SelectView.prototype.populateCategoryView = function(categories) {
  this.items = categories
  this.createAllCategoryOptions()
}

SelectView.prototype.populateSourceView = function(result, news, articleView) {
  this.items = result.sources
  this.createAllSourceOptions(news, articleView)
}

SelectView.prototype.createAllSourceOptions = function(news, articleView) {
  this.items.forEach(source => {
    const option = this.createOption(source.name.toUpperCase(), source.id)
    this.dropdown.appendChild(option)
  })

  const informNewsOfChange = function() {

    const infoHash = {
      headline: true,
      source: this.dropdown.selectedOptions[0].text
    }

    this.updateCurrentlyViewing(infoHash)
    news.populateNewsSourceHead(this.jsonHelper, this.dropdown.value)
    this.informSearchArea()
  }.bind(this)

  this.dropdown.addEventListener('change', informNewsOfChange)
}

SelectView.prototype.createAllCategoryOptions = function() {
  this.items.forEach(category => {
    const option = this.createOption(category.toUpperCase(), category)
    this.dropdown.appendChild(option)
  })

}

SelectView.prototype.createAllCountryOptions = function(news) {
  this.items.forEach(country => {
    if(searchableHeadlineCountryCodes.includes(country.alpha2Code.toLowerCase())){
      const option = this.createOption(country.name, country.alpha2Code.toLowerCase())
      this.dropdown.appendChild(option)
    }
  })

  this.updateCurrentlyViewing({headline: true, country: this.dropdown.selectedOptions[0].text})
  news.populateNewsCountryHead(this.jsonHelper, this.dropdown.value)
}

SelectView.prototype.createOption = function(name, code) {
  const option      = document.createElement('option')
  option.innerText  = name

  if(code !== undefined) {
    option.value = code
  }
  if(code === 'gb') {
    option.selected = "selected"
  }

  return option
}

SelectView.prototype.setupUpdate = function (news, articleView) {
  this.onUpdate = function(sources) {
    this.populateSourceView(sources, news, articleView)
  }.bind(this)
}

SelectView.prototype.setupUpdateCurrentlyViewing = function(currentlyViewing) {
  this.updateCurrentlyViewing = function(infoHash) {
    currentlyViewing.update(infoHash)
  }
}

SelectView.prototype.setupInformSearchArea = function(area) {

  this.informSearchArea = function() {
    area.resetHeadlineSearches()
  }
}
