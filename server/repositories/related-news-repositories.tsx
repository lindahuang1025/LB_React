import relatedNewsData from "../mockData/related-news-mock"

const getRelatedNews = async () => {
  return await relatedNewsData;
}

export {
  getRelatedNews
}
