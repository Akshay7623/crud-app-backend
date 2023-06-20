const { userModel } = require('../Model/model');

const deleteuser = async (req, res) => {
    const { id } = req.body;
    const result = await userModel.deleteOne({_id:id});
    result.deletedCount ? res.json({ message: 'USER_DELETED' }).status(200) :res.json({message:'BAD_GATEWAY'}).status(502);
}

module.exports = deleteuser;