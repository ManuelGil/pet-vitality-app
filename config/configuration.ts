export default () => ({
  app: {
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  database: {
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DATABASE,
    logging: process.env.DATABASE_LOGGING || false,
  },
});
