const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine','ejs')

app.get('/', (req, res, next) => {
    res.render("index")
})

app.listen(port)