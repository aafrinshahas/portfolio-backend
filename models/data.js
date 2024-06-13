const mongoose = require('mongoose');

//create schema

const DataSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
})

const DataModel = mongoose.model("data", DataSchema)

module.exports = DataModel