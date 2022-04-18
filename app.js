const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000

// setting engine, view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

// start and listen
app.listen(PORT, () => {
  console.log(`This website is running on http://localhost:${PORT}`)
})
