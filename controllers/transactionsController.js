const { values } = require("../models/class");
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
        const { body } = req;

        if (!body || !body.menu || !body.qty || !body.customer_id || !body.price || !body.payment || !body.total || !body.created_at) {
            const error = new Error('Invalid request body');
            error.statusCode = 400;
            return res.status(400).json({ error: error.message });
        }

        Model.createTransactions(req, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }
            console.log('Transaction created successfully');
            res.status(200).json({ data: body });
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