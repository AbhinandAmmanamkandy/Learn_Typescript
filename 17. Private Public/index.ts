// class User {
//     public email: string // Everything that don't marked is public
//     private name: string
//     private readonly city: string = "Kozhikode"
//     constructor(email: string, name: string){
//         this.email = email
//         this.name = name
//     }
// }

// Smaller way
class User{
    readonly city: string = "Kozhikode"
    constructor(
        public email: string,
        public name: string,
    ){}
}

const ghost = new User("ghost@gmail.com", "ghost")
console.log(ghost.email)