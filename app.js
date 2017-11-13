const express = require('express')
const app = express()
const methodOverride = require('method-override')
const port = 3000

app.use(methodOverride('_method'))

app.set('view engine', 'hbs')

app.get('/', (req, res, next) => {
  const data = {'method': 'get', 'path': '/'}
  res.render('index', data)
})

app.post('/new', (req, res, next) => {
  const data = {'method': 'post', 'path': '/new'}
  res.render('index', data)
})

app.put('/new/1', (req, res, next) => {
  const data = {'method': 'put', 'path': '/new/1'}
  res.render('index', data)
})

app.listen(port, () => {
  console.log('hi we are live at', port)
})
