const path = require('path')
const express = require('express')
const getCatFact = require('./utils/getCatFact')

const app = express()

const publicDirPath = path.join(__dirname,'../public/')

app.set('view engine', 'hbs')
app.use(express.static(publicDirPath))

//Main Page
app.get('', (req, res) => {
  res.render('index')
})

app.get('/fact', (req, res) => {
  getCatFact( (text) => {
    res.send({message: text})
  })
})

app.get('*', (req, res) => {
  app.send('404')
})

app.listen(3000, () =>{
  console.log('Server is up on port 3000.')
})
