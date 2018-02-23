const CountrySelectView = function(elementId) {
  this.dropdown   = document.getElementById(elementId)
  this.countries  = []
}

CountrySelectView.prototype.populateView = function(countries) {
  this.countries = countries
  this.createAllOptions()
}

CountrySelectView.prototype.createAllOptions = function() {
  this.countries.forEach(country => {
    const option = this.createOption(country.name)
    this.dropdown.appendChild(option)
  })
}

CountrySelectView.prototype.createOption = function(name) {
  const option      = document.createElement('option')
  option.innerText  = name

  return option
}
