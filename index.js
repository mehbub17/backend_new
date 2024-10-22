
require('dotenv').config()


const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/twitter',(req,res)=> {
    
    res.send('mehbub is sending server')
})

app.get('/login',(req,res) => {
    
    res.send('<h1> Please login at the site</h1>')
})
app.get('/youtube',(req,res) => {
    
    res.send('<h2> not a you tube</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})