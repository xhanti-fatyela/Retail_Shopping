var express = require('express')
var app = express()
const session = require('express-session');
var bodyParser = require('body-parser')


const pg = require("pg");
const Pool = pg.Pool;




const connectionString = process.env.DATABASE_URL || 'postgresql://postgres:Wattson@44@localhost:5432/testdb';

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
var theQty = 0;
var thegender = '';
var theMail;
var theOrder = 0;
var list = [];
var getList;
var lists;
var thePayment;
app.get('/',async function (req, res) {
    list = retailFact.finalData()

    console.log(list)
    res.render('index', {list})
})


app.post('/logins', async function (req, res) {
    thegender = req.body.genders

    retailFact.addName(thegender)
    retailFact.allData()

    res.redirect('/Male_Section')
})

app.post('/login', async function (req, res) {
    thegender = req.body.genders

    retailFact.addName(thegender)
    retailFact.allData()

    res.redirect('/Female_Section')
})


app.post('/types',function (req, res) {
    thePrice = req.body.price
    
    retailFact.pricesData(thePrice)
    retailFact.allData()
   

    if(thePrice === "/images/f.jpg" || thePrice === "/images/g.jpg" || thePrice === "/images/6.jpg" || thePrice === "/images/7.jpg"){
        res.redirect('form2')
    }
    else{
    res.redirect('/product')
    }
})

// app.post('/addCart',function (req, res) {
//     thePrice = req.body.price
    
//     retailFact.pricesData(thePrice)
//     retailFact.allData()
   

//     if(thePrice === "/images/f.jpg" || thePrice === "/images/g.jpg" || thePrice === "/images/6.jpg" || thePrice === "/images/7.jpg"){
//         res.redirect('form2')
//     }
//     else{
//     res.redirect('/cart')
//     }
// })

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

app.post('/form',  function (req, res) {
   
    theColour = req.body.colour
    theSize = req.body.size
    
    theQty = req.body.quantity
    retailFact.myData(theColour, theSize,theQty )
    retailFact.getOrders()
    retailFact.allData()
    list =  retailFact.finalData();
    retailFact.getTotal(list.quantity, list.cost);

    var list2 = retailFact.cartItems(list)
    

    
    res.redirect('/cart')
})
app.post('/remove',  function (req, res) {
    retailFact.cartItemsRemove()
    
    retailFact.finalData();

    res.redirect('/cart')
})

app.post('/finish',  function (req, res) {
    retailFact.cartItemsRemove()
    
    

    res.redirect('/')
})



app.post('/checkout',  function (req, res) {
    res.redirect('/checkout')
})

app.post('/toPayment',  function (req, res) {
    res.redirect('/payment')
})

app.post('/payment',  function (req, res) {
    thePayment = req.body.payments
   retailFact.lastFinal(thePayment)
    
    res.redirect('/Thank-You')
})

app.get('/Female_Section',async function (req, res) {
   
    res.render('shoes2')
})

app.get('/Male_Section',async function (req, res) {
    
    
    res.render('Shoes')
})


app.get('/form', function (req, res) {
   
    
    res.render('form')
})

app.get('/form2', function (req, res) {
   
    
    res.render('form2')
})

app.get('/Thank-You', async function (req, res) {

    list = await retailFact.finalData()

    console.log(list);
    res.render('confirm', { list })
})

app.get('/cart',  function (req, res) {
    list = retailFact.finalData()

   
    var list2 = retailFact.cartItems(list)
   // console.log(list2);
    for(var i=0;i<list2.length;i++){
        var user = list2[i].name
    }
            if(list.name === user){
              
        }
    
  
    res.render('cart', {list

    })
})

app.get('/checkout',  function (req, res) {
    list = retailFact.finalData()

    
    
    
    res.render('checkout',{list})
})

app.get('/product',  function (req, res) {
    list = retailFact.finalData()

  
    
    
    res.render('product',{list})
})

app.get('/payment',  function (req, res) {
    list = retailFact.finalData()

    res.render('payment',{list})
})


var PORT = process.env.PORT || 4000

app.listen(PORT, function () {
    console.log('server', PORT)
})
