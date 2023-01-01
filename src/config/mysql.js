const { Sequelize } = require("sequelize");
const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSLQ_HOST;

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect: "mysql",
});
const dbConnectMysql = async () => {
    try {
        await sequelize.authenticate();
        console.log("MYSQL_ESTABLISHED_CONNECTION")
    } catch (error) {
        console.log("MYSQL_ERROR_CONNECTION", error)
    }
}

module.exports = { sequelize, dbConnectMysql}