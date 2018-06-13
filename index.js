const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";

const connect = mongoose.connect(url);

connect.then((db) => {
    //const db = client.db("conFusion");
    //var db = mongoose.connection;
    console.log("Connected correctly to server");

    Dishes.create({
        name: "Anh Nguyen",
        description: "test"
    })
    .then((dish) => {
            console.log(dish);

            return Dishes.find({}).exec();
        })
        .then((dishes) => {
            console.log(dishes);

            //return db.collection("dishes").drop();
            return Dishes.remove({});
        })
        .then(() => {
            //return db.close();
            return mongoose.disconnect();
        })
        .catch((err) => {
            console.log(err);
        })
});
    
