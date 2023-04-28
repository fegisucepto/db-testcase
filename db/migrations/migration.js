const pool = require("../connections/connection")

let query1 = `CREATE TABLE IF NOT EXISTS "Customers" 
(
id serial PRIMARY KEY,
name VARCHAR(50)
);`

let query2 = `CREATE TABLE IF NOT EXISTS "Transactions" 
(
id serial PRIMARY KEY,
menu VARCHAR(50),
"customer_id" INTEGER,
price INTEGER,
qty INTEGER,
payment TEXT,
total INTEGER,
"created_at" DATE,
FOREIGN KEY ("customer_id")
	REFERENCES "Customers"(id)
);`

pool.query(query1, (err, res) => {
    if (err) {
        console.log(err)
    } else {
        console.log("table Customers created")
        pool.query(query2, (err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log("table Transactions created")
            }
        })
    }
})