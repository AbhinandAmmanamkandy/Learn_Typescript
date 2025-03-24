// typeof is for primitive data type
// instanceof is for after new keyword

function logValue(x: Date | string){
    if(x instanceof Date){
        console.log(x.toUTCString());
    }else{
        console.log(x.toUpperCase());
    }
}

logValue("This")

type Fish = {
    swim: () => void;
}
type Bird = {
    fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function getFood(pet: Fish | Bird){
    if(isFish(pet)){
        pet
        return "fish food"
    }else{
        pet
        return "bird food"
    }
}