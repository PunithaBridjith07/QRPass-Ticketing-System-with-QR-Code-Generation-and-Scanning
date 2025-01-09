const fs = require('fs').promises;
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    next();
})

app.get('/users', async (req, res) => {
    const users = await fs.readFile('./userData/user.json', 'utf-8');
    const data = JSON.parse(users);

    res.status(200).json({ users: data })
})
// app.post('/new-user', async (req, res) => {
//     const users = await fs.readFile('./userData/user.json', 'utf-8',(err,data)=>)
// })
app.get('/trains', async (req, res) => {
    const trains = await fs.readFile('./trainsData/allTrains.json', 'utf-8');
    const data = JSON.parse(trains);

    res.status(200).json({ trains: data })
})

app.use((req, res, next) => {
    if (req.method === "OPTIONS") {
        return next()
    }
    res.status(404).json({ message: "Page not found" })
})

app.listen(3000, () => console.log("Server started at http://localhost:3000"))