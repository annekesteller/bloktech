const express = require('express')
const app = express()
const PORT = 8000


express()
    .use('static', express.static('static'))
    

    .get ('/home', onhome)
    .get('/about', onabout)
    .get('/login', onlogin)
    .get ('*', error)
    


 const exphbs = require("express-handlebars");
    app.engine(
      "hbs",
        exphbs.engine({
        defaultLayout: "main",
        extname: ".hbs",
      })
    );
    
    app.set("view engine", "hbs");
    
    app.get("/", (req, res) => {
      res.render("index");
    });
    
    
    //  aanroepen niet statische html elementen

function onhome(req, res){
    res.send('<img src="/img/foto.jpeg" />')
}


function onabout(req, res) {
    res.send('<h1>About me</h1>')
}

function onlogin (req, res) {
    res.send('<h1>Login</h1>')

}

function error (req, res){
       res.send("404 error")
}

app.listen(PORT, function () {
    console.log('listening to port: ', PORT)
  })