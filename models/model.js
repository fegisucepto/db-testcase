const pool = require('../db/connections/connection');
const [Transactions, Customers] = require('./class.js');

class Model {
  static Transactions(cb) {
    let query = `select * from "Transactions" order by "created_at" asc`;

    pool.query(query, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        data = data.rows;
        data = data.map((el) => {
          const { id, menu, customer_id, qty, price, payment, created_at, total } = el;
          return new Transactions(id, menu, customer_id, qty, price, payment, created_at, total);
        });
        cb(null, data);
      }
    });
  }

  static createTransactions(req, cb) {
    const { body } = req;

    if (!body || !body.menu || !body.qty || !body.customer_id || !body.price || !body.payment || !body.total || !body.created_at) {
      // Jika ada properti yang kosong atau tidak ada di dalam objek body, hentikan eksekusi query dan kembalikan error
      const error = new Error('Invalid request body');
      error.statusCode = 400;
      return cb(error);
    }

    const query = `INSERT INTO "Transactions" 
    (menu, qty, "customer_id", price, payment, total, "created_at") 
    VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    const values = [body.menu, body.qty, body.customer_id, body.price, body.payment, body.total, body.created_at];

    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return cb(err);
      }

      console.log('Transaction created successfully');
      cb(null);
    });
  }
  
  static deleteTransactions(id, cb) {
    const query = {
      text: 'DELETE FROM "Transactions" WHERE id = $1 RETURNING *',
      values: [id]
    };
  
    pool.query(query, (err, result) => {
      if (err) {
        console.error(err.stack);
        cb(err, null);
      } else {
        console.log('Delete successfully');
        cb(null, result.rows[0]);
      }
    });
  }

  static Customers(cb) {
    let query = `select * from "Customers" order by "id" asc`;

    pool.query(query, (err, data) => {
      if (err) {
        cb(err, null);
      } else {
        data = data.rows;
        data = data.map((el) => {
          const { id, name} = el;
          return new Customers(id, name);
        });
        cb(null, data);
      }
    });
  }
  static createCustomers(req, cb) {
    const { body } = req;

    if (!body || !body.name) {
      // Jika ada properti yang kosong atau tidak ada di dalam objek body, hentikan eksekusi query dan kembalikan error
      const error = new Error('Invalid request body');
      error.statusCode = 400;
      return cb(error);
    }

    const query = `INSERT INTO "Customers" 
    (name) 
    VALUES ($1)`;

    const values = [body.name];

    pool.query(query, values, (err, result) => {
      if (err) {
        console.error('Error executing query:', err);
        return cb(err);
      }
      console.log('Transaction created successfully');
      cb(null, result);
    });
  }

  static deleteCustomers(id, cb) {
    const query = {
      text: 'DELETE FROM "Customers" WHERE id = $1 RETURNING *',
      values: [id]
    };
  
    pool.query(query, (err, result) => {
      if (err) {
        console.error(err.stack);
        cb(err, null);
      } else {
        console.log('Delete successfully');
        cb(null, result.rows[0]);
      }
    });
  }
  
}

module.exports = Model;
