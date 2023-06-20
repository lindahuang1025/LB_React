import { getAppDataSource } from "../data-provider"
import { PositionSummary } from "../entities/position-summary-entity"

const getPositionSummary = async () => {
  const AppDataSource = await getAppDataSource()
  const positionRepository = AppDataSource.getRepository(PositionSummary)
  return positionRepository.find()
}

export {
  getPositionSummary
}
