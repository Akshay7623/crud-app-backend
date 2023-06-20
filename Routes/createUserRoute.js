const Router = require('express').Router();
const create = require('../Controller/createUserController');

const validateData = (req,res,next)=>{
    const { name, mobile, age, address } = req.body;
    (typeof name === 'string' && typeof mobile === 'string' && typeof age === 'number' && typeof address && age>0) ? next() : res.json({message:'INVALID_DATA'}).status(401);
}

Router.post('/',validateData,create);
module.exports = Router;