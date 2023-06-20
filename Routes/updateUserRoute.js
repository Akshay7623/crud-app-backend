const Router = require('express').Router();
const { userModel } = require('../Model/model');
const update = require('../Controller/updateUserController');

const validateData = async (req, res, next) => {

    const { id, name, mobile, address, age } = req.body;

    if (typeof id === 'string' && id.length === 24) {

        const user = await userModel.find({ _id: id });
        
        if (user[0]) {
            (typeof name === 'string' && typeof mobile === 'string' && typeof age === 'number' && typeof address === 'string' && age > 0) ? next() : res.json({ message: 'INVALID_DATA' }).status(401);
        } else {
            res.json({ message: 'DATA_NOT_EXIST' }).status(404);
        }

    }
}

Router.post('/', validateData, update);
module.exports = Router;