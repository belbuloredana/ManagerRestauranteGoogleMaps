export const databaseConfigProps = {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "test1234",
    database: "proiect_instance"
};

export const sequelizeConfigProps = {
    host: "localhost",
    dialect: "mariadb",
    dialectOptions: {
        options: {
            trustedConnection: true,
        },
    },
};