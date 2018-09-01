const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
//body parser middleware
app.use(bodyparser.json());
const db = require('./config/keys').mongoURI;

mongoose.connect(db).then(
  ()=>{
    console.log("connected to db");
  }
).catch(err=>{console.log(err);});
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("server started on port ${port}"));
