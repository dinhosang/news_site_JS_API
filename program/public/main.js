const main = function() {
  const jsonHelper = new JsonHelper()

  const countryDropdown   = new SelectView('country-select')
  const categoryDropdown  = new SelectView('category-select')
  const sourceDropdown    = new SelectView('source-select')

  const searchButton  = document.getElementById('search-button')
  const countries     = new CountriesHolder()


  const articlesContainer = new ArticleFlex('articles-container')

  const news              = new NewsHolder(jsonHelper)


  countries.setupUpdate(countryDropdown, news, articlesContainer)
  countries.populateCountries(jsonHelper)

  categoryDropdown.populateCategoryView(headlineCategories, news, articlesContainer)

  sourceDropdown.setupUpdate(news, articlesContainer)

  news.getSources(jsonHelper, sourceDropdown)
  news.setupUpdate(articlesContainer)

  searchButton.addEventListener('click', news.searchAllBy.bind(news))

}

document.addEventListener('DOMContentLoaded', main)
