const main = function() {
  const jsonHelper = new JsonHelper()

  const countryDropdown   = new CountrySelectView('country-select')
  const categoryDropdown  = new CountrySelectView('category-select')
  const sourceDropdown    = new CountrySelectView('source-select')
  const countries         = new CountriesHolder()


  const articlesContainer = new ArticleFlex('articles-container')

  const news              = new NewsHolder()


  countries.setupUpdate(countryDropdown, news, articlesContainer)
  countries.populateCountries(jsonHelper)

  categoryDropdown.populateCategoryView(headlineCategories, news, articlesContainer)

  sourceDropdown.setupUpdate(news, articlesContainer)

  news.getSources(jsonHelper, sourceDropdown)
  news.setupUpdate(articlesContainer)

}

document.addEventListener('DOMContentLoaded', main)
