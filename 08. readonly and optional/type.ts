type User = {
    readonly _id: string // Readonly
    name: string
    email: string
    isActive: boolean
    credCardDetails?: number // Optional
}

let myUser: User = {
    _id: "1245",
    name: "g",
    email: "g@g.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}

myUser.email = "h@gmail.com"
// myUser._id = "4455" // Read only so no reassign