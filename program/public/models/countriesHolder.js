const CountriesHolder = function() {
  this.url = "https://restcountries.eu/rest/v2/all"
  this.countries  = []
  this.onUpdate   = null
}

CountriesHolder.prototype.populateCountries = function(helper) {
  helper.makeRequest(this.url, this)
}
