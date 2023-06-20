const { userModel } = require('../Model/model');

const update = async (req, res) => {
    const { id, name, mobile, address,age } = req.body;
    const update = await userModel.updateOne({_id:id},{name,mobile,address,age});
    update.modifiedCount ? res.json({message:'UPDATED'}).status(202): res.json({message:'ERROR'}).status();
}

module.exports = update;