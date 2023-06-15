import "reflect-metadata"
import { DataSource, DataSourceOptions } from "typeorm"
import { User } from "./entities/user-entity"

const dataSource: DataSourceOptions = {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  entities: [
    User
  ],
  subscribers: [],
  migrations: [],
}

let AppDataSource: DataSource;
export const getAppDataSource = async (): Promise<DataSource> => {
  if(AppDataSource){
    return AppDataSource;
  }
  AppDataSource = new DataSource(dataSource)
  try {
    await AppDataSource.initialize()
    return AppDataSource
  } catch (err) {
    console.error(err)
    throw err;
  }
}
