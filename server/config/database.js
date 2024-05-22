const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })
    .then(() => console.log(" Manish 543 DB Connected Successfully"))
    .catch( (error) => {
        console.log("Manish 543 DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
};