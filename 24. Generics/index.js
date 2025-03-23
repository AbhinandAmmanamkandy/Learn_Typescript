"use strict";
function genericFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
genericFunction(3, { connection: "connection", userName: "userName", password: "password" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
