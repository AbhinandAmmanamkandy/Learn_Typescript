interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string
    // startTrial: () => string                                 1 way
    startTrial(): string                                    //  2nd way
    getCoupon(couponName: String, value: number): number    //  With parameter
}

const ghost: User = {dbId: 22, email: "ghost@ghost.com", userId: 2211,
    startTrial: () => {
        return "Trial Started"
    },
    getCoupon: (name: "ghost", off: 20) => {
        return 10
    }
}
ghost.email = "ghost@gmail.com"
// ghost.dbId = 1122
ghost.startTrial()