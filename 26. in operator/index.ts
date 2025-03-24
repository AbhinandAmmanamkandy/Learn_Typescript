
interface User{
    name: string,
    email: string
}

interface Admin{
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdmin(account: User | Admin){
    if("isAdmin" in account){
        console.log("Admin")
    }else{
        console.log("User")
    }
}

const ghost: User = {
    name: "Ghost Reborn",
    email: "ghost@gmail.com",
}

isAdmin(ghost)