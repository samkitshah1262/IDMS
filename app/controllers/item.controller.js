const { QueryTypes } = require("sequelize");
// const { users } = require("../models");
const db = require("../models");
const items = db.items;
const Op = db.Sequelize.Op;

exports.insertitems = async(req,res) => { 
    let id;
    const data = await db.sequelize.query("SELECT COUNT(*) as x FROM `items`", {type : QueryTypes.SELECT});
    id = data[0]['x'];
    let newid = id+1;
    const newitem = {
        item_id: newid,
        item_name : req.body.item_name,
        sport_name : req.body.sport_name,
        status : "available",
        quality : req.body.quality
    }

    items.create(newitem)
    .then(data => {
        console.log(data);
        res.status(200).send("data inserted");
    })  
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the item."
        });
      });  
}


exports.findsportitems = async(req, res) => {
    
    const spname = req.body.sport_name;
    try{
        const allitems = await items.findAll({ where: {
            sport_name : spname,
        }});
        console.log(allitems);
        res.json({"items" : allitems});
    }
    catch(err){
        console.log(err);
        res.status(404).send("some error" + err);
    }
      
};

exports.findavailableitems = async(req,res) => {
    const sport_name = req.body.sport_name;
    const item_name = req.body.item_name;
    const quantity = req.body.quantity;
    try{
        const data = await db.sequelize.query( `SELECT COUNT(*) as x FROM items WHERE item_name = "${item_name}" AND sport_name = "${sport_name}" AND status = "available";`  , {type : QueryTypes.SELECT});  
        const available_items = await db.sequelize.query( `SELECT * FROM items WHERE item_name = "${item_name}" AND sport_name = "${sport_name}" AND status = "available";`  , {type : QueryTypes.SELECT});    
        const av = data[0]['x'];
        // console.log(av, quantity);
        // console.log(available_items);
        if(av >= quantity){
            res.json({"items": available_items});
        }
        else{
            res.json({"items" : "not available"});
        }
    }catch(err){
        console.log(err);
        res.send("failure");
    }
}



