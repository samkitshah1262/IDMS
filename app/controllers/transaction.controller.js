const db = require("../models");
const Transaction = db.Transactions;
const Op = db.Sequelize.Op;

// Create and Save a new Transaction
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
    // Create a Transaaction
    const transaction = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
    };

    // Save Transaction in the database
    Transaction.create(transaction)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the Transaction."
        });
    });    
};

// Retrieve all Transaction from the database.
exports.findAll = (req, res) => {
  
};

// Find a single Transaction with an id
exports.findOne = (req, res) => {
  
};

// Update a Transaction by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Transaction with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Transactions from the database.
exports.deleteAll = (req, res) => {
  
};
