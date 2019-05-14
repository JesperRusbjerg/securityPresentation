const express = require('express')
const app = express()
var cors = require('cors')

app.use(cors())
app.use(express.json());

app.get('/', function (req, res) {
    res.end('lol tard')
})

app.post('/HACK', function (req, res) {
    console.log('YOU GET HACKED NOOB', req.body)
    res.end('You got hack retard lol')
})

app.listen(9001, () => console.log('Server started hehe'))