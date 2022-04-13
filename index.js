const express = require('express');
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8000; 

//  haalt de data op die in de html wordt gestopt 
const bodyParser = require('body-parser'); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//  database connectie 
require("dotenv").config();
const db = require("./utils/db");

//  voert de functie in de file db uit om zo connectie te maken met de database
db();


// haalt het schema uit het models mapje om zo de informatie 
const User = require('./models/user');


app.engine("hbs", exphbs.engine({
  defaultLayout:"main",
  extname: ".hbs"
})); 
app.set("view engine", "hbs");
app.set('views', './views'); 
app.use("/static", express.static("static"));


app.get("/", (req, res) => {
  res.render("index", {title: "aanmelden"});
});

app.get("/aanmelden"); 

app.get("/account", (req, res)=> {
  res.render("account", {title: "account"}); 
}); 

// app.get('/delete', (req, res) => {
//   res.render("delete", {title: "delete"});  
// }); 

app.post("/aanmelden", async (req, res) => {

  console.log("functie doet het")
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


  // const usercheck = await User.findOne({ email: req.body.email });

  // if(usercheck){
  //   console.log("email bestaat al")
  
  // } else {
  //   user.save(); 
  //   res.redirect("/account");
  // }

}); 

app.post("/account", (req, res) => {
  res.render("account", {
    voornaam: req.user.voornaam,
    achternaam: req.user.achternaam, 
    email: req.user.email, 
    telefoonnummer: req.user.telefoonnummer, 
    plaats: req.user.plaats, 
    afstand: req.user.afstand, 
    opleidings_niveau: req.user.opleidings_niveau,
    schooljaar: req.user.schooljaar,
    opleiding: req.user.opleidng, 
  });
})

// app.post("/delete", (req, res) => {

// User.findOneAndDelete({email: req.user.email})

 
// }); 


app.listen(PORT, function () {
  console.log('listening to port: ', PORT)
});

//  aanroepen niet statische html elementen