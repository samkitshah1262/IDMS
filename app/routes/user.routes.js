const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();



const dbService = require('./dbService');
const { response } = require('express');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


app.use('/add_user', (req,res) => {
    const { user_id, email, name, user_type, phone, auth_id} = req.body;
    const db= dbService.getDbServiceInstance();
    const result = db.addUser(user_id, email, name, user_type, phone, auth_id);
    result
    .then(data => res.json({inserted : true}))
    .catch(err => console.log(err));
} )

app.use('/add_transaction', (req,res) => {
    const { user_id, item_id, level, transaction_id, auth_id} = req.body;
    const db= dbService.getDbServiceInstance();
    const result = db.addtransaction(user_id, item_id, level, transaction_id, auth_id);
    result
    .then(data => res.json({inserted_transaction : true, result : data}))
    .catch(err => console.log(err));
} )


app.get('/getpending', (req,res) => {
    const db= dbService.getDbServiceInstance();
    const result = db.getpending();
    result.then(data => {
        console.log(data);
        res.json({data : data, success : true});
    }).catch(err => console.log(err));
})

app.get('/getAll', (req,res) => {
    const db= dbService.getDbServiceInstance();
    const result = db.getAllData();
    result.then(data => {
        console.log(data);
        res.json({data : data, success : true});
    }).catch(err => console.log(err));

});

app.post('/getavailablesport', (req,res) => {
    const {sport} = req.body;
    const db= dbService.getDbServiceInstance();
    const result = db.getavailablesport(sport);
    result.then(data => {
        console.log(data);
        res.json({data : data, success : true});
    }).catch(err => console.log(err));

});


app.listen(process.env.PORT, () => console.log('app is running'));