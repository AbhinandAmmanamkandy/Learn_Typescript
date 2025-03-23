"use strict";
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
    }
}
const ghost = new User("ghost@gmail.com", "ghost");
console.log(ghost.email);
console.log(ghost.name);
