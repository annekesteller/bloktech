const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8000;

//  haalt de data op die in de html wordt gestopt 
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//  database connectie 
require("dotenv").config();
const db = require("./utils/db");

//  voert de functie in de file db uit om zo connectie te maken met de database
db();


// haalt het schema uit het models mapje om zo de informatie in de database op te slaan
const User = require('./models/user');
const user = require('./models/user');

// handlebars 
app.engine("hbs", exphbs.engine({
  defaultLayout: "main",
  extname: ".hbs"
}));
app.set("view engine", "hbs");
app.set('views', './views');
app.use("/static", express.static("static"));


app.get("/", (req, res) => {
  res.render("index", {
    title: "aanmelden"
  });
});


app.post("/aanmelden", async (req, res) => {

  //  maakt gebruiker aan en haalt de data op in de body 
  const user = new User({
    voornaam: req.body.voornaam,
    achternaam: req.body.achternaam,
    email: req.body.email,
    telefoonnummer: req.body.telefoonnummer,
    plaats: req.body.plaats,
    afstand: req.body.afstand,
    opleidings_niveau: req.body.opleidings_niveau,
    schooljaar: req.body.schooljaar,
    opleiding: req.body.opleidng,
    bijles: req.body.bijles,
    algemene_voorwaarden: req.body.algemene_voorwaarden,
  });

// checkt in de database of de email al bestaat 
  const usercheck = await User.findOne({
    email: req.body.email
  });
 

  if (usercheck) {
    console.log("email bestaat al")

  } else {
    // slaat de gebruiker op in de database 
    user.save();
    
    // haalt opnieuw alle data op in een nieuwe variabelen om mee te kunnen geven aan "account"
    const huidigeGebruiker = ({
      voornaam: req.body.voornaam,
      achternaam: req.body.achternaam,
      email: req.body.email,
      telefoonnummer: req.body.telefoonnummer,
      plaats: req.body.plaats,
      afstand: req.body.afstand,
      opleidings_niveau: req.body.opleidings_niveau,
      schooljaar: req.body.schooljaar,
      opleiding: req.body.opleidng,
      bijles: req.body.bijles,
      algemene_voorwaarden: req.body.algemene_voorwaarden,
    });
    res.render("account", {
      data: huidigeGebruiker
    });

  }

});


app.post("/delete", async (req, res) => {
  
  //  haalt body op uit de input dus in dit geval het emailadres 
  const { useremail } = req.body; 

//   verwijderd de user uit de database  
  await User.findOneAndDelete({ email: useremail })
  console.log("user is verwijderd")

  // rendered weer 
  res.render("index", {title: "aanmelden"});

}); 


app.listen(PORT, function () {
  console.log('listening to port: ', PORT)
});