

const getTextLevel = (number) => {
    var returned = "";
    switch(number) {
        case 1 :
            returned = "EASY"
            break;
        case 2 :
            returned = "MEDIUM";
            break;
        case 3 : 
            returned = "DIFFICULT";
            break;  
        default :
            returned = "NOT_VALID"       
    }
    return returned;
}


export {getTextLevel}