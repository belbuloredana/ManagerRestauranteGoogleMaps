import "./sync.js";
import { router } from "../server-init.js";
import { sequalizeOperationAPI } from "./operations-api.js";
import { response } from "express";

router
  .route("/sequelize/restaurants")
  .get(async function getSequelizeRestaurants(_, response) {
    const result = await sequalizeOperationAPI.getRestaurants();
    response.status(200).json(result);
  })

router
  .route("/sequelize/restaurants")
  .post(async function createRestaurant({ body }, response) {
    try {
      const result = await sequalizeOperationAPI.createRestaurant(body);
      response.status(200).json("Success!");
    }
    catch (err) {
      console.error(`Error while calling API: ${err}`);
    }
  })

router
  .route("/sequelize/restaurants/:restaurantId")
  .delete(async function deleteRestaurant({ params: { restaurantId } }, response) {
    try {
      const result = await sequalizeOperationAPI.deleteRestaurant(+restaurantId);
      response.status(200).json("Success!");
    }
    catch (err) {
      console.error(`Error while calling API: ${err}`);
    }
  });

router
  .route("/sequelize/restaurants/:restaurantId")
  .put(async function updateRestaurant({ params: { restaurantId }, body }, response) {
    try {
      await sequalizeOperationAPI.updateRestaurant(+restaurantId, body);
      response.status(200).json("Success!");
    }
    catch (err) {
      console.error(`Error while calling API: ${err}`);
    }
  });


router
  .route("/sequelize/restaurantsWithProducts/:restaurantId")
  .get(async function getRestaurantsWithProductsId({ params: { restaurantId } }, response) {
    const result = await sequalizeOperationAPI.getRestaurantsWithProductsBy(+restaurantId);
    response.status(200).json(result);

  });

