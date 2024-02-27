/* eslint-disable prettier/prettier */
import { User } from 'src/user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
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