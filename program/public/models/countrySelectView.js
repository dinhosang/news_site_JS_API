const CountrySelectView = function(elementId) {
  this.dropdown = document.getElementById(elementId)
  this.items    = []
  this.jsonHelper = new JsonHelper()
  this.onUpdate = null
}

CountrySelectView.prototype.populateCountryView = function(countries, news, articleView) {
  this.items = countries
  this.createAllCountryOptions(news, articleView)
}

CountrySelectView.prototype.populateCategoryView = function(categories, news, articleView) {
  this.items = categories
  this.createAllCategoryOptions(news, articleView)
}

CountrySelectView.prototype.populateSourceView = function(result, news, articleView) {
  this.items = result.sources
  this.createAllSourceOptions(news, articleView)
}

CountrySelectView.prototype.createAllSourceOptions = function(news, articleView) {
  this.items.forEach(source => {
    const option = this.createOption(source.name.toUpperCase(), source.id)
    this.dropdown.appendChild(option)
  })

  const informNewsOfChange = function() {
    news.populateNewsSourceHead(this.jsonHelper, this.dropdown.value)
  }.bind(this)

  this.dropdown.addEventListener('change', informNewsOfChange)
}

CountrySelectView.prototype.createAllCategoryOptions = function(news, articleView) {
  this.items.forEach(category => {
    const option = this.createOption(category.toUpperCase(), category)
    this.dropdown.appendChild(option)
  })

  const informNewsOfChange = function() {
    news.populateNewsCategoryHead(this.jsonHelper, this.dropdown.value)
  }.bind(this)

  this.dropdown.addEventListener('change', informNewsOfChange)
}

CountrySelectView.prototype.createAllCountryOptions = function(news, articleView) {
  this.items.forEach(country => {
    if(searchableHeadlineCountryCodes.includes(country.alpha2Code.toLowerCase())){
      const option = this.createOption(country.name, country.alpha2Code.toLowerCase())
      this.dropdown.appendChild(option)
    }
  })

  const informNewsOfChange = function() {
    news.populateNewsCountryHead(this.jsonHelper, this.dropdown.value)
  }.bind(this)

  this.dropdown.addEventListener('change', informNewsOfChange)
  news.populateNewsCountryHead(this.jsonHelper, this.dropdown.value)
}

CountrySelectView.prototype.createOption = function(name, code) {
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

CountrySelectView.prototype.setupUpdate = function (news, articleView) {
  this.onUpdate = function(sources) {
    this.populateSourceView(sources, news, articleView)
  }.bind(this)
}
