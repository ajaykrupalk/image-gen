const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/requests.route')

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use("",routes)

app.listen(3000, () => {
    console.log("Listening to Requests...")
})