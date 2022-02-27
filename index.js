const express = require('express')


express()
    .use('static', express.static('static'))
    

    .get ('/home', onhome)
    .get('/about', onabout)
    .get('/login', onlogin)
    .get ('*', error)
    .listen(8000)

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