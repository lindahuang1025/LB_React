import { DataSourceOptions } from "typeorm"
import * as path from 'path';
import { User } from "./entities/user-entity"
import { Article } from "./entities/article-entity"
import { Wholelists } from "./entities/wholelists-entity"
import { PositionSummary } from "./entities/position-summary-entity"
import { RelatedNews } from "./entities/related-news-entity"
import dotenv from 'dotenv';

const envFile = '.env';
const envPath = path.resolve(__dirname, `../${envFile}`);
dotenv.config({
  path: envPath,
});

export const dataSourceOptions: DataSourceOptions =  {
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: true,
  logging: true,
  migrationsTableName: 'lb_migrations',
  entities: [
    User,
    Article,
    Wholelists,
    PositionSummary,
    RelatedNews
  ],
  subscribers: [path.join(__dirname, 'subscriber/*.ts')],
  migrations: [path.join(__dirname, 'migrations/*.ts')],
};

