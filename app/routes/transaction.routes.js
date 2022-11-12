module.exports = (app) => {
    const transaction = require("../controllers/transaction.controller");
    var router = require("express").Router();
    router.get("/getpending", transaction.getpending);
    router.post("/addtrans", transaction.createTransaction);
    app.use('/transaction', router);
};



