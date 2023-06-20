const Router = require('express').Router();
const deleteuser = require('../Controller/deleteUserController');
const { userModel } = require('../Model/model');

const validateData = async (req, res, next) => {

    const { id } = req.body;

    if (typeof id === 'string' && id.length === 24) {
        const result = await userModel.find({ _id: id });
        result[0] ? next() : res.json({ message: 'NO_DATA' }).status(404);
    } else {
        res.json({ message: 'INVALID_DATA' }).status(400);
    }

}

Router.post('/', validateData, deleteuser);
module.exports = Router;