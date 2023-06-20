import { getAppDataSource } from "../data-provider"
import { Article } from "../entities/article-entity"
const getArticle = async () => {
  const AppDataSource = await getAppDataSource()
  const articleRepository = AppDataSource.getRepository(Article)
  return articleRepository.find()
}

export {
  getArticle
}