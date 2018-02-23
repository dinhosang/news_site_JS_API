const main = function() {
  const countryDropdown = new CountrySelectView('country-select')
  const countries       = new CountriesHolder()
  const jsonHelper      = new JsonHelper()

  countries.onUpdate = function(countries) {
    countryDropdown.populateView(countries)
  }

  countries.populateCountries(jsonHelper)

}

document.addEventListener('DOMContentLoaded', main)
