module.exports = (app) => {
    const items = require("../controllers/item.controller");
    var router = require("express").Router();
    router.post("/insertitems", items.insertitems);
    router.get("/getsportsitems", items.findsportitems);
    router.post("/findavailableitems", items.findavailableitems);
    app.use('/sport', router);
};

