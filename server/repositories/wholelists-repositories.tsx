import { getAppDataSource } from "../data-provider"
import { Wholelists } from "../entities/wholelists-entity"

const getWholelists = async () => {
    const AppDataSource = await getAppDataSource()
    const wholeListRepository = AppDataSource.getRepository(Wholelists)
    return wholeListRepository.find()
}

export {
    getWholelists
}
