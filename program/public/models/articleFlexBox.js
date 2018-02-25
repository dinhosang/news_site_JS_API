const ArticleFlexBox = function(elementId) {
  this.flexBox = document.getElementById(elementId)
}

ArticleFlexBox.prototype.populateArticles = function(news) {
  this.flexBox.innerHTML = ''
  news.forEach(article => {
    const articleTemplate = document.createElement('article')
    const link = document.createElement('a')

    link.target = "_blank"
    link.href = article.url

    this.addTitleToLink(link, article, articleTemplate)
  })
}

ArticleFlexBox.prototype.addTitleToLink = function (link, article, template) {
  const title     = document.createElement('p')
  title.innerText = article.title
  title.classList.add('article-title')
  link.appendChild(title)

  this.addUrlImageToLink(link, article, template)
}

ArticleFlexBox.prototype.addUrlImageToLink = function (link, article, template) {
  const img   = document.createElement('img')

  img.src   = article.urlToImage
  img.alt   = 'link to article'

  link.appendChild(img)

  this.addPublisherToLink(link, article, template)
}

ArticleFlexBox.prototype.addPublisherToLink = function (link, article, template) {
  const publisher     = document.createElement('p')
  publisher.innerText = article.source.name
  publisher.classList.add('publisher')

  link.appendChild(publisher)
  template.appendChild(link)
  this.flexBox.appendChild(template)
}
