const express = require('express');
const admin_token_val = require('../middleware/adminTokenVal');
const { add_village, get_villages,show_all_villages } = require('../controllers/villageCont');
const villageRoute = express.Router();





villageRoute.route('/add/village').post(admin_token_val,add_village);
villageRoute.route('/villages').get(admin_token_val,get_villages);
villageRoute.route('/show/all/villages').get(show_all_villages);




module.exports = villageRoute;