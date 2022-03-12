const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require("express-handlebars");
const app = express();
const PORT = 8000;

const db = require('./utils/db');
const req = require('express/lib/request');

app.engine("hbs", exphbs.engine({
  defaultLayout:"main",
  extname: ".hbs"
})); 

app.set("view engine", "hbs");
app.set('views', './views'); 
app.use("/static", express.static("static"));
app.use(bodyParser.urlencoded({extended: true}));

db.connectDb();

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit-form", (req, res) => {

  
  db.connectDb().then(client => {

    client
      .db('userdb')
        .collection('users')
        .insertOne({
          naam: req.body.name,
          achternaam: req.body.surname,
          email: req.body.email,
          telefoonnummer: req.body.phone,
          plaats: req.body.place,
          afstand: req.body.distance,
          opleiding_niveau: req.body.opleiding_niveau,
          schooljaar: req.body.schooljaar, 
          opleiding: req.body.opleiding,
          bijles: req.body.bijles
        });

        res.render('submit-form')
  })
});

app.get("/get-data", async(req,res) => {

  const user = await userCollection.find.toArray()

  

   res.render('/submit-form', {user})

  }); 







app.listen(PORT, function () {
  console.log('listening to port: ', PORT)
});






//  aanroepen niet statische html elementen