import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database_conf.js";

export const User = sequelize.define(
    "User",
    {
        "id": {
            "type": DataTypes.INTEGER,
            "autoIncrement": true,
            "primaryKey": true
        },
        "username": {
            "type": DataTypes.STRING
        },
        "email": {
            "type": DataTypes.STRING
        }
    },
    {
        sequelize,
        "modelName": "user"
    }
);
