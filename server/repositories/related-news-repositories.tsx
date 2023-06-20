import { getAppDataSource } from "../data-provider"
import { RelatedNews } from "../entities/related-news-entity"

const getRelatedNews = async () => {
  const AppDataSource = await getAppDataSource()
  const newsRepository = AppDataSource.getRepository(RelatedNews)
  return newsRepository.find()
}

export {
  getRelatedNews
}
