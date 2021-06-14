

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

 const shuffle =(array) => {
    var currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

 const insertOptions = (textOptions) => {
     var options = []
     options.push(textOptions.option1)
     options.push(textOptions.option2)
     options.push(textOptions.option3)
     options.push(textOptions.option4);
     return options;

 } 
/** 
const defineClassName = (option , chosenOption, rightAnswer) {
    var 
} 
**/

export {getTextLevel , shuffle , insertOptions}