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
    var getContact;
    var getCost = 0;
    var store;

    var getUser = '';

    var myObj = {}
    function addName(gender) {
        getGender = gender


    }

    async function myData(user, emails, contact, colour, size) {
        getEmail = emails
        getColour = colour
        getSize = size
        getContact = contact
        getUser = user



    }

    async function pricesData(price) {

        known2 = await pool.query('select * from sku')

        getPrice = price

        store = await pool.query('select * from sku WHERE shoes = $1', [getPrice])
       

        if (getPrice === "/images/b.jpg") {
            await pool.query('UPDATE sku shoes SET stock = stock - 1 WHERE shoes = $1', [getPrice])
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

    }

    function getOrders() {
        getOrder = Math.floor(1000 + Math.random() * 9000);
    }

    async function allData() {

        myObj = {
            users: getUser,
            mails: getEmail,
            contact: getContact,
            colours: getColour,
            sizes: getSize,
            prices: getPrice,
            orders: getOrder,
            cost: getCost
        }



    }

    async function finalData() {
        await pool.query('insert into retails (users,email ,contact, colour, size, price, order_no,cost) values ($1,$2,$3,$4,$5,$6,$7,$8)', [myObj.users, myObj.mails, myObj.contact, myObj.colours, myObj.sizes, myObj.prices, myObj.orders, myObj.cost]);
        return await myObj
    }

    async function checkOrder(orderz) {
        order_nos = orderz

        known = await pool.query('SELECT * FROM retails')


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
        known = await pool.query('SELECT * FROM retails')

        for (var x = 0; x < known.rows.length; x++) {
            var users = known.rows[x]

        }

    }
    async function myStock(){
        store = await pool.query('select * from sku WHERE shoes = $1', [getPrice])

        for(var t = 0;t<store.rows.length;t++){
            var storeStock = store.rows[t]
        }
        console.log(storeStock);
        
        return storeStock
    }

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