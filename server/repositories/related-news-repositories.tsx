import relatedNewsData from "@/server/mockData/related-news-mock.json";

const getRelatedNews = async () => {
  return relatedNewsData;
}

export {
  getRelatedNews
}
