const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    school: 'FIAP',
    course: 'MBA - Arquitetura de soluções',
    students: process.env.AUTHORS || 'unknown'
  });
})

app.listen(port, () => {
  console.log(`Listening at ${port}`)
})