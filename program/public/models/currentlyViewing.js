const CurrentlyViewing = function(elementId) {
  this.pagePara   = document.getElementById(elementId)
  this.startPoint = "Currently Viewing: "
}

CurrentlyViewing.prototype.update = function (infoHash) {
  let resultString = this.startPoint

  if(infoHash.headline){
    resultString += "Headlines by "
    this.addHeadlineDetails(resultString, infoHash)
  } else {
    resultString += "All Articles by "
  }

}

CurrentlyViewing.prototype.addHeadlineDetails = function(resultString, infoHash) {
  if(infoHash.source !== undefined) {
    resultString += `Source - ${infoHash.source}`
  } else if(infoHash.country && infoHash.category){
    resultString += `Country - ${infoHash.country} & Category - ${infoHash.category}`
  } else if (infoHash.country) {
    resultString += `Country - ${infoHash.country}`
  } else {
    resultString += `Category - ${infoHash.category}`
  }

  this.pagePara.innerText = resultString
}
