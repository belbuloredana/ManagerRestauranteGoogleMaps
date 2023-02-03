import { Products, Restaurants } from "./sync.js"

/* INIT SEQ */
async function sequelizeAuth(sequalizeConnection) {
    try {
        await sequalizeConnection.authenticate();
        console.log("Sequelize has succsesfully connected to the database!");
    }
    catch (err) {
        console.error(`There was an error connectiong to the database: ${err}`)
    }
}

async function sequelizeSync(sequalizeConnection) {
    try {
        await sequalizeConnection.sync({ force: true, alter: true })
        console.log("Sync completed!");
    }
    catch (err) {
        console.error(`Sync failed: ${err}`)
    }

}

async function executeInitialDatabasePopulation() {
    try {
        await Restaurants.create({
            Name: "Sciccheria",
            Address: "Bulevardul Pipera 46, Voluntari 077190",
            Latitude: 44.5087079,
            Longitude: 26.1363185,
        });
        await Restaurants.create({
            Name: "Nor Sky Casual Restaurant",
            Address: "Str. Barbu Vacarescu 201, Bucuresti 077190",
            Latitude: 44.4780186,
            Longitude: 26.1001267,
        });

        await Products.create({
            Name: "Desert 1",
            Price: 56.5,
            RestaurantId: 1,
        });

        await Products.create({
            Name: "MicDejun 1",
            Price: 68.99,
            RestaurantId: 1,
        });

        await Products.create({
            Name: "MicDejun 1",
            Price: 75.99,
            RestaurantId: 2,
        });

    } catch (err) {
        console.error(`There was a problem populating the database: ${err}`);
    }
}

async function sequalizeInit(sequalizeConnection) {
    await sequelizeAuth(sequalizeConnection);
    await sequelizeSync(sequalizeConnection);
    await executeInitialDatabasePopulation();
}



/* INIT SEQ */

async function getRestaurants() {
    try {
        return await Restaurants.findAll();

    }
    catch (err) {
        console.log(err);
    }
}

async function createRestaurant(restaurant) {
    try {
        await Restaurants.create({
            Name: restaurant.Name,
            Address: restaurant.Address,
            Latitude: restaurant.Latitude,
            Longitude: restaurant.Longitude,
        });
    }
    catch (err) {
        throw err;
    }
}

async function deleteRestaurant(restaurantId) {
    try {
        const record = await Restaurants.findByPk(restaurantId);
        if (record) await record.destroy();
    } catch (err) {
        throw err;
    }
}

async function updateRestaurant(restaurantId, restaurant) {
    try {
        const record = await Restaurants.findByPk(restaurantId);
        if (record) {
            await record.update({
                Name: restaurant.Name,
                Address: restaurant.Address,
                Latitude: restaurant.Latitude,
                Longitude: restaurant.Longitude,
            });
        }
    } catch (err) {
        throw err;
    }
}

async function getRestaurantsWithProductsBy(restaurantId) {
    try {
        return await Restaurants.findAll({
            include: [{
                model: Products,
                where: { restaurantId: restaurantId },
            },
            ],
        });

    }
    catch (err) {
        console.error(`Error while retrieving data:${err}`);
    }

}

export const sequalizeOperationAPI = {
    init: sequalizeInit,
    getRestaurants: getRestaurants,
    createRestaurant: createRestaurant,
    deleteRestaurant: deleteRestaurant,
    updateRestaurant: updateRestaurant,
    getRestaurantsWithProductsBy: getRestaurantsWithProductsBy,
};