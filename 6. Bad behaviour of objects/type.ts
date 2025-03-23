const User = {
    name: "Ghost",
    email: "ghost@gmail.com",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){   }
createUser({name: "Ghost", isPaid: false, email: "ghost@gmail.com"}) // Not possible

// Possible. Why?
let newUser = {name: "Ghost", isPaid: false, email: "ghost@gmail.com"}
createUser(newUser)

function createCourse():{name: string, price: number}{
    return {name: "Ghost", price: 500}
}