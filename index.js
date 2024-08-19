require('dotenv').config()//this line is to add env file 
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/', (req, res) => {
    res.send('hello 2')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})