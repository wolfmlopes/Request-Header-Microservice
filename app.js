'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000

//CORS
app.use(cors())
// parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json 
app.use(bodyParser.json())

app.get('/', function(req,res){


	res.json({ip:req.ip.slice(7),language: req.acceptsLanguages()[0], software:req.headers['user-agent'].slice(0,req.headers['user-agent'].indexOf(')')+1)})
})

app.listen(port, function(){
	console.log('Server is running on port: '+port)
})