interface User{
    readonly dbId: number
    email: string
    userId: number
    googleId?: string
    startTrial(): string
    getCoupon(couponname: string, value: number): number
}

// Adding value to interface
// Reopening an interface
interface User{
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const ghost: Admin = {
    dbId: 22, 
    role: "admin",
    email: "ghost@ghost.com", 
    userId: 2211,
    githubToken: "token0",
    startTrial: () => {
        return "Trial Started"
    },
    getCoupon: (name: "ghost", off: 20) => {
        return 10
    }
}