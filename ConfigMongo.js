const mongoose = require('mongoose');

const connection = async()=>{
    await mongoose.connect(process.env.MONGO_URL);
}

try {
    connection();
} catch (error) {
    console.log(error);
}