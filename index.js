//import express from 'node-modules'
var express = require('express')
var app = express()

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(7777, () => {
  console.log('App is running on port 7777')
})