import { getAppDataSource } from "../data-source"
import { User } from "../entities/user-entity"

const getAllUser = async () => {
  const AppDataSource = await getAppDataSource()
  const userRepository = AppDataSource.getRepository(User)
  return userRepository.find()
}

const addUser = async (user: User) => {
  const AppDataSource = await getAppDataSource()
  const userRepository = AppDataSource.getRepository(User)
  await userRepository.save(user)
}

const updateUser = async (user: User) => {
  const AppDataSource = await getAppDataSource()
  await AppDataSource
    .createQueryBuilder()
    .update(User)
    .set(user)
    .where("id = :id", { id: user.id })
    .execute()
}

const deleteUserById = async (id: number) => {
  const AppDataSource = await getAppDataSource()
  await AppDataSource
  .createQueryBuilder()
  .delete()
  .from(User)
  .where("id = :id", { id: id })
  .execute()
}

const getUserById = async (id: number) => {
  const AppDataSource = await getAppDataSource()
  return await AppDataSource
    .getRepository(User)
    .createQueryBuilder("user")
    .where("user.id = :id", { id: id })
    .getOne()
}

export {
  getAllUser,
  addUser,
  updateUser,
  deleteUserById,
  getUserById
}
