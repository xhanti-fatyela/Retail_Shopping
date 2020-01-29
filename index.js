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

var thePrice = '';
var theUser;
var theColour = '';
var theSize = 0;
var thegender = '';
var theMail;
var theOrder = 0;
var list = [];
var getList;
var theContact = 0;
app.get('/', function (req, res) {

    res.render('index')
})


app.post('/logins', async function (req, res) {
    thegender = req.body.genders
 
    retailFact.addName(thegender)
    retailFact.allData()

    res.redirect('/types')
})

app.post('/login', async function (req, res) {
    thegender = req.body.genders

    retailFact.addName(thegender)
    retailFact.allData()

    res.redirect('/types2')
})


app.post('/types', function (req, res) {
    thePrice = req.body.price
    retailFact.pricesData(thePrice)
    retailFact.allData()
    res.redirect('/form')
})

app.post('/types2', function (req, res) {
    thePrice = req.body.price
    retailFact.pricesData(thePrice)
    retailFact.allData()
    

    res.redirect('/form')
})

app.post('/types3', function (req, res) {


    res.redirect('/form')
})

app.post('/done', function (req, res) {

    res.redirect('/')
})

app.post('/form', function (req, res) {
    theMail = req.body.myMail
    theColour = req.body.colour
    theSize = req.body.size
    theContact = req.body.myNumber
    theUser = req.body.myUser
    retailFact.myData(theUser,theMail, theContact, theColour, theSize)
    retailFact.getOrders()
    retailFact.allData()

    retailFact.finalData();

    res.redirect('/confirm')
})
app.post('/search', async function (req, res) {

    await retailFact.checkOrder(req.body.search)


    res.redirect('/check')
})


app.get('/types2', function (req, res) {


    res.render('shoes2')
})

app.get('/types', function (req, res) {


    res.render('Shoes')
})

app.get('/types3', function (req, res) {


    res.render('allshoes')
})


app.get('/form', function (req, res) {

    res.render('form')
})

app.get('/confirm', async function (req, res) {
  
    list = await retailFact.finalData()
 
    res.render('confirm',{orders:list.orders})
})

app.get('/check', async function (req, res) {
    list = await retailFact.lastFinal()
    await retailFact.finalOrders()
    for (var i = 0; i < list.length; i++) {
        getList = list[i]
    }

    res.render('check_order',{list,
    prices:getList.price} )
})

var PORT = process.env.PORT || 3000

app.listen(PORT, function () {
    console.log('server', PORT)
})
