const CountrySelectView = function(elementId) {
  this.dropdown   = document.getElementById(elementId)
  this.countries  = []
}

CountrySelectView.prototype.populateView = function(countries, news, articleView) {
  this.countries = countries
  this.createAllOptions(news, articleView)
}

CountrySelectView.prototype.createAllOptions = function(news, articleView) {
  this.countries.forEach(country => {
    if(searchableHeadlineCountryCodes.includes(country.alpha2Code.toLowerCase())){
      const option = this.createOption(country.name, country.alpha2Code.toLowerCase())
      this.dropdown.appendChild(option)
    }
  })
  const jsonHelper = new JsonHelper()

  const informNewsOfChange = function() {
    news.populateNewsCountryHead(jsonHelper, this.dropdown.value)
  }.bind(this)

  this.dropdown.addEventListener('change', informNewsOfChange)
  news.populateNewsCountryHead(jsonHelper, this.dropdown.value)
}

CountrySelectView.prototype.createOption = function(name, code) {
  const option      = document.createElement('option')
  option.innerText  = name
  option.value      = code
  if(code === 'gb') {
    option.selected = "selected"
  }

  return option
}
