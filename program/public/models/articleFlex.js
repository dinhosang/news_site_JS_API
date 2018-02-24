const ArticleFlex = function(elementId) {
  this.flexBox = document.getElementById(elementId)
}

ArticleFlex.prototype.populateArticles = function(news) {
  this.flexBox.innerHTML = ''
  news.forEach(article => {
    const articleTemplate = document.createElement('article')
    const link = document.createElement('a')
    link.href = article.url

    this.addTitleToLink(link, article, articleTemplate)
  })
}

ArticleFlex.prototype.addTitleToLink = function (link, article, template) {
  const title     = document.createElement('p')
  title.innerText = article.title
  title.classList.add('article-title')
  link.appendChild(title)

  this.addUrlImageToLink(link, article, template)
}

ArticleFlex.prototype.addUrlImageToLink = function (link, article, template) {
  const img   = document.createElement('img')

  img.src   = article.urlToImage
  img.alt   = 'link to article'

  link.appendChild(img)

  this.addPublisherToLink(link, article, template)
}

ArticleFlex.prototype.addPublisherToLink = function (link, article, template) {
  const publisher     = document.createElement('p')
  publisher.innerText = article.source.name
  publisher.classList.add('publisher')

  link.appendChild(publisher)
  template.appendChild(link)
  this.flexBox.appendChild(template)
}
