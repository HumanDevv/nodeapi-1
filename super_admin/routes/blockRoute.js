const express = require('express');
const admin_token_val = require('../middleware/adminTokenVal');
const { add_block,get_block } = require('../controllers/blockCont');
const blockRoute = express.Router();





blockRoute.route('/add/block').post(admin_token_val,add_block);
blockRoute.route('/block').get(admin_token_val,get_block);





module.exports = blockRoute;