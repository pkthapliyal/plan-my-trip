const mongoose = require("mongoose");

const tripSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    destination: { type: String, required: true },
    noOfTravelers: { type: Number, required: true },
    budgetPerPerson: { type: Number, required: true }
}, { versionKey: false })

const Trip = mongoose.model("trips", tripSchema)
module.exports = { Trip }