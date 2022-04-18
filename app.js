const express = require('express')

const app = express()
const PORT = 3000

// setting routes
app.get('/', (req, res) => {
  res.send('This is login page')
})

// start and listen
app.listen(PORT, () => {
  console.log(`This website is running on http://localhost:${PORT}`)
})