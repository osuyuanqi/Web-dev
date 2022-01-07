// const fs = require('fs');
// fs.copyFileSync('test1.txt','test2.txt');
// const supervillains = require('supervillains');
// console.log(supervillains.all);
// for(var i = 0; i < 10; i++)
// console.log(supervillains.random());

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  // res.send('Hello World');
  res.sendFile(__dirname + '/index.html')
  console.log(__dirname);
});

app.post('/',function(req,res){
	// res.
	console.log(res);
})

app.listen(3000,function(){
	console.log('Server is running on port: 3000')
});