module.exports = function myShop(pool) {

    var getOrder = '';
    var getColour = '';
    var getSize = 0;
    var getGender = '';
    var getEmail = '';
    var getPrice = 0;
    var checkBut = '';
    var final = []
    var order_nos;
    var known;
    var known2;
    var getCost = 0;
    var store;

    var getUser = '';

    var myObj = {}
    function addName(gender) {
        getGender = gender


    }

    async function myData(user, emails, colour, size) {
        getEmail = emails
        getColour = colour
        getSize = size
        getUser = user



    }

    async function pricesData(price) {

        known2 = await pool.query('select * from sku')

        getPrice = price

        store = await pool.query('select * from sku WHERE shoes = $1', [getPrice])
       

        if (getPrice === "/images/b.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            store = await pool.query('select stock from sku WHERE shoes = $1', [getPrice])
            getCost = 800
        }
        else if (getPrice === "/images/c.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            getCost = 1200
        }

        else if (getPrice === "/images/d.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            getCost = 700
        }
        else if (getPrice === "/images/e.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            getCost = 1500
        }

        if (getPrice === "/images/5.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            getCost = 900
        }
        else if (getPrice === "/images/2.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            getCost = 1100
        }

        else if (getPrice === "/images/3.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            getCost = 800
        }
        else if (getPrice === "/images/4.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
            getCost = 600
        }
console.log(store.rows);

    }

    function getOrders() {
        getOrder = Math.floor(1000 + Math.random() * 9000);
    }

    async function allData() {

        myObj = {
            users: getUser,
            mails: getEmail,
            colours: getColour,
            sizes: getSize,
            prices: getPrice,
            orders: getOrder,
            cost: getCost
        }



    }

    async function finalData() {
        await pool.query('insert into myRetails (users,email , colour, size, price, order_no,cost) values ($1,$2,$3,$4,$5,$6,$7,$8)', [myObj.users, myObj.mails, myObj.colours, myObj.sizes, myObj.prices, myObj.orders, myObj.cost]);
        return await myObj
    }

    async function checkOrder(orderz) {
        order_nos = orderz

        known = await pool.query('SELECT * FROM myRetails')


        for (var i = 0; i < known.rows.length; i++) {
            var user = known.rows[i]
            if (user.order_no == order_nos) {
                final.push(user)
            }

        }
    }

    async function lastFinal() {
        return await final
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
        myStock
    }
}