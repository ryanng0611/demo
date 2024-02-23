import { DataSource, DataSourceOptions } from 'typeorm';
const username:string = process.env.POSTGRES_USERNAME;
const password: string = process.env.POSTGRES_PASSWORD;
const database: string = process.env.POSTGRES_DATABASE;
const host: string = process.env.POSTGRES_HOST;
const port: number = parseInt(process.env.POSTGRES_PORT);
console.log(port);
export const DatabaseDataSource: DataSourceOptions = {
  // TypeORM PostgreSQL DB Drivers
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: ['dist/user/entities/user.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: "user_migrations",
  synchronize: false,
};

const dataSource = new DataSource(DatabaseDataSource)
export default dataSource