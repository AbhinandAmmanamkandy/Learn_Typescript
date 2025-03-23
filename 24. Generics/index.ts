interface Database{
    connection: string,
    userName: string,
    password: string
}

function genericFunction<T, U extends Database>(valOne: T, valTwo: U):object{
    return {
        valOne,
        valTwo
    }
}

genericFunction(3, {connection: "connection", userName:"userName", password:"password"})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    addToCart(product: T){
        this.cart.push(product)
    }
}