var express = require('express')
var app = express()
const session = require('express-session');
var bodyParser = require('body-parser')

const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:tailer44@localhost:5432/testdb';

const pool = new Pool({
    connectionString
});

var retails = require('./retail')
var retailFact = retails(pool)
const exphbs = require('express-handlebars');
const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});



app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(express.static('public'))


app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

var check;
var theType = '';
var theColour = '';
var theSize = 0;
var thegender = '';
app.get('/', function (req, res) {

    res.render('index')
})



app.post('/logins', function (req, res) {
    thegender = req.body.mydrop
    retailFact.addName(req.body.namez, req.body.mydrop)

    check = req.body.namez

    res.redirect('/types')
})


app.post('/types', function (req, res) {
    theType = req.body.mydrop2
    theColour = req.body.mydrop3
    theSize = req.body.mydrop4
    retailFact.myData(theType, theColour, theSize)
    retailFact.allData()
    res.redirect('/form')
})


app.post('/form', function (req, res) {
 
    res.redirect('/confirm')
})


app.get('/types', function (req, res) {


    res.render('Shoes', { userz: check })
})


app.get('/form', function (req, res) {


    res.render('form', {
        userz: check
    })
})

app.get('/confirm', function (req, res) {

    res.render('confirm', {
        userz: check,
        myType: theType,
        myColour: theColour,
        mySize: theSize,
        
    })
})

var PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log('server', PORT)
})
