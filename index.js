const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const PORT = 8000;

const {test}  = require('./utils/db'); 
require('dotenv').config(); 

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@bloktechanneke.hqr4o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


test(client); 

express()
    .use('static', express.static('static'));
    
const exphbs = require("express-handlebars");
const res = require('express/lib/response');
const { request } = require('express');
    app.engine(
      "hbs",
        exphbs.engine({
        defaultLayout: "main",
        extname: ".hbs",
      })
    );
    
    app.set("view engine", "hbs");
    app.use(bodyParser.urlencoded({ extended: true}));
    
    app.get("/", (req, res) => {
      res.render("index");
    });

   app.post("/submit-form", (req, res) => {
     console.log(req.body); 
     res.send(req.body); 

   }); 
    
   app.listen(PORT, function () {
      console.log('listening to port: ', PORT)
    }); 
 


  
    
    
    //  aanroepen niet statische html elementen



