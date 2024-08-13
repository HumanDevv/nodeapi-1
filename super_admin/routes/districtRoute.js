const express = require('express');
const admin_token_val = require('../middleware/adminTokenVal');
const { add_district,get_district } = require('../controllers/districtContr');
const districtRoute = express.Router();





districtRoute.route('/add/district').post(admin_token_val,add_district);
districtRoute.route('/district').get(admin_token_val,get_district);






module.exports = districtRoute;