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
        const { body } = req;

        if (!body || !body.name) {
            const error = new Error('Invalid request body');
            error.statusCode = 400;
            return res.status(400).json({ error: error.message });
        }

        Model.createCustomers(req, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: err.message });
            }
            console.log('Customers created successfully');
            res.status(200).json({ data: body });
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