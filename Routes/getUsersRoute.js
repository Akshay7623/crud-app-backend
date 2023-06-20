const Router = require('express').Router();
const { userModel } = require('../Model/model');

const validateData = async(req, res) => {
   const data = await userModel.find({});
   res.json(data);
}

Router.get('/', validateData);
module.exports = Router;