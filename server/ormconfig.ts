import { DataSource } from "typeorm";
import { dataSourceOptions } from "@/server/data-source-options";

export const connectionSource = new DataSource(dataSourceOptions);
