const express = require("express")
const port = 3030;
const app = express();
const cors = require("cors")
const { connection } = require("./config/db")


const { tripRoute } = require("./routes/trip.route")

app.use(express.json());
app.use(cors());
app.use("/", tripRoute)



app.listen(port, async () => {
    try {
        await connection;
        console.log("Server is listening at", port)

    } catch (error) {
        console.log("err :", error.message)
    }
})