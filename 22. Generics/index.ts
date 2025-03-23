// Function that takes in any data types and return the same type of data
// Genereic Function - 

// Here it takes any value and returns the same
function genericFunction<T>(val: T): T{
    return val
}

// More detailed - also here T or Type is same. It can be H, or anything you like
function genericFunctionTwo<Type>(val: Type): Type{
    return val
}s