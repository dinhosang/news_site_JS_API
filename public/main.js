const main = function() {

  const jsonHelper = new JsonHelper()


  const newsGetter = new NewsHolder(jsonHelper)
  const articlesContainer = new ArticleFlexBox('articles-container')


  const searchElements = {
    buttonByHeadline: 'view-by-headline',
    headlineSearchSection: 'search-headlines', country: 'country-select',
    category: 'category-select', source: 'source-select',
    searchButton: 'confirm-head-search', resetButton: 'reset-head-search',
    currentlyViewing: "currently-viewing"
  }
  const searchArea = new SearchArea(searchElements, newsGetter, articlesContainer, jsonHelper)


  newsGetter.getSources(jsonHelper, searchArea.headlineSource)
  newsGetter.setupUpdate(articlesContainer)
}

document.addEventListener('DOMContentLoaded', main)
