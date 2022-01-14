const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({
    school: 'Fiap',
    course: {
      type: 'MBA',
      name: 'Arquitetura de soluções',
    },
    students: process.env.STUDENTS || 'unknown'
  });
})

app.listen(port, () => {
  console.log(`Listening at ${port}`)
})