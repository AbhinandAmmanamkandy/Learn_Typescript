"use strict";
function detectType(val) {
    if (typeof val === "string") {
        val.toLowerCase();
    }
}
function provideId(id) {
    if (!id) {
        console.log("Please provide id");
        return;
    }
    id.toLowerCase();
}
