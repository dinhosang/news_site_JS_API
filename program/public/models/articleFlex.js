const ArticleFlex = function(elementId) {
  this.flexBox = document.getElementById(elementId)
}

ArticleFlex.prototype.populateArticles = function(news) {
  this.flexBox.innerHTML = ''
  news.forEach(article => {
    const articleTemplate = document.createElement('article')
    this.addTitleToTemplate(articleTemplate, article)
  })
}

ArticleFlex.prototype.addTitleToTemplate = function (template, article) {
  const title     = document.createElement('p')
  title.innerText = article.title
  title.classList.add('article-title')
  template.appendChild(title)

  this.addUrlImageToTemplate(template, article)
}

ArticleFlex.prototype.addUrlImageToTemplate = function (template, article) {
  const img   = document.createElement('img')
  const link  = document.createElement('a')


  img.src   = article.urlToImage
  img.alt   = 'link to article'

  link.href = article.url
  link.appendChild(img)
  template.appendChild(link)

  this.addPublisherToTemplate(template, article)
}

ArticleFlex.prototype.addPublisherToTemplate = function (template, article) {
  const publisher     = document.createElement('p')
  publisher.innerText = article.source.name
  publisher.classList.add('publisher')

  template.appendChild(publisher)
  this.flexBox.appendChild(template)
}
