const express = require('express')
const app = express()
const port = 5000

app.get('/about', (req, res) => {
  res.send({about: 'This is about page!'})
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})