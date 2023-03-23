module.exports = {
  HOST: "localhost",
  USER: "cybero",
  PASSWORD: "password",
  DB: "cybero",
  dialect: "mysql",
  pool: {
    max: 15,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
