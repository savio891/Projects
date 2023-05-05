const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.post('/users', (req, resp) => {
    console.log(req.params)
    console.log(req.body)
    resp.send('<h1>Dados Enviados.</h1>')

})

app.listen(5555)