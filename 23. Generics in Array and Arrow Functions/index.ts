// Regular function
function getSearchProducts<T>(products: T[]): T{
    return products[0]
}

// Arrow function
const getMoreSearchProducts = <T>(products: T[]): T => {
    return products[0]
}