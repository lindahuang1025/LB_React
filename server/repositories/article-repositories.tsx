import articleData from "../mockData/article-mock"

const getArticle = async () => {
  return await articleData;
}

export {
  getArticle
}