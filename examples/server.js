const express = require('express')
const path = require('path')
const app = express()

app.use(express.static( path.join(__dirname, 'public') ))

app.get('/list', (req, res) => {
  return res.json([{ name: 'ranck' }, { age: 28 }])
})
app.get('/info', (req, res) => {
  return res.json({ name: 'ranck', age: 28 })
})

app.listen(1234, () => {
  console.log('http://localhost:1234')
})

console.log(123)