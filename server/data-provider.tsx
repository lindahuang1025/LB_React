import { DataSource } from "typeorm";
import { connectionSource } from "./ormconfig";

let AppDataSource: DataSource;
export const getAppDataSource = async (): Promise<DataSource> => {
  if (AppDataSource) {
    return AppDataSource;
  }
  AppDataSource = connectionSource;
  try {
    await AppDataSource.initialize();
    return AppDataSource;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
