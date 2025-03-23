// function getValue(myVal: number){
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }
var getHello = function (s) {
    return "Hello";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
function consoleError(errormsg) {
    console.log(errormsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
