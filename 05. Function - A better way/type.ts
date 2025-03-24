// function getValue(myVal: number){
//     if(myVal>5){
//         return true
//     }
//     return "200 OK"
// }

const getHello = (s:string):string => {
    return "Hello"
}

const heros = ["thor", "spiderman", "ironman"]
heros.map(hero => {
    return `hero is ${hero}`
})

function consoleError(errormsg: string): void{
    console.log(errormsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg)
}