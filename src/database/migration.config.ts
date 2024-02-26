import { User } from 'src/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';

const username = process.env.DB_USERNAME
const password: string = process.env.POSTGRES_PASSWORD
const database: string = process.env.POSTGRES_DATABASE
const host: string = process.env.POSTGRES_HOST
const port: number = parseInt(process.env.POSTGRES_PORT)
// console.log(username);

export const DatabaseDataSource: DataSourceOptions = {
  // TypeORM PostgreSQL DB Drivers
  type: 'postgres',
  host: 'postgres_db',
  port: 5432,
  username: 'demo_user',
  password: 'demo_password',
  database: 'demo_db',
  entities: [User],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: "migrations",
  synchronize: false,
};

const dataSource = new DataSource(DatabaseDataSource)
export default dataSource