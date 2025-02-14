const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes = require("./airplane_routes");
const citiesRoutes = require("./city_routes");

const router = express.Router();

router.use("/airplanes",airplaneRoutes);
router.use("/cities",citiesRoutes);

router.get('/info', InfoController.info);

module.exports = router;