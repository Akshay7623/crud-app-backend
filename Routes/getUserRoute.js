const Router = require('express').Router();
const { userModel } = require('../Model/model');

//no controller and middleware needed here

const validateData = async (req, res) => {

    const { id } = req.body;

    if (typeof id === 'string' && id.length === 24) {
        const result = await userModel.find({ _id: id });
        result[0] ? res.json(result).status(200) : res.json({ message: 'NO_DATA' }).status(404);
    } else {
        res.json({ message: 'INVALID_DATA' }).status(400);
    }

}

Router.post('/', validateData);
module.exports = Router;