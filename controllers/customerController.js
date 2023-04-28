const Model = require("../models/model")

class Controller {

    static CustomersList(req, res) {
        Model.Customers((err, data) => {
            if (err) {
                res.send(err);
            } else {
                res.json(data);
            }
        })
    }

    static createCustomers(req, res) {
        let errors = req.query.errors;
        Model.createCustomers(req, (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).send("Error creating Customers: " + err.message);
            } else {
                res.status(200).json(result);
            }
        });
    }
    
    static deleteCustomers(req, res) {
        const id = req.params.id;
        Model.deleteCustomers(id, (err, data) => {
            if (err) {
                res.send(err);
            } else {
                return res.status(200).json({ message: 'Data deleted successfully', data: data });
            }
        });
    }
    
    
}


module.exports = Controller