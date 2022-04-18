const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
const users = [
  {
    firstName: 'Tony',
    email: 'tony@stark.com',
    password: 'iamironman'
  },
  {
    firstName: 'Steve',
    email: 'captain@hotmail.com',
    password: 'icandothisallday'
  },
  {
    firstName: 'Peter',
    email: 'peter@parker.com',
    password: 'enajyram'
  },
  {
    firstName: 'Natasha',
    email: 'natasha@gamil.com',
    password: '*parol#@$!'
  },
  {
    firstName: 'Nick',
    email: 'nick@shield.com',
    password: 'password'
  }
]

// setting engine, view engine
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

// setting routes
app.get('/', (req, res) => {
  res.render('index', { isError: false })
})

app.post('/', (req, res) => {
  const user = req.body
  const isUser = users.find(item => {
    return item.email === user.email && item.password === user.password
  })
  if (isUser) {
    res.render('welcome', { user: isUser })
  } else {
    res.render('index', { isError: true })
  }
})

// start and listen
app.listen(PORT, () => {
  console.log(`This website is running on http://localhost:${PORT}`)
})
