import { DataSource } from "typeorm";
import { dataSourceOptions } from "./data-source-options";

export const connectionSource = new DataSource(dataSourceOptions);
