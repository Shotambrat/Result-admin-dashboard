require('dotenv').config(); // Убедитесь, что у вас установлен пакет dotenv

module.exports = {
  development: {
    client: 'pg', // Указываем, что используем PostgreSQL
    connection: {
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host:     process.env.DB_HOST,
      port:     process.env.DB_PORT || 4444,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    }
  },

  // Вы можете добавить другие окружения, такие как 'test' и 'production'
};