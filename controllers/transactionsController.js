const Model = require("../models/model")

class Controller {

    static TransactionsList(req, res) {
        Model.Transactions((err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        })
    }

    static createTransactions(req, res) {
        let errors = req.query.errors;
        Model.createTransactions(req, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error creating transaction: " + err.message);
            } else {
                res.status(200).json(result);
            }
        });
    }
    
    static deleteTransactions(req, res) {
        const id = req.params.id;
        Model.deleteTransactions(id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                return res.status(200).json({ message: 'Data deleted successfully', data: data });
            }
        });
    }
    
}


module.exports = Controller