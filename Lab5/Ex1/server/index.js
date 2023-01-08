const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const videoroute = require("./routes/api.js")

dotenv.config()          

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected!")).catch((err) => console.log(err))

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('BACKEND IS RUNNING')
  })

app.use("/api", videoroute)

const PORT = process.env.PORT || 8801

app.listen(PORT, () => {
    console.log("Backend server is running!")
}) 