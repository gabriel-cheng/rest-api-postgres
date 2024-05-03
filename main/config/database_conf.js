import dotenv from "dotenv";
import Sequelize from "sequelize";

dotenv.config();

export default new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USERNAME,
    process.env.DATABASE_PASSWORD,
    {
        "host": "localhost",
        "dialect": "postgres"
    }
);
