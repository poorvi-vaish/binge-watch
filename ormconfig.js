const { User } = require('./src/entity/user');
const { Movie } = require(`./src/entity/movies`);
const { DataSource } = require('typeorm');

const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;

const SCHEMA_CHANGES = process.env.SCHEMA_CHANGES;

const DB_TYPE = 'postgres';

const SOURCE_PATH = process.env.NODE_ENV === 'production' ? 'dist' : 'src';

const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  logging: SCHEMA_CHANGES,
  synchronize: SCHEMA_CHANGES,
  entities: [User, Movie],
  cli: {
    entitiesDir: 'src/entity',
  }
});

module.exports = {
  AppDataSource,
  SOURCE_PATH,
};