"use strict";
function isAdmin(account) {
    if ("isAdmin" in account) {
        console.log("Admin");
    }
    else {
        console.log("User");
    }
}
const ghost = {
    name: "Ghost Reborn",
    email: "ghost@gmail.com",
};
isAdmin(ghost);
