const mongoose = require("mongoose")



const Taskschema = mongoose.Schema({
title: String,
priority: String,
status: String
})

module.exports = mongoose.model('Task', Taskschema);