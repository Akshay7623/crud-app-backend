const { userModel } = require('../Model/model');

const create = async (req, res) => {
    const user = userModel(req.body);
    const result = await user.save();
    result ? res.json({ message: 'USER_CREATED' }).status(201) :res.json({message:'BAD_GATEWAY'}).status(502);
}

module.exports = create;