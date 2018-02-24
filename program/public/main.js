const main = function() {
  const jsonHelper      = new JsonHelper()

  const countryDropdown = new CountrySelectView('country-select')
  const countries       = new CountriesHolder()

  const articlesContainer  = new ArticleFlex('articles-container')

  const news              = new NewsHolder()


  countries.setupUpdate(countryDropdown, news, articlesContainer)
  countries.populateCountries(jsonHelper)

  news.setupUpdate(articlesContainer)

}

document.addEventListener('DOMContentLoaded', main)
