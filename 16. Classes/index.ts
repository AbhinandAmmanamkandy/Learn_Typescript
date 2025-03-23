class User{
    email: string
    name: string
    constructor(email: string, name: string){
        this.email = email
        this.name = name
    }
}

const ghost = new User("ghost@gmail.com", "ghost")
console.log(ghost.email)
console.log(ghost.name)