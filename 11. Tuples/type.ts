// const user: (string | number)[] = [1, 'hc']

let user: [string, number, boolean]
// user = [1, "hc", true]  // It should be assigned in order of declartion - string, number, boolean
user = ["Ghost", 2, true] // We cannot exceed values too like ["Ghost", 2, true, "Reborn"]

let rgb: [number, number, number] = [255, 255, 255]

type User = [number, string]

const newUser: User = [123, "example@google.com"]

// Changing value
newUser[1] = "ghost@gmail.com"