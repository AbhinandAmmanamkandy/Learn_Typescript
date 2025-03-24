function detectType(val: number | string){
    if(typeof val === "string"){
        val.toLowerCase()
    }
}

function provideId(id: string | null){
    if(!id){
        console.log("Please provide id");
        return
    }
    id.toLowerCase()
}