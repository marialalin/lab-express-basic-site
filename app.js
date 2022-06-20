const express = require("express")

const app = express()




//Middlewares

app.use(express.static(`${__dirname}/public`))


app.get("/", (req, res, next) => {
    res.sendFile(`${__dirname}/views/index.html`)
})

app.get("/about", (req, res, next) => {
    res.sendFile(`${__dirname}/views/about.html`)
})

app.get("/contact", (req, res, next) => {
    res.sendFile(`${__dirname}/views/contact.html`)
})







const port = 3000
app.listen(port, () => console.log(`Application listening at port ${port}`))

