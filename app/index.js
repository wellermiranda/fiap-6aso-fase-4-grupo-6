const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('FIAP MBA - Arquitetura de soluções')
})

app.listen(port, () => {
  console.log(`Listening at ${port}`)
})