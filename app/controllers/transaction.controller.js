const db = require("../models");
const transactions = db.transactions;
const items = db.items;
const Op = db.Sequelize.Op;
const axios = require('axios');
const { QueryTypes } = require("sequelize");


exports.getpending = async(req,res) => {
    //const spname = req.body.sport_name;
    try{
        const allitems = await transactions.findAll({ where: {
            status : 'pending',
        }});
        console.log(allitems);
        res.json({"items" : allitems});
    }
    catch(err){
        console.log(err);
        res.status(404).send("some error" + err);
    }
}




// approve transactions remianing


// Create and Save a new Transaction
exports.createTransaction = async (req, res) => {

    const sport_name = req.body.sport_name;
    const item_name = req.body.item_name;
    const quantity = req.body.quantity;
    const name = req.body.name;
    let initial_transactions;let u_data;
    try{
        u_data = await db.sequelize.query( `SELECT user_id FROM users WHERE name = "${name}";`, {type : QueryTypes.SELECT});
    }catch(err){
        console.log("user id error" , err);
    }
    try{
        initial_transactions = await db.sequelize.query("SELECT COUNT(*) as x FROM `transactions`", {type : QueryTypes.SELECT})
    }catch(err){
        console.log("transaction count error" , err);
    }
   
    let ini_trans = initial_transactions[0]['x']+1;
    
    const user_id = u_data[0]['user_id'];
  
    const items_gotten = await axios.post('http://localhost:8000/sport/findavailableitems',{
        sport_name : sport_name,
        item_name : item_name,
        quantity : quantity
    });

    //console.log("here",items_gotten.data);
    if(items_gotten.data.items == "not available" || items_gotten.data.items == "failure" ){
        console.log("lol");
        res.send("transactions not created ")
    }else{
        console.log(items_gotten.data);
        objs = items_gotten.data.items;
        console.log(objs);
        for(i = 0; i< quantity;i++){
            it = objs[i];
            newtrans = {
                user_id : user_id,
                item_id : it['item_id'],
                date_issued : new Date().toISOString().slice(0, 19).replace('T', ' '),
                status : 'pending',
                transaction_id : ini_trans,
            }
            ini_trans+= 1;

            transactions.create(newtrans)
            .then(data => {
                console.log("transaction inserted");
                //res.status(200).send("data inserted");
            })  
            .catch(err => {
                console.log("transaction couldnt be created ", err);
            });  

            await items.update({ status : "reserved"}, {
                where : {
                    item_id : it['item_id'],
                }
            })
 
        };

        res.send("transactions created successfully")
        
    }
};
