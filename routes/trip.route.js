const express = require("express");
const tripRoute = express.Router();
const { Trip } = require("../models/tripmodel");



tripRoute.get("/trips", async (req, res) => {
    try {
        const { filter, sort } = req.query
        console.log(filter, sort)

        if (filter && sort) {

            let sortValue = sort == "asc" ? 1 : -1;
            console.log(sortValue, filter)

            let data = await Trip.find({ destination: filter }).sort({ budgetPerPerson: sortValue })
            return res.status(200).send(data);
        }

        let data = await Trip.find()
        res.status(200).send(data);

    } catch (err) {
        res.status(404).send({ error: err.message })

    }
});


tripRoute.post("/trips", async (req, res) => {
    try {
        const { name, email, destination, noOfTravelers, budgetPerPerson } = req.body;;
        let data = new Trip(req.body)
        await data.save();
        res.status(201).send({ message: "One trip has been added" })
        return
    } catch (err) {
        res.status(404).send({ error: err.message })

    }

});



tripRoute.delete("/trips/:id", async (req, res) => {
    try {
        await Trip.findByIdAndDelete({ _id: req.params.id })
        res.status(200).send({ message: "One trips has been deleted" })
        return
    } catch (err) {
        res.status(404).send({ error: err.message })

    }

});



module.exports = { tripRoute }