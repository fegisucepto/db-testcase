"use strict";

class Transactions {
    constructor(id, menu, customer_id, qty, price,payment, created_at, total) {
        this.id = id
        this.menu = menu
        this.price = price
        this.customer_id = customer_id
        this.qty = qty
        this.payment = payment
        this.total = total
        this.created_at = created_at
    }
}

class Customers {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
}

module.exports = [Transactions, Customers]