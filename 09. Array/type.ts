// Not possible - it creates array of type `never`

// const superHeros = []
// superHeros.push("spiderman")

const superHeros: string[] = []
superHeros.push("spiderman")

const heroPower: number[] = []
heroPower.push(2)

type User = {
    name: string
    isActive: boolean
}

// Custom array
const allUsers: User[] = []
allUsers.push({name:"Ghost", isActive: true})

// Two dimensional array
const MLModels: number[][] = [
    [255, 255, 255],
    [10, 10, 10]
]