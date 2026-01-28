require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/mail', (req, res) => {
    res.send('ar9@gemail.com')
})

app.get('/login', (req, res) => {
    res.send('<h1> please login first </h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
