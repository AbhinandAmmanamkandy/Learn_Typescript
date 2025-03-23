
// Score can be number or string

let score: number | string = 33
score = 44
score = "55"

type User = {
    name: String
    id: number
}

type Admin = {
    username: string
    id: number
}

let ghost: User | Admin;

// Type User
ghost = {
    name: "Ghost",
    id: 3344,
}

// Type Admin
ghost = {
    id: 3344,
    username: "GHost"
}

// Variables of both
ghost = {
    name: "Ghost",
    id: 3344,
    username: "GHost" // Can combine variables in other type
}

// function getDbId(id: number | string){
//     console.log(`DB id is: ${id}`);
// }

getDbId(3);
getDbId("4");

function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase()
    }
}

// array
// Either all numbers or all string (basic concept of array - array can only contain same type of data)
const data: number[] | string[] = [1, 2, 3, "4"]

// Workaround
const data2: (string | number | boolean)[] = ["1", "2", 3, true]
// Using any
const data3: any[] = [1, "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"
seatAllotment = "aisle"
seatAllotment = "crew"