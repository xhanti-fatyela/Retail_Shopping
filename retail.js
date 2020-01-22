module.exports = function myShop(pool) {

    var getType = '';
    var getColour = '';
    var getSize = 0;
    var getGender = '';

    var getMail = ''
    var getPhone = ''

    var myName = '';
    async function addName(add,gender) {

        myName = add
        getGender = gender
        await pool.query('insert into users (user_names ,gender) values ($1,$2)', [myName, getGender]);
        
    }

    async function myData(type,colour,size){
         getType = type
         getColour = colour
         getSize = size
         await pool.query('insert into shoes (types , colours, size) values ($1,$2,$3)', [getType, getColour, getSize]);
    }

    async function contact(mail,phone){

        getMail = mail
        getPhone = phone
        await pool.query('insert into contacts (emails ,phonenumber) values ($1,$2)', [getMail, getPhone]);
    }

    function allData(){
        var myObj = {
            myName,
            getGender,
            getType,
            getColour,
            getSize
        }
        console.log(myObj);
        
    }
    return {
        addName,
        myData,
        allData,
        contact
    }
}