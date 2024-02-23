import { DataSource, DataSourceOptions } from 'typeorm';
export const dbdatasource: DataSourceOptions = {
  // TypeORM PostgreSQL DB Drivers
  type: 'postgres',
  host: 'postgres_db',
  port: 5432,
  username: 'demo_user',
  password: 'demo_password',
  database: 'demo_db',
  entities: [],
  synchronize: false,
};

const dataSource = new DataSource(dbdatasource)
export default dataSource