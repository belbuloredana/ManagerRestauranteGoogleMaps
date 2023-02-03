import { Sequelize } from "sequelize";
import { sequelizeConfigProps } from "../config.js";
import { sequalizeOperationAPI } from "./operations-api.js";

const sequalizeConnection = new Sequelize("proiect_instance", "root", "test1234", sequelizeConfigProps);

/* ENTITIES */
export const Restaurants = sequalizeConnection.define("Restaurants", {
    RestaurantId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Latitude: {
        type: Sequelize.FLOAT(15, 10),
        allowNull: false,
    },
    Longitude: {
        type: Sequelize.FLOAT(15, 10),
        allowNull: false,
    }
});

export const Products = sequalizeConnection.define("Products", {
    ProductId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Price: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});

Restaurants.hasMany(Products, {
    foreignKey: "RestaurantId",
    foreignKeyConstraint: true,
    onDelete: "CASCADE"
});

/* ENTITIES */

sequalizeOperationAPI.init(sequalizeConnection);

export { sequalizeConnection };