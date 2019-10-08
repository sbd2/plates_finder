const config = {
  database: process.env.DB,
  database_user: process.env.DB_USER,
  database_pass: process.env.DB_PASS,
  port: process.env.PORT || 5000,
  logging: ''
};

module.exports = config;