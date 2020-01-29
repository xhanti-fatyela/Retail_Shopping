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
    var getContact;
    var getCost = 0;

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

    function pricesData(price) {
        getPrice = price
        if (getPrice === "/images/b.jpg") {
            getCost = 800
        }
        else if (getPrice === "/images/c.jpg") {
            getCost = 1200
        }

        else if (getPrice === "/images/d.jpg") {
            getCost = 700
        }
        else if (getPrice === "/images/e.jpg") {
            getCost = 1500
        }

        if (getPrice === "/images/5.jpg") {
            getCost = 900
        }
        else if (getPrice === "/images/2.jpg") {
            getCost = 1100
        }

        else if (getPrice === "/images/3.jpg") {
            getCost = 800
        }
        else if (getPrice === "/images/4.jpg") {
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
        await pool.query('insert into retails (users,email ,contact, colour, size, price, order_no,cost) values ($1,$2,$3,$4,$5,$6,$7,$8)', [ myObj.users, myObj.mails, myObj.contact, myObj.colours, myObj.sizes, myObj.prices, myObj.orders,myObj.cost]);
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

    async function getPicture(){
        known = await pool.query('SELECT * FROM retails')
        
        for (var x = 0; x < known.rows.length; x++) {
            var users = known.rows[x]

        }
       console.log(users);
       
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
        lastFinal
    }
}