module.exports = function myShop(pool) {

    var getOrder = '';
    var getColour = '';
    var getSize = 0;
    var getQty = 0;
    var getGender = '';
    var getEmail = '';
    var getPrice = 0;
    var checkBut = '';
    var final = []
    var order_nos;
    var known;
    var known2;
    var getCost = 0;
    var shoeNames;
    var total = 0;
    var cart = {};
    var finalCart = []
    var storedArray;
    var test;
    var getPayment = '';

    var getUser = '';

    var myObj = {}
    function addName(gender) {
        getGender = gender


    }

     function myData(colour, size, qty,) {
     
        getColour = colour
        getSize = size
      
        getQty = qty



    }

     function pricesData(price) {

        known2 =  pool.query('select * from sku')

        getPrice = price

        store =  pool.query('select * from sku WHERE shoes = $1', [getPrice])
       

        if (getPrice === "/images/b.jpg") {
            pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            shoeNames =  'Urban Find'
            getGender = 'Male'
            getCost = 800
        }
        else if (getPrice === "/images/c.jpg") {
             pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
             shoeNames =  'HDKS Sneaker'
             getGender = 'Male'
            getCost = 1200
        }

        else if (getPrice === "/images/d.jpg") {
             pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
             shoeNames =  'Relay Shoe'
             getGender = 'Male'
            getCost = 700
        }
        else if (getPrice === "/images/e.jpg") {
             pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
             shoeNames =  'Sport Guyisa'
             getGender = 'Male'
            getCost = 1500
        }

        if (getPrice === "/images/5.jpg") {
             pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
             shoeNames =  'Rose Sandal'
             getGender = 'Female'
            getCost = 900
        }
        else if (getPrice === "/images/2.jpg") {
             pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
             shoeNames =  'Red High Heels'
             getGender = 'Female'
            getCost = 1100
        }

        else if (getPrice === "/images/3.jpg") {
             pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
             shoeNames =  'Pink Sneaker'
             getGender = 'Female'
            getCost = 800
        }
        else if (getPrice === "/images/4.jpg") {
             pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
             shoeNames =  'Mini Heels'
             getGender = 'Female'
            getCost = 600
        }

        else if (getPrice === "/images/6.jpg") {
            pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            shoeNames =  'Womens Blazer'
            getGender = 'Female'
           getCost = 1200
       }

       else if (getPrice === "/images/7.jpg") {
        pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
        shoeNames =  'Two Tone Denim'
        getGender = 'Female'
       getCost = 500
   }

   else if (getPrice === "/images/f.jpg") {
    pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
    shoeNames =  'Denim Jacket'
    getGender = 'Male'
   getCost = 550
}

else if (getPrice === "/images/g.jpg") {
    pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
    shoeNames =  'Denim Jean'
    getGender = 'Male'
    getCost = 450
}
        
//console.log(store.rows);

    }

    function getMyCost(){
       return test
    }

    function getTotal(getQty, getCost){
      
      var  myQuantity = getQty
      var  myCost = getCost
      total = myQuantity*myCost
      
    }

    function cartItems(myObj){
       cart = myObj

       finalCart.push(cart)

    
      
       return finalCart
    }

    function cartItemsRemove(){

        myObj = {}
     }

    function getOrders() {
        getOrder = Math.floor(1000 + Math.random() * 9000);
        return getOrder
    }

     function allData() {

        myObj = {
            name: shoeNames,
            category: getGender,
            sizes: getSize,
            colour: getColour,
            prices: getPrice,
            id: getOrder,
            cost: getCost,
            quantity : Number(getQty),
            myTotal : getQty*getCost,
            payment : getPayment
        }
    }

     function finalData() {
        pool.query('insert into myRetails (colour, size, price, order_no,cost,quantity,total, payment) values ($1,$2,$3,$4,$5,$6,$7,$8)', [myObj.colours, myObj.sizes, myObj.prices, myObj.orders, myObj.cost,myObj.quantity, myObj.myTotal,myObj.payment]);
        return  myObj
    }

     function checkOrder(orderz) {
        order_nos = orderz

        known =  pool.query('SELECT * FROM myRetails')

        for (var i = 0; i < known.rows.length; i++) {
            var user = known.rows[i]
            if (user.price == order_nos) {
                final.push(user)
            }
        }
    }

     function lastFinal(payment) {
         getPayment = payment
        return getPayment
    }

    async function getPicture() {
        known = await pool.query('SELECT * FROM myRetails')

        for (var x = 0; x < known.rows.length; x++) {
            var users = known.rows[x]

        }

    }
    async function myStock(){
        known2 = await pool.query('select * from sku WHERE shoes = $1', [getPrice])

        for(var t = 0;t<known2.rows.length;t++){
            var storeStock = known2.rows[t]
        }
       // console.log(storeStock);
        
        return storeStock
    }


    // async function myBask(price, cost) {
    //     checking = false
    //     for (var j = 0; j < theShoes.length; j++) {
    //         if (brand === theShoes[j].brand && color === theShoes[j].color) {
    //             total += theShoes[j].price
    //             theShoes[j].stock--
    //             if (theShoes[j].stock <= 0) {
    //                 theShoes.splice(j, 1)
    //             }
    //             for (var z = 0; z < basket.length; z++) {
    //                 if (basket[z].brand === brand && basket[z].color === color && basket[z].size === Number(size)) {
    //                     basket[z].quantity++;
    //                     checking = true
    //                 }
    //                 else {
    //                     errorM = 'Shoe Added To The Basket'
    //                 }
    //             }
    //         }


    //         if (!checking) {
    //             var finalShoes = {
    //                 brand,
    //                 color,
    //                 size: Number(size),
    //                 quantity: 0
    //             };
    //         }
    //         basket.push(finalShoes)
    //     }

    // }

    return {
        addName,
        myData,
        allData,
        getOrders,
        finalData,
        pricesData,
        checkOrder,
        getPicture,
        lastFinal,
        myStock,
        getTotal,
        getMyCost,
        cartItems,
        cartItemsRemove
    }
}