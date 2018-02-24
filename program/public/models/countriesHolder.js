const CountriesHolder = function() {
  this.url = "https://restcountries.eu/rest/v2/all"
  this.countries  = []
  this.onUpdate   = null
}

CountriesHolder.prototype.populateCountries = function(helper) {
  helper.makeRequest(this.url, this)
}

CountriesHolder.prototype.setupUpdate = function(dropdown, news, articleView) {
  this.onUpdate = function(countries) {
    dropdown.populateView(countries, news, articleView)
  }
};
