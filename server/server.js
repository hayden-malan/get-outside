const path = require('path')
const express = require('express')

const data = require('./dbtestdata.json')

const server = express()

server.use(express.static(path.join(__dirname, '../public')))

server.get('/api', (req, res) => {
  console.log({data});
  res.json(data)
})

server.get('/', (req, res) => {
  console.log('homepage');

})

module.exports = server
