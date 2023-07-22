import express from "express";
import OwnersController from "../controllers/OwnersController.js";
import CarsController from "../controllers/CarsController.js";
import MainController from "../controllers/MainController.js";

const router = express.Router();

router.get('/', MainController.mainPage)

router.get('/query1', MainController.query1)

router.get('/query2', MainController.query2)

router.post('/api/owners', OwnersController.create)

router.get('/api/owners', OwnersController.getAll)

router.get('/api/owners/:id', OwnersController.getOne)

router.get('/api/cars', CarsController.getAll)

router.get('/api/cars/:id', CarsController.getOne)

router.post('/api/cars', CarsController.create)

router.get('/api/carsOC', CarsController.getAllOC)

router.post('/api/carsOC', CarsController.createOC)

export default router;